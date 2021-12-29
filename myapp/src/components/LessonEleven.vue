<template>
  <div class="info-block active-lesson">
      <div>{{pageName}}</div>
    </div>
</template>

<script>
export default {
  name: 'LessonEleven',
  data() {
    return {
      pageName: 'Lesson - 12',
      firstName: '',
      lastName: '',
    };
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
