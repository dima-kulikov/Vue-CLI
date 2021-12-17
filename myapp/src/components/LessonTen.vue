<template>
    <div class="info-block active-lesson">
      <div>Введите Ваши данные:</div>
        <h3>{{nameVizible}}</h3>
        <input type="text">
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
    nameVizible() {
      return `${this.firstName || 'first name'}, ${this.lastName || 'last name'}`;
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
