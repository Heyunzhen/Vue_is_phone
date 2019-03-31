<template>
  <div id="app">
        <p class="p" @click="handle('我的')">{{defaultname}}</p>
        <Son :list="name" @send="send"></Son>
  </div>
</template>

<script>
import Son from "./components/Son"
export default {
  computed: {
    defaultname() {
      return this.$store.state.defaultname
    }
  },
  name: 'App',
  components:{
    Son
  },
  data() {
    return {
      name:"何运正"
    }
  },
  methods:{
    handle(ster){
      this.name="王建华"
      this.$store.commit({type:"add",payload:"是我传送到仓库的值"})
    },
    send(err){
      console.log(err)
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  text-decoration:none;
  box-sizing:border-box;
  list-style:none;
}
html,body{
width:100%;
height:100%;
}
#app {
  width:100%;
  height:100%;
}
.p{
  margin-bottom:15px;
   font-size:20px;
}
</style>
