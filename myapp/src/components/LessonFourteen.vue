<template>
  <div class="info-block active-lesson">
   <p>{{namePage}}</p>
   <input type="text" v-model="textComputed">
   <h3>Input text value:
       <i>{{text}}</i>
   </h3>
    <div class="checkboxes">
       <input type="checkbox" v-model="checkbox">
       <h3>checkbox value:
           <i>{{checkbox}}</i>
           </h3>
    </div>
    <div>
        <input type="checkbox" v-model="checkboxArray" value="one">
        <input type="checkbox" v-model="checkboxArray" value="two">
        <input type="checkbox" v-model="checkboxArray" value="three">
        <input type="checkbox" v-model="checkboxArray" value="four">
        <p>value in checkbox Array: <i>{{checkboxArray}}</i></p>
    </div>
    <select v-model="select">
      <option value="bmw">BMW</option>
      <option value="volvo">Volvo</option>
      <option value="audi">Audi</option>
    </select>
      <p>value in select: <i>{{select}}</i></p>
</div>
</template>

<script>
export default {
  name: 'LessonFourteen',
  namePage: 'lesson 14',
  data: () => ({
    text: '',
    checkbox: false,
    checkboxArray: [],
    select: '',
  }),
  computed: {
    textComputed: {
      get() {
        return this.text;
      },
      set(value) {
        this.text = value;
      },
    },
  },
};
</script>

<style lang="sass">
.info-block
    max-width: 1430px
    padding: 10px 15px
    margin: 50px auto
    border: 1px solid rgb(188, 187, 194)
.active-lesson
    background-color: rgb(188, 187, 194)
</style>
