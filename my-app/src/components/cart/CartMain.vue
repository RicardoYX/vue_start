<template>
  <div>
     <div class="cart_content clearfix" v-for="(item,i) in cartDatas" :key="i">
            <div class="cart_shop clearfix">
                <div class="cart_check_box">
                     <input type="checkbox" />
                    <!-- <div class="check_box"> 
                       
                    </div> -->
                </div>
                <div class="shop_info clearfix">
                   
                    <img src="../../assets/images/buy-logo.png" alt="" class="shop_icon">
                    <span class="shop_name">{{item.shop_name}}</span>
                </div>
                <div class="cart_free clearfix">
                    <span class="free_tip">优惠券></span>
                </div>
            </div>
            <div class="cart_item">
                <div class="cart_item_box">
                    <div class="check_box">

                    </div>
                </div>
                <div class="cart_detial_box clearfix">
     
                    <a href="javascript:void(0)" class="cart_product_link">
                        <img v-lazy="item.product_img_url" alt="">
                    </a>
                    <div class="item_names">
                        <a href="#">
                            <span>{{item.product_name}}</span>
                        </a>
                    </div>
                    <div class="cart_weight">
                        <i class="my_weigth">重量:0.45kg</i>
                        <span class="my_color">颜色:AT800/16</span>
                    </div>
                    <div class="cart_product_sell">
                        <span class="product_money">￥<strong class="real_money">{{item.product_uprice}}</strong>.00</span>
                        <div class="cart_add clearfix">
                            <span class="my_add" @click="addNum(item.product_id)">+</span>
                            <input type="tel" class="my_count" v-model="item.num">
                            <span class="my_jian" @click="decNum(item.product_id)" >-</span>
                        </div>
                    </div>
                    <div class="cart_del clearfix" @click="delCart(item.product_id)">
                        <div class="del_top" >
                        </div>
                        <div class="del_bottom">
                        </div>
                    </div>
                </div>
            </div>
          
        </div>  
        <div class="pop" v-show="flag">
          <div class="pop_box">
              <div class="del_info">
                  确定要删除该商品吗？ 
              </div>
              <div class="del_cancel" @click="delCancel">
                  取消
              </div>
              <div class="del_ok" @click="delOk">
                  确定
              </div>
          </div>
        </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    data() {
        return {
    flag:false,
    curId:''
        }
    },
    computed:{
        ...mapGetters(['cartDatas'])
    },
    methods: {
       ...mapActions(['addNum','decNum','del']),
       delCart(id) {
     this.flag = true;
     this.curId = id;
       },
       delCancel() {
           this.flag = false
       },
       delOk() {
           this.$store.dispatch('del',this.curId);
           this.flag = false
       }
       
    }
}
</script>
