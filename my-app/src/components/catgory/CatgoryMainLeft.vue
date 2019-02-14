<template>
    <div id="cate_left">
        <div class="category_left">
            <ul class="childbox">
                <li :class="{active:num == i}" v-for="(item,i) in leftDatas" 
                :key="i" @click="num=i">
                     <router-link :to="'/catgory/'+item.category_id">
                     {{item.category_name}}
                     </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            num:0,
            leftDatas:[]
        }
    },
    methods:{
        getData(){
            let self = this;
            self.$http.get('/category').then(res => {
               // console.log(res)
                 self.leftDatas = res.data;
            },error => {
                console.log(error);       
            })
        }
    },
    mounted(){
        this.getData();
    }
}
</script>

<style scoped>
.active {
    background: #999;
}
</style>
