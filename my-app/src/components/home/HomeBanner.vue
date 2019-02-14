<template>
    <div class="home_ban">
        <div class="m_banner clearfix" id="my_banner">
            <ul class="banner_box">
                <li v-for="(v,i) in imgDatas" v-show="i == num" :key='i'>
                    <img :src="v"/>
                </li>
            </ul>
            <ul class="point_box">
                <li v-for="(v,i) in imgDatas" v-show="i == num" :key="i"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            num:0
        }
    },
    props:["imgDatas"],
    methods:{
        aotoPlay:function(){
            this.num++;
            if(this.num == this.imgDatas.length){
                this.num = 1;
            }
        },
        play:function(){
            setInterval(this.aotoPlay,2000)
        }
    },
    mounted:function(){
        this.play()
    }
}
</script>
