import { useContext } from "react"
import Newsapi from "../../services/config";
import { GetNewsErrorAction, GetNewsStartAction, GetNewsSucssesAction, SetNewsFilterAction } from "./actions";
import { NewsContext } from "./news-context"
import { TFilterNews } from "./reducer";

const useNewsContext = () => {
    const {store, dispatch} = useContext(NewsContext)
    if (dispatch === undefined) {
		throw new Error('dispatch must be inside a Provider with a value');
	}
	if (store === undefined) {
		throw new Error('store must be inside a Provider with a value');
	}
    return {store, dispatch}
}

const useNewsAsincContext = () => {
    const {store, dispatch} = useNewsContext()

    const getNews = async () => {
        dispatch(GetNewsStartAction())
        try {
            const {articles, totalResults} = await Newsapi.getNews1(store.filter.page, store.filter.pageSize)
            dispatch(GetNewsSucssesAction(articles, {...store.filter, count: totalResults}))
        } catch (e: any) {
            dispatch(GetNewsErrorAction(e))
        }
    }
    const setFilter = async (filter: TFilterNews) => {
        dispatch(GetNewsStartAction())
        try {
            const {articles, totalResults} = await Newsapi.getNews1(filter.page, filter.pageSize)
            dispatch(GetNewsSucssesAction(articles, {...filter, count: totalResults}))
        } catch (e: any) {
            dispatch(GetNewsErrorAction(e))
        }
    }
    return {...store, getNews, setFilter }
    
}

export {useNewsContext, useNewsAsincContext}