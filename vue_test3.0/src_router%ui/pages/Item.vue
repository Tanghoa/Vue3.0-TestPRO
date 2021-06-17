<template >
    <el-table-column
        prop="tbd"
        label="编号"
        width="180">
      </el-table-column>
    <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column>
          <el-button type="primary" round @click="del">删除</el-button>
          <span>{{index}}</span>
      </el-table-column>
</template>
<script>
export default {
    data(){
        return{
            index:''
        }
    },
    props:{
        delele:Function,
         use:Object,
        
    },
    methods:{
        del(){
           
            this.delele(this.use.tbd)
        }
    }
    
}
</script>
<style>

</style>