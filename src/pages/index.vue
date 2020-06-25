<template>
 <el-container>
  <el-header>



    <el-row type="flex" class="row-bg" justify="center">
  <el-col :span="10">  <el-menu  mode="horizontal" @select="handleSelect" class="el-menu-demo">
  <router-link to="/search"  active-class="bgd" tag="el-menu-item" index="1">音乐搜索</router-link>
  <router-link to="/hotmusic"  active-class="bgd" tag="el-menu-item" index="2">热歌推荐</router-link>
    <router-link to="/"  active-class="bgd" tag="el-menu-item" index="3">音乐搜索</router-link>
      <router-link to="/"  active-class="bgd" tag="el-menu-item" index="4">音乐搜索</router-link>

</el-menu>

</el-col>
  
  <el-col :span="6"><el-input placeholder="请输入内容" v-model="musicname"  @keyup.13.native='search' class="input-with-select">
   
    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
  </el-input></el-col>
</el-row>
  </el-header>
  <el-main>
    
    <keep-alive>
    <router-view :key="key"></router-view>
    </keep-alive>
    
   </el-main>

   
  <el-footer>
    <player :musicid='musicid'></player>
  </el-footer>
</el-container>
</template>

<script>
import player from '../components/musicplayer'
export default {
  name: 'index',
  data () {
    return {
      musicname:'',
       //musicid:'',
    }
  },



  components:{
    player,
  },

  watch:{
    musicid(){
      //alert('ddd');
    }
  },
  computed:{
    musicid(){
      return this.$store.state.musicid
    },
   
    key(){
      return this.$route.name?this.$route.name + +new Date():this.$route + + new Date();
    }
  },
  methods:{
    search(){
      this.$router.push({path:'/search',query:{musicname:this.musicname}})
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container{
  height: 100%;margin:0;padding:0;
}
 .el-header, .el-footer {
    background-color:darkslateblue;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    
    width:900px;
    margin:0 auto;
    overflow: auto;
    overflow-x: hidden;

  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  


  .el-menu-demo{width:640px;margin:0 auto;background-color:darkslateblue; }
  .el-menu-item{font-size:16px;color:white;width:130px;}
  .activeIndex{color:wheat;background-color: cadetblue;}
  .bgd{color:wheat; }
</style>
