import { request } from "./api";
import axios from 'axios';

//搜索关键字
export function getSearch(keyword) {
	return request({
		url: "/search",
		params: {
			keyword,
		},
	});
}
//搜索关键字
export function getOther(author) {
	return request({
		url: "/author-books",
		params: {
			author,
		},
	});
}
//搜索关键字
// export function bookChapters(id) {
// 	return request({
// 		url: "/book-chapters",
// 		params: {
// 			id,
// 		},
// 	});
// }
//搜索关键字
export function getBook(id) {
	return axios.get(`https://novel.kele8.cn/book-info/${id}`)
}
//获取 关于书籍章节详情
export function bookChapters(id){
	return axios.get(`https://novel.kele8.cn/book-chapters/${id}`)
}
//获取 书籍源
export function getBookRoot(id){
	return axios.get(`https://novel.kele8.cn/book-sources?view=summary&book=${id}`)
}
//获取 相关书籍推荐
export function getRecBook(id){
	return axios.get(`https://novel.kele8.cn/recommend/${id}`)
}
//获取 相关书籍推荐
export function getBookContent(id, order){
	return axios.get(`https://novel.kele8.cn/api/chapters2/${id}/${order}`)
}
//获取 相关书籍推荐
// export function bookChapters(id){
// 	return axios.get(`http://novel.kele8.cn/book-chapters/${id}`)
// }

//获取 频道小说
export function getSex(){
	return axios.get(`https://novel.kele8.cn/rank-category`)
}
//获取 排行榜详情
export function getSexInfo(id){
	return axios.get(`https://novel.kele8.cn/rank/${id}`)
}