<template>
	<div class="common">
		<div v-for="(item, index) in result" :key="item.id">
			<div class="common_title">
				<h2>{{ item.title }}</h2>
			</div>
			<div v-if="resResult.length != 0" class="common_bd">
				<div v-for="item_info in resResult[index]" :key="item_info._id">
					<div class="item_info" @click="toDetailPage(item_info)">
						<img
							:src="'http://statics.zhuishushenqi.com' + item_info.cover"
							alt=""
						/>
						<p class="item_title">{{ item_info.title }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { getSexInfo } from "../../api/home";
export default {
	name: "commonDetail",
	props: ["result"],
	data() {
		return {
			// id: '',  //保存所有分类标签的id
			resResult: [],
			results: {},
		};
	},
	created() {
		// for (let i = 0;  i < this.result.length; i++) {
		//     // if (Object.hasOwnProperty.call(result, item)) {
		//     //     const element = result[item];
		//     // }
		// }
		setInterval(() => {
			this.results = this.result;
		}, 100);
	},
	watch: {
		results() {
			for (let i = 0; i < this.result.length; i++) {
				// console.log(;
				getSexInfo(this.results[i]._id).then((res) => {
					this.resResult.push(res.data.ranking.books.splice(0, 6));
				});
			}
		},
	},
	methods: {
		toDetailPage(resResult) {
			console.log(resResult);
			this.$router.push(`/detail/${resResult._id}`);
		},
	},
};
</script>

<style scoped>
.common_title h2 {
	font-weight: 400;
	margin: 10px 0;
	background-color: transparent;
}
.common_bd {
	display: grid;
    grid-template-columns: repeat(6, 1fr);
	min-height: 200px;
	background-color: #f2f2f2;
	padding: 15px 30px;
	border-radius: 10px;
	/*  */
}
.item_info {
	text-align: center;
	justify-content: space-between;
    align-items: center;

}
.item_info img {
	width: 160px;
	height: 200px;
	border-radius: 10px;
}
.item_title {
	margin-top: 10px;
}
</style>
