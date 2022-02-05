<template>
	<div id="app">
		<div id="nav" v-if="isShow">
			<div class="nav_bd">
				<div><router-link to="/home">首页 </router-link></div>
				<!-- //插入两个空的div 控制页面布局 -->

				<div></div>
				<div></div>

				<div @click="toSearch" class="search">
					<span>请输入你要查找的书籍</span>
				</div>
				<div><router-link to="/my">本地书城 </router-link></div>
			</div>
		</div>
		<!-- 展示 搜索列表 -->
		<router-view />
	</div>
</template>

<script>
export default {
	name: "app",
	data() {
		return {
			isShow: true,
		};
	},
	created() {
		this.$store.commit("listenShow", this.isShow);
		console.log(this.$router.history.current.path);
	},
	methods: {
		//跳转到 搜索也
		toSearch() {
			this.$router.push("/search");
			this.isShow = false;
		},
	},

	watch: {
		$route(to,) {
			console.log(to.path);
			if (to.path == '/search') {
				this.isShow = false
				console.log(this.isShow);
			}else{
			this.isShow = true
			}
		},
	},

	// beforeRouteLeave (to, from, next) {
	// 	console.log(to);
	// 	next;
	// }
};
</script>

<style scoped>
@import url("./assets/css/beas.css");
#nav {
	height: 50px;
	width: 100%;
	box-shadow: 0px 6px 5px #f2f2f2;
	line-height: 50px;
}
.nav_bd {
	display: flex;
	justify-content: space-between;
	width: 1220px;
	margin: 0 auto;
}
.search {
	display: inline-block;
	height: 35px;
	margin-top: 7.5px;
	line-height: 36px;
	background-color: #f2f2f2;
	border-radius: 5px;
	width: 300px;
	padding-left: 15px;
}
</style>
