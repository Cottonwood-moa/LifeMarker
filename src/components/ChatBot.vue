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
        v-show="!loadEl"
        class="messageContent">
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
        <div class="message-right questionList">
          <div
            v-show="questionList1.question1"
            class="message question question1"
            ref="question1"
            @click="chosenQuestion('question1'); answerShow(firstAnswerEl); scrollControl(); chatBotAnswer(answer1LoadingEl,answer1Msg,goBackEl1);">
            <div>질문 1</div>
          </div>
          <div 
            v-show="questionList1.question2"
            class="message question question2"
            ref="question2"
            @click="chosenQuestion('question2'); answerShow(secondAnswerEl); scrollControl(); chatBotAnswer(answer2LoadingEl,answer2Msg,goBackEl2);">
            <div>질문 2</div>
          </div>
          <div
            v-show="questionList1.question3"
            class="message question question3"
            ref="question3"
            @click="chosenQuestion('question3'); answerShow(thirdAnswerEl); scrollControl(); chatBotAnswer(answer3LoadingEl,answer3Msg,goBackEl3);">
            <div>질문 3</div>
          </div>
          <div 
            v-show="questionList1.question4"
            class="message question question4"
            ref="question4"
            @click="chosenQuestion('question4'); answerShow(fourthAnswerEl); scrollControl(); chatBotAnswer(answer4LoadingEl,answer4Msg,goBackEl4);">
            <div>질문 4</div>
          </div>
        </div>
        <div
          class="message-left answer1"
          ref="answer1">
          <div class="botP">
          </div>
          <div
            class="loading"
            ref="answer1Loading"
            style="background-color:blue;">
            로딩중
          </div>
          <div>
            <div
              class="message answer1-message"
              ref="answer1Msg">
              <div>
                질문 1 답변입니다.  <br />
                질문 1 답변입니다.  <br />
                질문 1 답변입니다.  <br />
                질문 1 답변입니다.  <br />
                질문 1 답변입니다.  <br />
              </div>
            </div>
            <div
              class="message question goBack"
              @click="close(false)"
              ref="goBack1">
              처음으로
            </div>
          </div>
        </div>

        <div
          class="message-left answer2"
          ref="answer2">
          <div class="botP">
          </div>
          <div
            class="loading"
            ref="answer2Loading"
            style="background-color:blue;">
            로딩중
          </div>
          <div>
            <div
              class="message answer2-message"
              ref="answer2Msg">
              <div>
                질문 2 답변입니다.  <br />
                질문 2 답변입니다.  <br />
                질문 2 답변입니다.  <br />
                질문 2 답변입니다.  <br />
                질문 2 답변입니다.  <br />
              </div>
            </div>
            <div
              class="message question goBack"
              @click="close(false)"
              ref="goBack2">
              처음으로
            </div>
          </div>
        </div>

        <div
          class="message-left answer3"
          ref="answer3">
          <div class="botP">
          </div>
          <div
            class="loading"
            ref="answer3Loading"
            style="background-color:blue;">
            로딩중
          </div>
          <div>
            <div
              class="message answer3-message"
              ref="answer3Msg">
              <div>
                질문 3 답변입니다.  <br />
                질문 3 답변입니다.  <br />
                질문 3 답변입니다.  <br />
                질문 3 답변입니다.  <br />
                질문 3 답변입니다.  <br />
              </div>
            </div>
            <div
              class="message question goBack"
              @click="close(false)"
              ref="goBack3">
              처음으로
            </div>
          </div>
        </div>

        <div
          class="message-left answer4"
          ref="answer4">
          <div class="botP">
          </div>
          <div
            class="loading"
            ref="answer4Loading"
            style="background-color:blue;">
            로딩중
          </div>
          <div>
            <div
              class="message answer4-message"
              ref="answer4Msg">
              <div>
                질문 4 답변입니다.  <br />
                질문 4 답변입니다.  <br />
                질문 4 답변입니다.  <br />
                질문 4 답변입니다.  <br />
                질문 4 답변입니다.  <br />
              </div>
            </div>
            <div
              class="message question goBack"
              @click="close(false)"
              ref="goBack4">
              처음으로
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- reload loading -->
    <div 
      class="load"
      v-show="loadEl">
    </div>
  </section>
