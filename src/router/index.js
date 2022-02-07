import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/home/homePage.vue");
const Detail = () => import("../views/detail/detailPage.vue");
const Read = () => import("../views/detail/readBook.vue");
const Search = () => import("../views/search/searchPage.vue");
const My = () => import("../views/my/myPage.vue");

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: '/home',
	},
	{
		path: "/home",
		component: Home,
	},
	{
		path: "/search",
		component: Search,
	},
	{
		path: "/detail/:id",
		name: "Detail",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: Detail,
	},
	{
		path: "/read/:id/:order",
		name: "Read",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: Read,
	},
	{
		path: "/my",
		name: "My",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: My,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
