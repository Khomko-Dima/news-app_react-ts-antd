import { ActionsTypesNews } from "./actions-types";
import { TFilterNews } from "./reducer";

export const GetNewsStartAction = () => ({
	type: ActionsTypesNews.GET_NEWS_START,
});
export const GetNewsSucssesAction = (news: any, filter: TFilterNews) => ({
	type: ActionsTypesNews.GET_NEWS_SUCSSES,
    news, filter
});
export const GetNewsErrorAction = (error: any) => ({
	type: ActionsTypesNews.GET_NEWS_ERROR,
    error
});

export const SetNewsFilterAction = (filter: TFilterNews) => ({
	type: ActionsTypesNews.SET_FILTER,
    filter
});