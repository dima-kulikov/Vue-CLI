<template>
  <div id="app">
    <h1>{{firstName}}</h1>
    <h2>{{desc}}</h2>
    <p>Автомобиль {{obj.car}} имеет скорость: {{obj.speed}} км/час и цвет: {{obj.color}}</p>
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  // components: {
  //   HelloWorld,
  // },
  data: () => ({
    firstName: 'Dima',
    desc: 'работоспособность VUE',
    obj: {
      car: 'BMW',
      speed: '220',
      color: 'black',
    },
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
</style>
