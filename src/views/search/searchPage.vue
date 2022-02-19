<template>
	<div id="search">
		<header>
			<div class="search_nav">
				<nav class="search_bar">
					<input
						ref="input"
						@keydown.enter="searchChange()"
						autocomplete="off"
						type="text"
						v-model.lazy="search_key"
						name="search"
						@change="searchChange()"
						placeholder="请输入你要查找的书籍"
					/>
					<button class="icons icon iconfont icon-sousuo"></button>
				</nav>
			</div>
		</header>

		<!-- 搜索内容展示 -->

		<div v-show="search_result.length > 0" class="search_bd">
			<p class="item_foo">
				为您找到<span class="index_f">{{ search_result.length }}</span> 本小说
				为您推荐
			</p>
			<section>
				<article>
					<div class="search_main">
						<div class="main_foo">
							<img
								:src="'https://statics.zhuishushenqi.com' + resultIndex.cover"
								alt=""
								srcset=""
								class="indexImage"
							/>
						</div>
						<div class="main_info">
							<p class="book_name">{{ resultIndex.title }}</p>
							<p class="book_author">{{ resultIndex.author }}</p>

							<div class="book_tag">{{ resultIndex.cat }}</div>
							<div class="book_tag">{{ bookInfo.cat }}</div>
							<p class="book_desc">{{ resultIndex.shortIntro }}</p>

							<button class="to_detail">点击查看详细内容</button>
						</div>
					</div>
				</article>
			</section>
			<!-- 所有搜索结果展示 -->
			<section>
				<article>
					<div
						class="search_item"
						@click="toDetail(index)"
						v-for="(item, index) in search_result"
						:key="item._id"
					>
						<div class="img_cover">
							<img
								:src="'http://statics.zhuishushenqi.com' + item.cover"
								alt=""
							/>
						</div>
						<div class="item_info">
							<p>{{ item.title }}</p>
							<p>{{ item.author }}</p>
						</div>
						<div class="follow">
							<i class="icon iconfont icon-xihuan-xuanzhong"></i>
						</div>
					</div>
				</article>
			</section>
		</div>
	</div>
</template>

<script>
import { getSearch, getBook } from "../../api/home";

export default {
	name: "searchPage",
	data() {
		return {
			search_key: "",
			search_result: [], // 获取 搜索结果
			bookInfo: {}, //获取 搜索结果里面的第一个返回值
			resultIndex: {},
		};
	},
	methods: {
		searchChange() {
			this.$refs.input.blur();

			if (this.search_key.trim() == "" || this.search_key.length == 0) {
				// this.search_result = [];
				// return "请输入内容";
				console.log("请输入内容");
			} else {
				getSearch(this.search_key).then((result) => {
					this.search_result = result.data.books;
					this.resultIndex = this.search_result[0];
					this.getBook(this.search_result[0]._id);
				});
				this.$store.commit("searchState", this.search_result);
			}
			//手动判断 用户的输入的内容是否为空 如果 为空则不进行 请求的发送
		},

		getBook(bookId) {
			getBook(bookId).then((res) => {
				this.bookInfo = res.data;
			});
		},

		//跳转到书籍详情页
		toDetail(index) {
			this.$router.push(`/detail/${this.search_result[index]._id}`);
		},
	},
	mounted() {
		//渲染是自动获取 焦点
		// console.log();
		this.$refs.input.focus();
	},
};
</script>

<style scoped>
header {
	width: 100%;
	box-shadow: 0px 0px 5px #f2f2f2;
}
.search_nav {
	display: flex;
	justify-content: center;

	height: 50px;
	line-height: 50px;
	width: 1220px;
	margin: 0 auto;
}
.search_bar {
	width: 70%;
	position: relative;
}
.search_nav input {
	outline: none;
	border: none;
	height: 35px;
	width: 100%;
	border-radius: 10px;
	background-color: #f2f2f2;
	padding-left: 15px;
}
.icons {
	height: 35px;
	font-size: 18px;
	border: none;
	width: 70px;
	border-radius: 10px;
	position: absolute;
	transition: all 0.2s;
	top: 9px;
	/* background-color: #fff; */
	right: 0%;
	background-color: #ea4c89;
	color: rgb(255, 255, 255);
	outline: none;
}
.icon:hover {
	/* color: skyblue; */
	background-color: #ee6e9f;
}

/* .search_bar 样式文件 */

.search_bd {
	padding-left: 15px;
	padding-right: 15px;
	/* padding-bottom: 15px; */
	width: 1220px;
	margin: 0 auto;
	margin-top: 10px;
	border-radius: 12px;
	box-shadow: 0 0 0 1px #f2f2f2;
	padding-bottom: 20px;
}
.item_foo {
	padding-top: 15px;
	padding-bottom: 10px;
}
.index_f {
	color: #ea4c89;
	font-size: 20px;
	font-style: italic;
}

.search_main {
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
}

.indexImage {
	width: 200px;
	height: 240px;
	border-radius: 15px;
}
.main_foo {
	width: 300px;
	display: inline-block;
}
.main_info {
	flex: 1;
}
.main_info img {
	vertical-align: bottom;
}
.book_name {
	color: #ea4c89;
	font-size: 30px;
	font-weight: 600;
	padding-bottom: 5px;
}
.book_author {
	padding-bottom: 5px;
	color: #ee6e9f;
}

.book_tag {
	margin: 10px 0px;
	margin-right: 10px;
	display: inline-block;
	padding: 2.5px 10px;
	border-radius: 10px;
	background-color: #f5c9d9;
	color: #ea4c89;
}

.to_detail {
	width: 200px;
	height: 50px;
	background-color: rgb(122, 226, 245);
	border: none;
	color: #fff;
	border-radius: 10px;
}
.search_item {
	display: flex;
	justify-content: space-around;
	align-items: flex-end;

	margin-top: 20px;
	border-radius: 20px;
	padding: 15px 20px;
	box-shadow: 0 0 0 1px #f2f2f2;
	border: 1px solid transparent;
}
.search_item:hover {
	border: 1px solid #ea4c89;
	box-shadow: 0 0 0 1px #ea4c89;
}
.search_item:hover .item_info p {
	color: #ea4c89;
}
.img_cover img {
	width: 200px;
	height: 240px;
	border-radius: 10px;
	margin-right: 20px;
	overflow: hidden;
}
.item_info {
	flex: 1;
}
.follow {
	color: #ea4c89;
	font-size: 40px;
}
.follow .iconfont {
	font-size: 20px;
}
</style>
