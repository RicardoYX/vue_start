<template>
  <div class="home">
     <div class="m_layout"> 
       <home-search />
         <HomeBanner :imgDatas="imgDatas" />
         <HomeNav />
         <HomeMain />
     </div>
  </div>
</template>

<script>
import HomeBanner from './HomeBanner'
import HomeSearch from './HomeSearch'
import HomeNav from './HomeNav'
import HomeMain from './HomeMain'
export default {
  data () {
    return {
      msg: 'home',
      imgDatas:[require('../../assets/images/l8.jpg'),
            require('../../assets/images/l1.jpg'),
            require('../../assets/images/l2.jpg'),
            require('../../assets/images/l3.jpg'),
            require('../../assets/images/l4.jpg')]
    }
  },
  components:{
    HomeBanner,
    HomeSearch,
    HomeNav,
    HomeMain
  }
}
</script>

<style>
@import '../../assets/css/index.css'
</style>

