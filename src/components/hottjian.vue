<template>
  <hottjianlist :hotlist='hotlist'></hottjianlist>
</template>

<script>
import hottjianlist from './hottjianlist'
export default {
  
    data(){
    return{
        hotlist:[],
         }
    },

    props:{        
        hotNum:String,
    },
    components:{
        hottjianlist,
    },

    created(){

        this.$axios.get("https://autumnfish.cn//personalized?limit="+this.hotNum)
        .then(res=>{
            this.hotlist=res.data.result
        })
        .catch(error=>{

        })
    }




}
</script>

<style>

</style>