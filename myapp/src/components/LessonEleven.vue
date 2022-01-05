<template>
  <div class="info-block active-lesson">
    <h1>{{title}}</h1>
     <button @click="onClick"> Send event</button>
    </div>
</template>

<script>
export default {
  name: 'LessonEleven',
  props: {
    title: [String, Number],
  },
  data: () => ({
    counter: 0,
  }),
  methods: {
    onClick() {
      this.counter += 1;
      this.$emit('onChangeCounter', this.counter);
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
