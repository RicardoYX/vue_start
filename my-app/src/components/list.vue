<template>
  <div class="index-category">
        <div class="category" :key="i" v-for="(list,i) in lists"><i class="iconfont" v-bind:class="list.icon"></i><label>{{list.title}}</label></div>
  </div>
</template>

<script>
export default {
  //name: 'testB',
  data () {
    return {
        lists:[{title:'在线咨询',icon:'icon-shenghuo'},
                {title:'在线咨询',icon:'icon-jiaoyu'},
                {title:'在线咨询',icon:'icon-11'},
                {title:'在线咨询',icon:'icon-jiazheng'},
                {title:'在线咨询',icon:'icon-shenghuo'},
                {title:'在线咨询',icon:'icon-shenghuo'}]
    }
  }
}
</script>
<style>
/*index-category*/
.index-category {
    margin-top: 5%;
}
.index-category .category {
    width: 50%;
    float:left;
    text-align:center;
}
.index-category .category .iconfont {
    font-size: 40px;
    display:inline-block;
    padding: 10%;
    border-radius: 50%;
    color:#fff;
    border: 3px solid #f9f9f9;
    box-shadow: 0px 0px 6px rgba(0,0,0,.5);
}
.index-category .category:nth-child(1) .iconfont{
    background: #f95730;
}
.index-category .category:nth-child(2)  .iconfont{
    background: #fa69b9;
}
.index-category .category:nth-child(3)  .iconfont{
    background: #49dacf;
}
.index-category .category:nth-child(4)  .iconfont{
    background: #908cfd;
}
.index-category .category:nth-child(5)  .iconfont{
    background: #92d85c;
}
.index-category .category:nth-child(6)  .iconfont{
    background: #ecbe35;
}
.index-content .index-category .category label {
    display: block;
    padding: 10% 0;
    color: #999;
}
/*index-category end*/
</style>
