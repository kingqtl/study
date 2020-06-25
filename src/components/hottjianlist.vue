<template>
  
  <div class="flx">
  
  <div v-for="item in hotlist" :key="item.id" style="width:140px; margin-left:60px; margin-bottom:25px;" >
    
    <div> 
    
    <div><router-link :to="{path:'/gddetial',query:{id:item.id}}" ><img :src="item.picUrl" :title="item.copywriter"  style="height:140px;width:140px;" /></router-link></div>
    <div class="tet">{{item.name}}</div>
    
    </div>
    
  </div>

  </div>
 

</template>

<script>
export default {
props:{
   hotlist:Array,
}
}
</script>

<style scoped>

.flx{
  display:flex;  flex-wrap: wrap; justify-self:center;
}
 .el-row {
    margin-bottom: 20px;
   
  }
  .el-row:last-child{
    margin-bottom:0;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
   
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
  
    width:140px;

  }
  .tet{
    width:140px; line-break: auto; text-align:left;
  }
  .row-bg {
    padding: 10px 0;
    
  }
</style>