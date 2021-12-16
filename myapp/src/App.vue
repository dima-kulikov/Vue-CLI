<template>
  <div id="app" >
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  data: () => ({

  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.block{
  outline: 2px solid rosybrown;
  margin: 20px auto;
  max-width: 800px;
  padding: 10px;
}
.menu-btn{
  width: 30%;
  margin: 5px;
  padding: 5px 0;
}
.message{
  padding: 15px 0;
}
button{
  margin: 15px;
  cursor: pointer;
}

</style>
