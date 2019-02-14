<template>
	<div class="cart_fo">
		<footer class="cart_footer">
		    <div class="all_check_box">
		       
				 <input type="checkbox" />
		        <span>全选</span>
		    </div>
		    <div class="count_money_box">
		        <div class="heji">
		            <strong>合计:</strong> 
		            <strong>￥</strong>
		            <strong>{{total.toFixed(2)}}</strong>
		        </div>
		        <div class="total_money clearfix">
		            <span>总额:</span>
		            <i>￥</i>
		            <span>{{total.toFixed(2)}}</span>
		            <span>立减:</span>
		            <i>￥</i>
		            <span>0.00</span>
		        </div>>
		            <a href="#" class="go_pay">
		                <span>去计算(1)</span>
		            </a>
		    </div>
		</footer>
	</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
	computed:mapGetters(['total']),
	methods:mapActions(['hideNav','showNav']),
	mounted(){
		this.$store.dispatch('hideNav')
	},
	destroyed(){
		this.$store.dispatch('showNav')
	}
}
</script>

<style>
 .cart_footer .all_check_box span {
    text-align: center;
    line-height: 50px;
    margin-left: 0px;
    color: #232326;
    font-weight: 600;
}
</style>
