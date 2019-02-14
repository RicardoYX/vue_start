<template>
  <div class="user_i">
    <MineHeader />
    <MineMain />
  </div>
</template>

<script>
import MineHeader from './MineHeader'
import MineMain from './MineMain'
export default {
  data () {
    return {
      msg: 'mine'
    }
  },
  components:{
    MineHeader,
    MineMain
  }
}
</script>

<style>
@import '../../assets/css/mine.css';
</style>
