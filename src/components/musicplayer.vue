<template>
  <div style="font-size:30px;color:white">
        <i class="el-icon-caret-left"></i>
<i class="el-icon-video-play" @click="pased" ></i>
<i class="el-icon-caret-right" @click="onendeds"></i> <audio :src="musicurl" id="isau"  autoplay="autoplay" @ended="onendeds" controls="controls" class="play"></audio>
        </div>
</template>

<script>
export default {
    data(){
        return{
            musicurl:'',
            ispase:false,
        }
    },

    watch:{
musicid(){
    this.getmusicurl();
}
    },

 props:{
     musicid:String,   
    
 },

 methods:{

     pased(){
         const aud=document.getElementById('isau');
          aud.pause();
     },
     onendeds(){
         this.$emit('onendeds');
     },
     getmusicurl(){

          this.$axios.get("https://autumnfish.cn//song/url?id="+this.musicid)
     .then(res=>{
         this.musicurl=res.data.data[0].url
        //return res.data.data[0].url;
        // console.log(res.data.data[0].url);
     })
     .catch(error=>{
         console.log(error);
     })

     }
 },

 created(){
    
 }

}
</script>

<style>
.play{width:500px;height:30px;}
</style>