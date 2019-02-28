<template>
	<div id="cate_right">
		 <div class="category_right">
	            <div class="category_banner">
	                <a href="#">
	                    <img src="../../assets/images/banner_1.png" alt="">
	                </a>
	            </div>
	            <div class="category_detail">
	                <h3 class="category_n">Hot Category Goods</h3>
	                <ul>
	                    <li class="category_detail_item" v-for="item in rightDatas" :key="item.product_id">
	                        <router-link :to="'/detail/'+item.product_id" class="category_detail_item_link">
	                            <img v-lazy="item.product_img_url" alt="" class="category_detail_item_pic">
	                            <p class="category_detail_item_name">{{item.product_name}}</p>
	                        </router-link>
	                    </li>
	                
	                </ul>
	            </div>
	        </div> 
	</div>
</template>

<script>
export default {
    data(){
        return {
            rightDatas: []
        }
    },
    mounted(){
       if(this.$route.params.id){
           //console.log('id');
           this.getRightData(this.$route.params.id)
       }
    },
    //添加watch监听的原因是：当分类页面挂载时只发了一次http请求，在点击左边的类别时，路由变化但是不会再调用getRightData的方法导致右边数据无法更新，
    //添加watch属性后，当路由发生变化时调用getRightData方法获取右边数据
    watch:{
        $route(to,from){
            if(to.params.id){
                this.getRightData(to.params.id)
            }
        }
    },
    methods:{
        getRightData(id) {
            let self = this;
            self.$http.get('/categorygoods/',{params:{mId:id}})
            .then(res => {
                //console.log(res);
                self.rightDatas = res.data;
            },error => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
.active {
    background: #666;
}
</style>

