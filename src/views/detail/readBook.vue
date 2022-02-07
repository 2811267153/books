<template>
    <div class="read_book">
        <div class="read_bd">   <span class="err">ERR</span> 内部服务器错误， 请重试</div>
    </div>
</template>

<script>
    import {getBookContent} from '../../api/home';

    export default {
        name: 'readBook',
        data() {
            return {
                id: '',
                order: '',
            }
        },

        created(){
            this.id = this.$route.params.id    
            this.order = this.$route.params.order    
            console.log(this.id);
            this.getBookContent(this.id, this.order)
        },
        methods: {
            getBookContent(id, order){
                getBookContent(id, order).then(res => {
                    console.log(res +"a");
                })
            }
        }
    }
</script>

<style scoped>
.read_book {
    background-color: #F5F5DC;
    width: 100%;
    height: 100vh;
}
.read_bd{
    padding-top: 10px;
    width: 1220px;
    margin: 0 auto;
} 
.err{
    color: red;
}
</style>