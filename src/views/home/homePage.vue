<template>
	<div id="home_page">
		<div class="home">
			<div class="title">
				<p>男频</p>
			</div>
			<common-detail  v-if="Object.keys(result) !== 0" :result="result.male"></common-detail>
            <div class="title">
				<p>女频</p>
			</div>
			<common-detail  v-if="Object.keys(result) !== 0" :result="result.female"></common-detail>
            <div class="title">
				<p>出版社</p>
			</div>
			<common-detail  v-if="Object.keys(result) !== 0" :result="result.epub"></common-detail>
            <div class="title">
				<p>漫画</p>
			</div>
			<common-detail  v-if="Object.keys(result) !== 0" :result="result.picture"></common-detail>
		</div>
	</div>
</template>

<script>
import commonDetail from "./commonDetail.vue";
import { getSex } from "../../api/home";
export default {
	name: "homePage",
	data() {
		return {
			result: [],
		};
	},

	created() {
		this.getSex();
	},
	methods: {
		getSex() {
			getSex().then((res) => {
				this.result = res.data;
				console.log(this.result);
			});
		},
	},
	components: {
		commonDetail,
	},
};
</script>

<style scoped>
.home {
	width: 1200px;
	margin: 0 auto;
}
.title{
    position: relative;
    margin-top: 4px;
    height: 35px;
    color: #fff;
    border-bottom: 3px solid #ea4c89;
}
.title p{
    padding: 3px 10px;
    vertical-align: bottom;
    position: absolute;
    bottom: 0px;
    display: inline-block;
    background-color: #ea4c89;
}
</style>
