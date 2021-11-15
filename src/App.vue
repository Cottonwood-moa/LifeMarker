<template>
  <Router-view />
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods: {
    handler() {
      console.log(this.message)
      this.message += '!'
    }
  }
}
</script>

<style lang="scss">
body{
  overflow-x: hidden;
}
</style>