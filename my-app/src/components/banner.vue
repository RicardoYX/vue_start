<template>
  <div class="banner">
       <img v-for="(v,i) in imgs" :key="i" :src="v" v-show="i == num"/>
       <div class="banner-circle">
        <ul>
           <li v-for="(v,i) in imgs" :key="i" :class="{'selected':i==num}"></li>
        </ul>  
    </div>
  </div>    
</template>

<script>
export default {
  //name: 'testB',
  data () {
    return {
        num:0,
        imgs:[require('../assets/img/banner1.jpg'),
            require('../assets/img/banner2.jpg'),
            require('../assets/img/banner3.jpg'),
            require('../assets/img/banner4.jpg'),
            require('../assets/img/banner5.jpg')],
    }
  },
  methods:{
      aotoPlay:function(){
          this.num++;
          if(this.num == this.imgs.length){
              this.num = 0;
          }
      },
      play:function(){
          setInterval(this.aotoPlay,1000)
      }
  },
  mounted:function(){
      this.play();
  }
}
</script>
<style>
*{
    margin:0;
    padding:0;
}
ul {
    list-style-type:none;
}
body {
    font-size: 14px;
    background: #fff;
    overflow-y:scroll;
    overflow-x:hidden;
}
html,body {
    max-width:720px;
    height:100%;
    margin:0 auto;
}
/*index*/
.banner {
    position: relative;
}
.banner .banner-circle {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    color: #fff;
}
.banner .banner-circle li{
    display:inline-block;
    background: rgba(0,0,0,.3);
    border-radius: 50%;
    padding:5px;
    margin:2px;
}
.banner .banner-circle ul {
    text-align: center;
}
.banner .banner-circle .selected {
    background: rgba(0,0,0,.8);
}
.banner img {
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>
