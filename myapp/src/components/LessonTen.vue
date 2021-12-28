<template>
    <div class="info-block active-lesson">
      <div>Введите Ваши данные:</div>
        <h3>{{fullName}}</h3>
        <input type="text" @keyup.enter="setName">
        <input type="text" @keyup.enter="upSecond">
    </div>
</template>

<script>

export default {
  name: 'LessonTen',
  data() {
    return {
      pageName: 'Lesson - 10',
      firstName: '',
      lastName: '',
    };
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName || 'first name'}, ${this.lastName || 'last name'}`;
      },
      set(value) {
        console.log(value);
      },
    },
  },
  methods: {
    setName(e) {
      // this.firstName = e.target.value;
      this.fullName = e.targer.value;
    },
    upSecond(e) {
      this.lastName = e.target.value;
    },
    // setName(e) {
    //   this.fullName = e.targer.value;
    // },
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