</template>

<script>
import ChatBotToggle from '~/components/ChatBotToggle'
export default {
  components:{
    ChatBotToggle
  },
  computed:{
    toggle(){
      return this.$store.state.chatBot.toggle
    }
  },
  data(){
    return{
      componentKey: 0,
      dialog:[],
      greetingLoading:true,
      loadEl:true,
      answer1LoadingEl:[],
      answer2LoadingEl:[],
      answer3LoadingEl:[],
      answer4LoadingEl:[],
      firstAnswerEl:[],
      secondAnswerEl:[],
      thirdAnswerEl:[],
      fourthAnswerEl:[],
      answer1Msg:[],
      answer2Msg:[],
      answer3Msg:[],
      answer4Msg:[],
      question1El:[],
      question2El:[],
      question3El:[],
      question4El:[],
      goBackEl1:[],
      goBackEl2:[],
      goBackEl3:[],
      goBackEl4:[],
      questionList1:{
        question1:true,
        question2:true,
        question3:true,
        question4:true
      }
    }
  },
  mounted(){
    this.dialog = this.$refs.dialog
    this.answer1LoadingEl = this.$refs.answer1Loading
    this.answer2LoadingEl = this.$refs.answer2Loading
    this.answer3LoadingEl = this.$refs.answer3Loading
    this.answer4LoadingEl = this.$refs.answer4Loading
    this.firstAnswerEl = this.$refs.answer1
    this.secondAnswerEl = this.$refs.answer2
    this.thirdAnswerEl = this.$refs.answer3
    this.fourthAnswerEl = this.$refs.answer4
    this.answer1Msg = this.$refs.answer1Msg
    this.answer2Msg = this.$refs.answer2Msg
    this.answer3Msg = this.$refs.answer3Msg
    this.answer4Msg = this.$refs.answer4Msg
    this.question1El = this.$refs.question1
    this.question2El = this.$refs.question2
    this.question3El = this.$refs.question3
    this.question4El = this.$refs.question4
    this.goBackEl1 = this.$refs.goBack1
    this.goBackEl2 = this.$refs.goBack2
    this.goBackEl3 = this.$refs.goBack3
    this.goBackEl4 = this.$refs.goBack4
  },
  watch:{
    toggle(){
      this.toggleButton()
    }
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
      if(!b){
        this.loadEl = true;
        this.load()
      }
      this.questionList1.question1 = true
      this.questionList1.question2 = true
      this.questionList1.question3 = true
      this.questionList1.question4 = true
      this.question1El.style.pointerEvents = 'auto'
      this.question2El.style.pointerEvents = 'auto'
      this.question3El.style.pointerEvents = 'auto'
      this.question4El.style.pointerEvents = 'auto'

      this.firstAnswerEl.style.display = 'none'
      this.answer1LoadingEl.style.display = 'block'
      this.answer1LoadingEl.style.transform = 'scale(1.0,1.0)'
      this.answer1Msg.style.display = 'none'

      this.secondAnswerEl.style.display = 'none'
      this.answer2LoadingEl.style.display = 'block'
      this.answer2LoadingEl.style.transform = 'scale(1.0,1.0)'
      this.answer2Msg.style.display = 'none'

      this.thirdAnswerEl.style.display = 'none'
      this.answer3LoadingEl.style.display = 'block'
      this.answer3LoadingEl.style.transform = 'scale(1.0,1.0)'
      this.answer3Msg.style.display = 'none'

      this.fourthAnswerEl.style.display = 'none'
      this.answer4LoadingEl.style.display = 'block'
      this.answer4LoadingEl.style.transform = 'scale(1.0,1.0)'
      this.answer4Msg.style.display = 'none'

      this.$refs.goBack1.style.display = 'none'
      this.$refs.goBack2.style.display = 'none'
      this.$refs.goBack3.style.display = 'none'
      this.$refs.goBack4.style.display = 'none'
    },
    load(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          this.loadEl = false
          resolve()
        },1500)
      })
    },
    async toggleButton(){
      if(this.toggle){
        await this.chatBotDisplayShow()
        await this.chatBotScaleShow()
        await this.load()
      }else if(!this.toggle){
        this.$refs.chatBot.style.display = 'none'
        this.$refs.chatBot.style.transform = 'scale(0.01,0.01)'
        // this.dialog.contentWindow.location.reload(true)
      }
      this.toggle = !this.toggle
    },
    //toggle animation을 위한 setTimeout 로직 
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
    chosenQuestion(q){
      if(q ==='question1'){
        this.question1El.style.pointerEvents = 'none'
        this.questionList1.question2 = false
        this.questionList1.question3 = false
        this.questionList1.question4 = false
      }else if(q === 'question2'){
        this.question2El.style.pointerEvents = 'none'
        this.questionList1.question1 = false
        this.questionList1.question3 = false
        this.questionList1.question4 = false
      }else if(q === 'question3'){
        this.question3El.style.pointerEvents = 'none'
        this.questionList1.question2 = false
        this.questionList1.question1 = false
        this.questionList1.question4 = false
      }else if(q === 'question4'){
        this.question4El.style.pointerEvents = 'none'
        this.questionList1.question2 = false
        this.questionList1.question3 = false
        this.questionList1.question1 = false
      }

    },
    // 스크롤 최하단 메소드
    scrollControl(){
      return new Promise((resolve)=>{
        this.$refs.dialog.scrollTo({top:this.$refs.dialog.scrollHeight, behavior: 'smooth'})
        resolve()
      })
    },
    answerShow(answerEl){
      return new Promise((resolve)=>{
        answerEl.style.display = 'flex'
        resolve()
      })
    },
    // 로딩 off 메소드
    loadingScale(loadingEl){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          loadingEl.style.transform = 'scale(0.01,0.01)'
          resolve()
        },2000)
      })
    },
    loadingDisplay(loadingEl){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          loadingEl.style.display = 'none'
          resolve()
        },100)
      })
    },
    // 답변 보이기 goBack
    answerMsgShow(answerMsgEl){
      return new Promise((resolve)=>{
        answerMsgEl.style.display = 'block'
        resolve()
      })
    },
    goBackShow(goBackEl){
      return new Promise((reslove)=>{
        console.log(goBackEl)
        setTimeout(()=>{
          goBackEl.style.display = 'block'
          reslove()
        },200)
      })
    },
    async msgGoBackShow(answerMsgEl,goBackEl){
      await this.answerMsgShow(answerMsgEl)
      await this.goBackShow(goBackEl)
    },
    // 챗봇 대답 async/await
    async chatBotAnswer(loadingEl,answerMsgEl,goBackEl){
      await this.loadingScale(loadingEl)
      await this.loadingDisplay(loadingEl)
      await this.msgGoBackShow(answerMsgEl,goBackEl)
      await this.scrollControl()
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
        color:rgb(155, 155, 155);
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
          }
           &.answer1{
              display:none;
              .loading{
                transition: 0.05s;
              }
              .answer1-message{
                display:none;
              }
              .goBack{
                display:none;
              }
            }
            &.answer2{
              display:none;
              .loading{
                transition: 0.05s;
              }
              .answer2-message{
                display:none;
              }
              .goBack{
                display:none;
              }
            }
            &.answer3{
              display:none;
              .loading{
                transition: 0.05s;
              }
              .answer3-message{
                display:none;
              }
              .goBack{
                display:none;
              }
            }
            &.answer4{
              display:none;
              .loading{
                transition: 0.05s;
              }
              .answer4-message{
                display:none;
              }
              .goBack{
                display:none;
              }
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
        .message-right{
          position:relative;
          display:flex;
          flex-direction: column;
          align-items: flex-end;
          width:100%;
          height:fit-content;
          font-size:18px;
          padding:8px;
          margin:12px;
          background-color: $white;
          .question{
            cursor: pointer;  
            transition:.4s;
            &.question1{
              &:hover{
                background-color:$primary;
              }
            }
            &.question2{
              &:hover{
                background-color:$primary;
              }
            }
            &.question3{
              &:hover{
                background-color:$primary;
              }
            }
            &.question4{
              &:hover{
                background-color:$primary;
              }
            }
          }
           .message{
            width:fit-content;
            height:fit-content;
            right:0;
            padding:8px;
            margin: 8px;
            border-radius: 20px;
            background-color: rgb(230, 230, 230);
          }
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
      background-color:blue;
    }
  }
</style>