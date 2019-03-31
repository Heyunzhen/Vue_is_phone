<template>
  <div>
        <b class="b" @click="emit">{{this.list}}</b>
  </div>
</template>

<script>
export default {
    props:{
      list:{
        type:null,
        default:""
      }
    },
    methods:{
      emit(){
          this.$emit('send','我是传送过来的值')
      }
    }
}
</script>

<style>
    .b{
      font-size:15px;
    }
</style>
