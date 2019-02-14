<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
   <router-view/>
   <NavBottom v-show="shownav == true" />
  </div>
</template>

<script>
import NavBottom from './components/NavBottom'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  data () {
    return {
         
    }
  },
  computed:mapGetters(['shownav']),
  components: {
   NavBottom
  }
}
</script>

