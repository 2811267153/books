<template>
	<div class="detail_foo" v-if="result != ''">
		<!-- {{result}} -->
		<div class="detail_info">
			<img :src="'http://statics.zhuishushenqi.com' + result.cover" alt="" />
			<p>{{ result.title }}</p>
			<p>{{ result.author }}</p>
		</div>
		<div class="detail_item">
			<h2>作品详情</h2>
			<div class="count">
				共计： {{ result.wordCount | setLatelyFollower }}字
			</div>

			<div class="tags_count" aria-disabled="">
				<div class="tags_item" v-for="item in result.tags" :key="item.key">
					{{ item }}
				</div>
			</div>

			<h2>作品介绍</h2>
			<p class="decs">{{ result.longIntro }}</p>

			<div class="detail_assess">
				<div class="assess_info">
					<div v-if="result.rating != ''">
						<p>{{ result.rating.score }}</p>
						<p>{{ result.rating.tip }}</p>
					</div>
				</div>
				<div>
					<p>{{ result.retentionRatio }}%</p>
					<p>读者留存率</p>
				</div>
				<div>
					<p>{{ result.totalFollower | setLatelyFollower }}</p>
					<p>累计人气</p>
				</div>
			</div>

			<div class="item_info">
				<div class="book_state">{{ isSerial }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "detail-book",
	props: ["result"],
	created() {},
	computed: {
		isSerial() {
			return this.result.isSerial ? "连载中..." : "已完结";
		},
	},
};
</script>

<style scoped>
.detail_foo {
	margin-top: 30px;
	display: flex;
}
.detail_info {
	text-align: center;
	margin-right: 20px;
}
.detail_info img {
	border-radius: 10px;
	width: 180px;
}

.detail_info p {
	margin-top: 5px;
}
h2 {
	font-weight: 400;
}
.detail_item {
	position: relative;
	flex: 1	;
}
.detail_item p {
	margin-top: 5px;
	line-height: 25px;
	text-indent: 2em;
}
.count {
	padding-left: 2em;
	margin: 10px 0;
}
.book_state {
	position: absolute;
	right: 0px;
	bottom: 0px;
	display: inline-block;
	padding: 3px 9px;
	border-radius: 10px;
	background-color: #fabcd4;
	color: #ea4c89;
}

.tags_count {
	display: flex;
	margin-bottom: 15px;
}
.tags_item {
	background-color: rgb(228, 228, 228);
	color: darkgray;
	border-radius: 5px;
	margin-right: 5px;
	padding: 1.5px 5px;
}
.detail_assess {
	display: flex;
	justify-content: space-around;
	text-align: center;

	margin-top: 10px;
	width: 300px;
	padding: 5px 10px;
	border-radius: 10px;
	background-color: #f2f2f2;
}
.detail_assess p {
	text-indent: 0em;
}
.decs {
	text-overflow: ellipsis;
	display: -webkit-box;
	overflow: hidden;
	max-height: 75px;
	text-overflow: ellipsis;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
}
</style>
