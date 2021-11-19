<template>
  <div
    ref="chatBotToggle"
    class="chatBotToggle"
    data-aos="zoom-in"
    @click="toggleButton"></div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  computed:{
    toggle(){
      return this.$store.state.chatBot.toggle
    }
  },
  watch:{
    toggle(){
      this.justToggle()
    }
  },
  methods:{
    toggleButton(){
      this.$store.dispatch('chatBot/chatBotToggle')
      if(this.toggle){
        this.$refs.chatBotToggle.style.display = 'none'
      }else {
        this.$refs.chatBotToggle.style.display = 'block'
      }
    },
    justToggle(){
      if(this.toggle){
        this.$refs.chatBotToggle.style.display = 'none'
      }else {
        this.$refs.chatBotToggle.style.display = 'block'
      }
    }
  },
}
</script>
<style lang="scss" scoped>
  .chatBotToggle{
    position:fixed;
    bottom:50px;
    right:50px;
    width: 75px;
    height: 75px;
    border-radius:20px;
    background:url(https://media4.giphy.com/media/KegPbvrQghq1y/giphy.gif?cid=ecf05e47ge2uxfl91v9vt5pn4z2065680h0h6njiprwmim30&rid=giphy.gif&ct=g) no-repeat center center ;
    background-size: 101% 101%;
    box-shadow: 0 0 5px 2px rgb(220, 220, 220);
    cursor: pointer;
    transition-delay: 1.5s;
    z-index:4;
  }
</style>