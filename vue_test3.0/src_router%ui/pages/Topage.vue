<template>
  <el-table
      :data="use"
      style="width: 100%">

      <Item :delele="delele" :use="use" />
    
     
      
 </el-table>

     <el-button type="primary" round @click="add">add</el-button>
</template>

<script>
import Item from './Item.vue'
  export default {
  components: { Item },
      props:{
          addele:Function,
          use:Object,
          delele:Function,
          
      },
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }]
        }
      },
      methods:{
          add(){
              this.addele()
          }
         
      }
    }
</script>