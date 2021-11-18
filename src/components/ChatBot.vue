<template>
  <!-- chatbot toggle -->
  <div
    v-if="toggle"
    class="chatBotToggle"
    data-aos="zoom-in"
    @click="toggleButton"></div>
  <!-- chatbot -->
  <section
    v-if="!toggle"
    class="chatBot"
    data-aos="zoom-in">
    <!-- chatbot header -->
    <div class="header">
      <div class="title">
        <span>Chat Bot</span>
      </div>
      <div
        class="close"
        @click="toggleButton">
        &Cross;
      </div>
    </div>
    <!-- chatbot main -->
    <div
      class="dialog"
      ref="dialog">
      <div class="bot"></div>
      <div class="messageContent">
        <div class="message greeting">
          <div>반갑습니다.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      toggle:true,
      messageLoadingBool:null
    }
  },
  methods:{
    toggleButton(){
      this.toggle = !this.toggle
    },
    messageLoading(){
      this.messageLoadingBool = true
      setTimeout(()=>{
        this.messageLoadingBool = false
      },1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin displayCenter{
  display:flex;
  justify-content: center;
  align-items: center;
}
@mixin displaySpaceBetween{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.load-3 .line:nth-last-child(1) {
  animation: loadingC 0.6s 0.1s linear infinite;
}
.load-3 .line:nth-last-child(2) {
  animation: loadingC 0.6s 0.2s linear infinite;
}
.load-3 .line:nth-last-child(3) {
  animation: loadingC 0.6s 0.3s linear infinite;
}
::-webkit-scrollbar {
    display: none;
}
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
  // chatbot
  .chatBot{
    display:flex;
    align-items: center;
    flex-direction: column;
    position:relative;
    pointer-events: all;
    position:fixed;
    bottom:50px;
    right:50px;
    width: 400px;
    height: 550px;
    border-radius:30px;
    background-color:rgb(253, 253, 253);
    box-shadow: 0 0 5px 2px rgb(220, 220, 220);
    z-index:4;
    // chatbot header
    .header{
      @include displaySpaceBetween;
      position:relative;
      width:100%;
      height:50px;
      background-color:rgb(253, 253, 253);
      border-radius: 30px 30px 0 0;
      .close{
        font-size:48px;
        cursor: pointer;
        margin-right:16px;
      }
      .title{
        color:rgb(155, 155, 155);
        font-size: 32px;
        margin-left:16px;
      }
    }
    // chatbot dialog
    .dialog{
      position:relative;
      width:90%;
      height:90%;
      padding:12px;
      border-radius:30px;
      background-color: rgb(13, 233, 79);
      overflow: auto;
      .bot{
        width:200px;
        height:200px;
        background-color:orange;
        border-radius: 50%;
        right:0;
        left:0;
        margin:auto;
      }
      .messageContent{
        border-top:2px solid #333;
        .message{
          width:fit-content;
          font-size:24px;
          padding:8px;
          margin-top:12px;
          border-radius: 20px;
          background-color: red;
        }
      }
      
    }
  }
</style>