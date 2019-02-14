<template>
<div>
    <CartHeader />
    <CartMain />
    <CartFooter />
</div>
    
</template>


<script>
import {mapGetters,mapActions} from 'vuex'
import CartHeader from './CartHeader'
import CartMain from './CartMain'
import CartFooter from './CartFooter'
export default {
 components: {
     CartHeader,
     CartMain,
     CartFooter
 }
}
</script>

<style>
    @import '../../assets/css/cart.css'
</style>

