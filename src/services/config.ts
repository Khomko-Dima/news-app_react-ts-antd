import {  TNewsItem } from "../type/type";
const path = "https://newsapi.org/v2/everything";
const apiKey = '&apiKey=e1f6d61fb3224655b09882e1f3fc11b4'

export async function getData(url: string): Promise<any> {
  const res = await fetch(`${path}${url}${apiKey}`)

  if (!res.ok) throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
  return res.json();
  
}


export default class Newsapi {
  //запрос на новости
  static async getNews(url: string): Promise<{articles: TNewsItem[], totalResults: number}> {
    return await getData(url);
  }

  static async getNews1(page: number, pageSize: number): Promise<{articles: TNewsItem[], totalResults: number}> {
    //'?q=art%painter&NFT&sortBy=popularity'
    const params = `page=${page}&pageSize=${pageSize}`
    return await getData(`?${params}`);
  }
}