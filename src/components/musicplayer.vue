<template>
  <div>
      <audio :src="musicurl" autoplay="autoplay" controls="controls" class="play"></audio>
        </div>
</template>

<script>
export default {
    data(){
        return{
            musicurl:'',
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
.play{width:800px;height:30px;}
</style>