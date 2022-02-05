<template>
	<div class="detail_foo">
		<!-- {{result}} -->
        <div class="detail_info"></div>
	</div>
</template>

<script>
export default {
	name: "detail-book",
	props: ["result"],
	created() {},
};
</script>

<style scoped>
.detail_foo {
	margin-top: 30px; 
    display: flex;
}

</style>
