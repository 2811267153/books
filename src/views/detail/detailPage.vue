<template>
    <div id="detail">
        <div class="detail">
            <detail-book :result ="bookInfo"/> 
        </div>
    </div>
</template>

<script>

import {getBook} from '../../api/home';
import detailBook from './detail-book.vue';
    export default {
        name: 'detailPage',
        data(){
            return{
                id: '',
                bookInfo: {},
            }
        },
        created(){
            this.id = this.$route.params.id
            this.getBook(this.id);
        },

        methods: {
            getBook(id){
                getBook(id).then(res => {
                    console.log(res);
                    this.bookInfo = res.data
                })
            }
        },
        components: {
            detailBook
        }
    }
</script>

<style scoped>
    #detail{
        /* background-color: #f2f2f2; */
        width: 100%;
        height: 200px;
    }
    .detail{
        width: 1226px;
        margin: 0 auto;
    }
</style>