<template>
  <div id="app" >
    <button @click.right="onClick('fun value', $event)"> click button right</button>
    <a href @click.prevent="linkClick">link</a>
    <h3 v-bind:class="text">{{ text }}</h3>
    <input type="text" @keyup.enter="eventOnKey" />
    <div style="margin-top:20px;">пропиши цвет из списка: red, green, black, orange</div>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  data: () => ({
    text: '',
  }),
  methods: {
    onClick(vel, e) {
      console.log(vel, e);
    },
    linkClick() {
      console.log('linkkk');
    },
    eventOnKey(e) {
      console.log(e);
      this.text = e.target.value;
    },
  },
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
.red{
background-color: red;
}
.green{
background-color: green;
}
.black{
background-color: black;
}
.orange{
background-color: orange;
}

</style>
