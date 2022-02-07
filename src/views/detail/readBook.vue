<template>
    <div class="read_book">
        <div class="read_bd"><span class="err">{{id}}</span> 
            <div class="res_err"><span>当前章节为收费章节请前往追书APP阅读</span> </div>
        </div>
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
.res_err{
    text-align: center;
    padding-top: 200px;
}
</style>