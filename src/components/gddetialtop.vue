<template>
  <div class="topb">

      <div class="left"><img :src='imgurl' class="left" /></div>
      <div></div>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:{
        imgurl:String,
    }
}
</script>

<style scoped>
.topb{
    display: flex;
    padding:20px;
}
.left{
    width:208px;height:208px;border:1px solid #cccccc;padding:1px;
}
</style>