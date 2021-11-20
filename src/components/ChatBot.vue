<template>
  <!-- chatbot toggle -->
  <ChatBotToggle />
  <!-- chatbot -->
  <section
    ref="chatBot"
    class="chatBot">
    <!-- chatbot header -->
    <div class="header">
      <div class="title">
        <div class="logo"></div><span>Chat Bot</span>
      </div>
      <div
        class="close"
        @click="close(true)">
        &Cross;
      </div>
    </div>
    <!-- chatbot main -->
    <div
      id="dialog"
      class="dialog"
      ref="dialog">
      <div
        v-if="!loadEl"
        class="bot">
      </div>
      <div
        class="ps"
        v-if="!loadEl">
        * Team Life Marker에서 만든 챗봇입니다.
      </div>
      <div
        class="ps"
        v-if="!loadEl">
        * 자세한 문의는 Contact 섹션을 참고해주세요.
      </div>
      <div
        v-show="!loadEl"
        class="messageContent">
        <div
          class="date">
          {{ date }}
        </div>
        <div
          class="message-left"
          ref="greeting">
          <div
            class="botP">
          </div>
          
          <div
            class="message">
            <div>
              반갑습니다. <br />
              어떤게 궁금하신가요? <br />
            </div>
          </div>
        </div>
        <!-- chatbot question list -->
        
        <ChatBotQuestion />

        <!-- reload loading -->
      </div>
      <div 
        class="load"
        ref="load"
        v-show="loadEl">
      </div>
    </div>
  </section>
</template>

<script>
import ChatBotToggle from '~/components/ChatBotToggle'
import ChatBotQuestion from '~/components/ChatBotQuestion'
export default {
  components:{
    ChatBotQuestion,
    ChatBotToggle
  },
  computed:{
    toggle(){
      return this.$store.state.chatBot.toggle
    },
    loadEl(){
      return this.$store.state.chatBot.load
    },
   
  },
  data(){
    return{
      dialog:[],
      // loadEl:true,
      date:''
    }
  },
  mounted(){
    this.dialog = this.$refs.dialog
    this.$store.dispatch('chatBot/dialogEl',this.dialog)
  },
  watch:{
    toggle(){
      this.toggleButton()
    },
    
  },
  methods:{
    close(b){
      if(b){
        this.$store.dispatch('chatBot/chatBotToggle')
      }
      if(b){
        this.$refs.chatBot.style.display = 'none'
        this.$refs.chatBot.style.transform = 'scale(1.0,1.0)'
      }
      this.loadEl = true
    },
    load(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          this.$store.state.chatBot.load = false
          resolve()
        },1500)
      })
    },
    chatBotDisplayShow(){
      return new Promise((resolve)=>{
        this.$refs.chatBot.style.display = 'flex'
        resolve()
      })
    },
    chatBotScaleShow(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          this.$refs.chatBot.style.transform = 'scale(1.0,1.0)'
          resolve()
        },1)
      })
    },
     async getData(){
      new Promise((resolve)=>{
      const date = new Date()
       this.date = date.getFullYear() + ' - ' + (date.getMonth()+1) + ' - ' + date.getDate() 
        resolve()
      })
    },
    async toggleButton(){
      if(this.toggle){
        await this.chatBotDisplayShow()
        await this.chatBotScaleShow()
        await this.getData()
        await this.load()
      }else if(!this.toggle){
        this.$refs.chatBot.style.display = 'none'
        this.$refs.chatBot.style.transform = 'scale(0.01,0.01)'
      }
      this.toggle = !this.toggle
    },
  }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
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
  // chatbot
  .chatBot{
    display:none;
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
    transform:scale(0.01,0.01);
    transition:.4s;
    z-index:4;
    // chatbot header
    .header{
      @include displaySpaceBetween;
      position:relative;
      width:100%;
      height:50px;
      background-color:$white;
      border-radius: 30px 30px 0 0;
      .close{
        font-size:48px;
        cursor: pointer;
        margin-right:16px;
      }
      .title{
        color:$primary;
        font-size: 32px;
        margin-left:16px;
        display:flex;
        align-items: center;
        .logo{
          width:40px;
          height:40px;
          background:url('~/assets/chatBotTop.gif') no-repeat center center ;
          background-size: 101% 101%;
        }
      }
    }
    // chatbot dialog
    .dialog{
      position:relative;
      width:100%;
      height:100%;
      padding:12px;
      border-radius:30px;
      background-color:$white;
      overflow: auto;
      .bot{
        width:124px;
        height:124px;
        background:url(https://media4.giphy.com/media/KegPbvrQghq1y/giphy.gif?cid=ecf05e47ge2uxfl91v9vt5pn4z2065680h0h6njiprwmim30&rid=giphy.gif&ct=g) no-repeat center center ;
        background-size: 101% 101%;
        border-radius: 50%;
        right:0;
        left:0;
        margin:auto;
      }
      
      .messageContent{
        border-top:2px solid #333;
        display:flex;
        flex-direction: column;
        .message-left{
          position:relative;
          display:flex;
          width:100%;
          height:fit-content;
          font-size:18px;
          padding:8px;
          margin-top:12px;
          background-color: $white;
          .message{
            margin-left:8px;
            margin-top:8px;
          }
          .loading{
                width:100px;
                height: 40px;
                transition: 0.05s;
                background-color:rgb(220, 220, 220);
                background:url(https://media1.giphy.com/media/grNkIEN4dkiMXFLIE9/giphy.gif?cid=ecf05e47fshpk4z5y5ouko3wcryacopvbdzod0feif8vg97t&rid=giphy.gif&ct=s) no-repeat center center ;
                background-size: 101% 101%;
                border-radius:10px;
                margin-left:8px;
                margin-top:8px;
              }
          .botP{
            width: 50px;
            height:50px;
            border-radius: 50%;
            box-shadow: 0 0 5px 2px rgb(220, 220, 220);
            background:url('~/assets/bot.png') no-repeat center center ;
            background-size: 101% 101%;
          }
           .message{
            width:fit-content;
            height:fit-content;
            padding:8px;
            border-radius: 20px;
            background-color: rgb(230, 230, 230);
           
          }
        }
        .date{
          margin-top:12px;
          text-align:center; 
          color:#333;
          font-weight:700;
        }
        .botP{
            width: 50px;
            height:50px;
            border-radius: 50%;
            box-shadow: 0 0 5px 2px rgb(220, 220, 220);
            background:url('~/assets/bot.png') no-repeat center center ;
            background-size: 101% 101%;
          }
           .message{
            width:fit-content;
            height:fit-content;
            padding:8px;
            border-radius: 20px;
            background-color: rgb(230, 230, 230);
           
          }
      }
    }
    .load{
      position:absolute;
      width:250px;
      height:250px;
      border-radius:50%;
      top:0;
      bottom:0;
      right:0;
      left:0;
      margin:auto;
      background:url(https://media1.giphy.com/media/grNkIEN4dkiMXFLIE9/giphy.gif?cid=ecf05e47fshpk4z5y5ouko3wcryacopvbdzod0feif8vg97t&rid=giphy.gif&ct=s) no-repeat center center ;
    }
  }
</style>