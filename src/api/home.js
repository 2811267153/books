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
export function getBook(id) {
	return axios.get(`http://novel.kele8.cn/book-info/${id}`)
}
