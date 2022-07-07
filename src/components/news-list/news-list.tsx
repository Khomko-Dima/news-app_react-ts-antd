import React, { useState, useEffect, useContext } from 'react'
import AppContext from '../context/context'
import useNewsList from './news-list.hook';

import NewsItem from '../news-item/news-item';
import './style.css'
import { Pagination, Spin } from 'antd';
import { TNewsItem } from '../../type/type';
import { useNewsAsincContext, useNewsContext } from '../../context/news/useNewsContext';

const NewsList = () => {
    // const {store, dispatch} = useNewsContext()
    // const { 
    //     loading, 
    //     error, 
    //     articles, 
    //     filter, 
    //     handlerPage, 
    //     setArticles 
    // } = useNewsList({ pageSize: 6 })
    const {isLoading, filter, getNews, error, news, setFilter} = useNewsAsincContext()
    
    useEffect(() => {
        if (!news.length) {
            getNews()
        }
    }, [])
    
    const context:any=useContext(AppContext)

    console.log(context.search)
    // const handlerRemove = (title:string) => {
    //     return (_e:any) => {
    //       console.log(`Клик по ${title} удалить`)
    //       _e.stopPropagation();
    //       const arr: TNewsItem[]|null= articles.filter((el) => {
    //         return el.title !== title
    //       });
    //       setArticles(arr)
    //     };
    //   };

    const handlerPagination = (page: number, pageSize: number) => {
        setFilter({...filter, page: page, pageSize: pageSize})
    }
     
    return (
        <div className='wrapper-news-list'>
            {error && "Error"}
            {isLoading && <div className="example"><Spin /></div>}
            {news &&
                !error &&
                !isLoading && news && news?.map((article, index) => {
                    return (
                        // article.urlToImage !== '' && index >= filter.minIndex &&
                        // index < filter.maxIndex && article.title.includes(context.search) && <NewsItem
                        //     key={article.title}
                        //     handlerSearch={handlerRemove}
                        //     title={article.title}
                        //     description={article.description}
                        //     url={article.url}
                        //     urlToImage={article.urlToImage}
                        // />
                        <NewsItem
                            key={article.title}
                            handlerSearch={() => {}}
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.urlToImage}
                        />
                    )
                })}
            <Pagination
                current={filter.page}
                pageSize={filter.pageSize}
                onChange={handlerPagination}
                total={filter.count}
            />
        </div>
    )
}

export default NewsList