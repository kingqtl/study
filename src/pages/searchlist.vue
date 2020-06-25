<template>
  <seamusiclist :musiclist="musiclist"  v-loading="loading"
></seamusiclist>
</template>

<script>
import seamusiclist from '../components/seamusiclist'
export default {
data(){
    return{
        musiclist:[],
        loading:true,
    }
},
components:{
    seamusiclist,
},

props:{
    //urls:String,
    musicname:String,

    musictype:String,
},
created(){
    
  
        this.$axios.get("https://autumnfish.cn/search?keywords="+this.musicname)
        .then(res=>{
           // that.musiclist=this.res.data.result.songs;
           // console.log(res.data);

           this.musiclist=res.data.result.songs;
           this.loading=false;
        })
        .catch(error=>{

        })
        
    
}


}
</script>

<style>

</style>