import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.filter("setLatelyFollower", (LatelyFollower) => {
	return LatelyFollower < 10000
		? LatelyFollower
		: (LatelyFollower / 10000).toFixed(1) + " 万";
});
  
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
