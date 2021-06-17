<template>
    <h1>about</h1>
    <h2>{{msg}}</h2>
    <input v-model="message">
    <span>{{message}}</span>
</template>

<script>
export default {
    data(){
        return{
            message:'welcome to here'
        }
    },
   
    props:{
        msg:String
    }
}
</script>

<style>

</style>
