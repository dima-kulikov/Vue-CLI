<template>
  <div :class="{'--background': dark}">
    <h1>{{firstName}}</h1>
    <h2>{{desc}}</h2>
    <p>Автомобиль {{obj.car}} имеет скорость: {{obj.speed}} км/час и цвет: {{obj.color}}</p>
    <a v-bind:href="hub" target="_blank">ссылка</a>
    <br>
    <br>
    <a :[atterkey]="hub">ссылка 2</a>
    <br>
    <br>
    <div class="block">
    <button class="menu-btn" v-on:click="msgVisibl = 1">Button - 1</button>
    <button class="menu-btn" v-on:click="msgVisibl = 2">Button - 2</button>
    <button class="menu-btn" v-on:click="msgVisibl = 3">Button - 3</button>
    <div class="message" v-if="msgVisibl == 1">Выводим первый текст</div>
    <div class="message" v-else-if="msgVisibl == 2">Второй текст на экране</div>
    <div class="message" v-else>Третий и последний текст</div>
    </div>
    <div class="block">
      <div v-if="inputNameVizibl">
        <label> Name </label>
        <input type="text" placeholder="Введите свое имя" key="nameInput">
      </div>
      <div v-else>
        <label>Nikname </label>
        <input type="text" placeholder="Введите Никнейм" key="NiknameInput">
      </div>
      <button v-on:click ="inputNameVizibl = !inputNameVizibl">Изменить поле формы</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data() {
    return {
      firstName: 'Dima',
      desc: 'работоспособность VUE',
      hub: 'https://github.com/',
      atterkey: 'href',
      obj: {
        car: 'BMW',
        speed: '220',
        color: 'black',
      },
      msgVisibl: 2,
      inputNameVizibl: true,
    };
  },
  props: {
    dark: {
      type: Boolean,
      default: false,
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

.--background {
  background: black;
}
</style>
