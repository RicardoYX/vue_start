<template>
    <div class="goods_detail">
        <header class="top_bar">
            <a @click="goBack" class="icon_back"></a>
            <!-- <a onclick="window.history.go(-1)" class="icon_back"></a> -->
            <h3 class="cartname">商品详情</h3>
            <a href="javascript:void(0)" @click="goHome" class="icon_menu"></a> 
        </header>
        <main class="detail_box">
            <section class="banner_box">
                <ul class="banner_child_box">
                    <li class="banner_item" v-for="(item,i) in goodsImages" :key="i" v-show="i==num">
                        <img :src="item.image_url" alt="" class="banner_pic">
                    </li>
                
                </ul>
                <div class="banner_count">
                        <em id="slide-nub" class="fz18">{{num+1}}</em>
                        <em class="nub-bg">/</em>
                        <em id="slide-sum" class="fz12">{{goodsImages.length}}</em>
                </div>

            </section>
            <section class="product_info clearfix">
                <div class="product_left">
                    <p class="p_name">{{goodsData[0] ? goodsData[0].product_name : ''}}</p>
                    <div class="product_pric">
                        <span>￥</span>
                        <span class="rel_price">{{goodsData[0] ? goodsData[0].product_price : ''}}</span>
                        <span>.00</span>
                    </div>
                    <div class="product_right">
                        降价通知
                    </div>
                </div>

            </section>
            <section class="product_intro">
                <p class="pro_det">
                    {{goodsData[0] ? goodsData[0].product_detail : ''}}
                </p>
           </section>
          
        </main>
        <footer class="cart_d_footer">
            <div class="m">
                <ul class="m_box">
                    <li class="m_item">
                        <a href="" class="m_item_link">
                            <em class="m_item_pic"></em>
                            <span class="m_item_name">卖家</span>
                        </a>
                        <a href="" class="m_item_link">
                            <em class="m_item_pic two"></em>
                            <span class="m_item_name">关注</span>
                        </a>
                        <a href="" class="m_item_link">
                            <em class="m_item_pic three"></em>
                            <span class="m_item_name">购物车</span>
                        </a>
                    </li>
                </ul>
                <div class="btn_box clearfix" >
                    <a href="javascript:void(0)" class="buy_now" @click="goToCart">加入购物车</a>
                    <a href="#" class="buybuy">立即购买</a>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
   export default {
        data () {
            return {
                num:0,
                goodsImages:[],
                goodsData:[]
            }
        },
        mounted(){
            this.getData(this.$route.params.id);
            this.play();
            this.$store.commit('HIDENAV');
        },
        destroyed(){
            this.$store.commit('SHOWNAV')
        },
        methods:{
            aotoPlay(){
                this.num++;
                if(this.num == this.goodsImages.length){
                    this.num = 0;
                }
            },
            play(){
                setInterval(this.aotoPlay,2000)
            },
            goBack(){
                //this.$router.push('/home');
                //this.$router.push({path:'/home'});
                window.history.go(-1)
            },
            getData(id){
                let self = this;
                self.$http.get('/detail',{params:{mId:id}}).then((res)=>{
                    //console.log(res);
                    if(res.status =='200'){
                        self.goodsImages = res.data[0];
                        self.goodsData = res.data[1];
                    }
                },(error)=>{
                    console.log(error);
                })
            },
            goToCart(){
                this.$router.push('/cart')
                let data = JSON.parse(JSON.stringify(this.goodsData[0]))
                data.num = 1;
                this.$store.dispatch('addCart',data)
            },
            goHome() {
                this.$router.push('/home')
            }
        }
  }
</script>
<style>
    @import '../../assets/css/detail.css';
    /* .cart_d_footer {
        z-index:10;
    } */
</style>