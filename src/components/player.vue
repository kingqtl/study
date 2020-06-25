<template>
  <musicplayer :musicid='musicid'></musicplayer>
</template>

<script>
import musicplayer from './musicplayer'
export default {
data(){
    return{
        musicid:this.$route.query.songid
    }
},
components:{
    musicplayer,
   }
}
</script>

<style>

</style>