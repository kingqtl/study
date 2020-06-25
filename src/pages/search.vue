<template>
 
 
 
 <searchlist :musicname="this.$route.query.musicname" :musictype="musictype"></searchlist>





</template>
<script>
import searchlist from './searchlist'
export default {
data(){
    return{
        musicname:this.$route.query.musicname,
        musictype:'',
    }
},
watch:{
 
},
components:{
    searchlist,
}
}
</script>
<style scoped>
.el-me{background-color: #cccccc;}
</style>
