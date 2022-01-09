<template>
  <div id="app">
    <lesson-fourteen></lesson-fourteen>
    <lesson-eleven :user-object="user"
     :titleA="titleA" @onChangeCounter="onChangeCounterInComponent"/>
    <lesson-ten></lesson-ten>
 <div class="info-block">
    <button @click.right="onClick('fun value', $event)"> click button right</button>
    <a href @click.prevent="linkClick">link</a>
    <h3 v-bind:class="text">{{ text }}</h3>
    <input type="text" @keyup.enter="eventOnKey" />
    <div style="margin-top:20px;">пропиши цвет из списка: </div>
    <ul class="list">
      <li v-for="(color, index) in colors" :key="index">{{index +1}} {{ color}}</li>
    </ul>
    <div>Внести новый цвет в массив цветов</div>
    <input type="text" @keyup.enter="addNewColor" />
 </div>
    <div class="info-block">
    <hello-world></hello-world>
    <hello-world dark></hello-world>
    </div>
  </div>
</template>

<script>
import LessonFourteen from './components/LessonFourteen.vue';
import HelloWorld from './components/HelloWorld.vue';
import LessonTen from './components/LessonTen.vue';
import LessonEleven from './components/LessonEleven.vue';

export default {
  name: 'app',
  data: () => ({
    text: '',
    colors: ['red', 'green', 'black', 'orange', 'yellow'],
    titleA: ' title props',
    user: {
      name: 'Dima',
      age: 34,
    },
  }),
  components: {
    HelloWorld,
    LessonTen,
    LessonEleven,
    LessonFourteen,
  },
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
    addNewColor(e) {
      this.colors.push(e.target.value);
    },
    onChangeCounterInComponent(value) {
      console.log('click button:', value * 2);
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
.list{
  text-align: start;
  border: 1px solid black;
  width: 30%;
  margin: 20px auto;
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
.yellow{
  background-color: yellow;
}
</style>
