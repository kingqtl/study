<template>
 


    <el-table
    
    :data="musiclist"
    stripe
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="歌曲名"
      width="auto">
    </el-table-column>
 <el-table-column
      prop="artists[0].name"
      label="歌手"
      width="auto">
    </el-table-column>
  </el-table>


</template>

<script>
export default {
props:{
    musiclist:Array,
},
}
</script>

<style scoped>
.good{height:40px;}
</style>