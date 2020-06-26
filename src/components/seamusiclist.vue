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
      <template slot-scope="scope">
        <a @click="pl(scope.row.id)" target="players"> {{scope.row.name}} </a>
      </template>
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
methods:{
  pl(id)
  {
    //this.$router.push({path:'player',query:{songid:id}})
    this.$store.dispatch('SetMusicID',id.toString());

    this.$message('已添加到播放列表！');

    //console.log(this.$store.state.musicid);
    //alert(id);
    
  }
}
}
</script>

<style scoped>
.good{height:40px;}
</style>