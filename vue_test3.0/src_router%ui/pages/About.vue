<template>
  <div>
    <h2>About</h2>
    <p>{{msg}}</p>
    <input type="text" v-model="message">

    <el-button>{{ message }}</el-button>
  </div>
</template>

<script>
  export default {
    props: {
      msg: String
    },
    data(){
      return{
        message:'welcome to here'
      }
    }
  }
</script>

<style>

</style>