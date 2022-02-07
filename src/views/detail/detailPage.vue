<template>
	<div id="detail">
		<div v-show="bookInfo != 0" class="detail">
			<detail-book v-if="Object.keys(bookInfo).length !== 0 " :result="bookInfo" />
			<!-- 章节信息 -->
			<div @click="getChapter(bookINfoRoot_id)" class="chapter">
				<div class="chapter_info">
					<span>最新章节</span> <span>{{ bookINfoRoot.lastChapter }}</span>
				</div>
				<div
                    @click="toRedBook(index)"
					class="chapter_info"
					v-for="(item, index) in chapters"
					:key="item.id"
				>
					<span>第{{ index + 1 }}章</span><span>{{ item.title }}</span>
				</div>
			</div>

			<!-- 相关书籍推荐 -->

			<p class="recommend_book">
				看过<span class="book_info">{{ bookInfo.title }}</span
				>の人还看过
			</p>
			<div class="rec_info">
				<div
					class="rec_item"
					@click="toRecBook(index)"
					v-for="(item, index) in recBook"
					:key="item.index"
				>
					<div>
						<img
							:src="'http://statics.zhuishushenqi.com' + item.cover"
							alt=""
						/>
					</div>
					<p>{{ item.title }}</p>
					<p>{{ item.author }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getBook, getBookRoot, bookChapters, getRecBook } from "../../api/home";
import detailBook from "./detail-book.vue";
export default {
	name: "detailPage",
	data() {
		return {
			id: "",
			bookInfo: {},
			chapters: [], //保存书籍章节
			bookINfoRoot: {}, // 保存书籍源
			bookINfoRoot_id: "", // 保存书源ID
			recBook: [], //保存相关书籍推荐
		};
	},
	created() {
		this.id = this.$route.params.id;
		this.getBook(this.id);
		this.getBookRoot(this.id);
		this.getRecBook(this.id);
	},

	// watch: {
	// 	id(val, newVal) {
	// 		console.log("val " + val);
	// 	this.getBook(this.id);
	// 	this.getBookRoot(this.id);
	// 	this.getRecBook(this.id);
	// 	},
	// },

	methods: {
		getBook(id) {
			getBook(id).then((res) => {
				this.bookInfo = res.data;
			});
		},
		getBookRoot(id) {
			getBookRoot(id).then((res) => {
				//获取书籍相关的书籍源
				this.bookINfoRoot = res.data[0];
				//保存书源ID
				this.bookINfoRoot_id = this.bookINfoRoot._id;
			});
		},
		getChapter(id) {
			bookChapters(id).then((res) => {
				this.chapters = res.data.chapters;
			});
		},

		//获取 相关书籍推荐
		getRecBook(id) {
			getRecBook(id).then((res) => {
				this.recBook = res.data.books.splice(0, 8);
			});
		},
		toRecBook(index) {
			var id = this.recBook[index]._id;
			this.$router.push(`/detail/${id}`);
			this.id = this.$route.params.id;
            
		this.getBook(this.id);
		this.getBookRoot(this.id);
		this.getRecBook(this.id);
		},
        toRedBook(index){
			// console.log((this.chapters[index]).order);
            this.$router.push(`/read/${this.id}/${this.chapters[index].order}`)
        }
	},
	components: {
		detailBook,
	},
	computed: {},
};
</script>

<style scoped>
#detail {
	/* background-color: #f2f2f2; */
	width: 100%;
	height: 200px;
}
.detail {
	width: 1226px;
	margin: 0 auto;
}
.chapter {
	border-radius: 20px;
	background-color: #f2f2f2;
}
.chapter_info {
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	width: 100%;
	padding: 20px 20px;
}

.recommend_book {
	font-size: 16px;
	margin: 20px 0px;
}
.book_info {
	color: #ea4c89;
	margin: 0 5px;
}
.rec_info {
	text-align: center;

	display: flex;
	justify-content: space-around;
}
.item_info {
	background-color: #f2f2f2;
}
.rec_info p {
	color: #ea4c89;
	padding-top: 5px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.rec_item p:last-child {
	padding-top: 2px;
	color: #fabcd4;
}
.rec_item {
	border: 1px solid transparent;
	width: 150px;
	padding-top: 5px;
	border-radius: 10px;
}
.rec_item img {
	width: 140px;
    height: 190px;
	border-radius: 10px;
}
.rec_item:hover {
	border: 1px solid #ea4c89;
	box-shadow: 1px 1px 1px #ea4c89;
}
</style>
