<template>
<div v-loading="loading">
    <div>
 <gddetialtop :imgurl='imgurl'></gddetialtop>
 </div>

<div>
<seamusiclist :musiclist='musiclist'></seamusiclist>
</div>
  </div>
</template>

<script>
import seamusiclist from '../components/seamusiclist'
import gddetialtop from '../components/gddetialtop'
export default {
data(){
    return{
        musiclist:[],
        imgurl:'',
        loading:false,
    }
},
components:{
    seamusiclist,
    gddetialtop,
},
created(){

    this.loading=true;
    this.$axios.get('https://autumnfish.cn//playlist/detail?id='+this.$route.query.id)
    .then(res=>{
        this.musiclist=res.data.playlist.tracks;
        this.imgurl=res.data.playlist.coverImgUrl;
        this.loading=false;
    })
    .catch(error=>{

    })
}
}
</script>

<style>

</style>