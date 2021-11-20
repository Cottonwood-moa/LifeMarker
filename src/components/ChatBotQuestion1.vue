<template>
  <div class="message-right questionList">
    <div
      v-show="questionList1.question1"
      class="message question question1"
      ref="question1"
      @click="chosenQuestion('question1'); answerShow(firstAnswerEl); scrollControl(); chatBotAnswer(answer1LoadingEl,answer1Msg,goBackEl,refreshEl);">
      <div>질문 1</div>
    </div>
    <div 
      v-show="questionList1.question2"
      class="message question question2"
      ref="question2"
      @click="chosenQuestion('question2'); answerShow(secondAnswerEl); scrollControl(); chatBotAnswer(answer2LoadingEl,answer2Msg,goBackEl,refreshEl);">
      <div>질문 2</div>
    </div>
    <div
      v-show="questionList1.question3"
      class="message question question3"
      ref="question3"
      @click="chosenQuestion('question3'); answerShow(thirdAnswerEl); scrollControl(); chatBotAnswer(answer3LoadingEl,answer3Msg,goBackEl,refreshEl);">
      <div>질문 3</div>
    </div>
    <div 
      v-show="questionList1.question4"
      class="message question question4"
      ref="question4"
      @click="chosenQuestion('question4'); answerShow(fourthAnswerEl); scrollControl(); chatBotAnswer(answer4LoadingEl,answer4Msg,goBackEl,refreshEl);">
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
      ref="answer1Loading">
    </div>
    <div>
      <div
        class="answer1-message"
        ref="answer1Msg">
        <div class="message">
          질문 1 답변입니다.  <br />
          질문 1 답변입니다.  <br />
          질문 1 답변입니다.  <br />
          질문 1 답변입니다.  <br />
          질문 1 답변입니다.  <br />
        </div>
        <div class="message">
          질문 1 답변입니다.2  <br />
          질문 1 답변입니다. 2 <br />
          질문 1 답변입니다.  2<br />
          질문 1 답변입니다.  2<br />
          질문 1 답변입니다.  2<br />
        </div>
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
      ref="answer2Loading">
    </div>
    <div>
      <div
        class="answer2-message"
        ref="answer2Msg">
        <div class="message">
          질문 2 답변입니다.  <br />
          질문 2 답변입니다.  <br />
          질문 2 답변입니다.  <br />
          질문 2 답변입니다.  <br />
          질문 2 답변입니다.  <br />
        </div>
        <div class="message">
          질문 2 답변입니다.2  <br />
          질문 2 답변입니다. 2 <br />
          질문 2 답변입니다.  2<br />
          질문 2 답변입니다.  2<br />
          질문 2 답변입니다.  2<br />
        </div>
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
      ref="answer3Loading">
    </div>
    <div>
      <div
        class="answer3-message"
        ref="answer3Msg">
        <div class="message">
          질문 3 답변입니다.  <br />
          질문 3 답변입니다.  <br />
          질문 3 답변입니다.  <br />
          질문 3 답변입니다.  <br />
          질문 3 답변입니다.  <br />
        </div>
        <div class="message">
          질문 3 답변입니다.2  <br />
          질문 3 답변입니다. 2 <br />
          질문 3 답변입니다.  2<br />
          질문 3 답변입니다.  2<br />
          질문 3 답변입니다.  2<br />
        </div>
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
      ref="answer4Loading">
    </div>
    <div>
      <div
        class="answer4-message"
        ref="answer4Msg">
        <div class="message">
          질문 4 답변입니다.  <br />
          질문 4 답변입니다.  <br />
          질문 4 답변입니다.  <br />
          질문 4 답변입니다.  <br />
          질문 4 답변입니다.  <br />
        </div>
        <div class="message">
          질문 4 답변입니다.2  <br />
          질문 4 답변입니다. 2 <br />
          질문 4 답변입니다.  2<br />
          질문 4 답변입니다.  2<br />
          질문 4 답변입니다.  2<br />
        </div>
      </div>
    </div>
  </div>
  <div class="questionList message-right">
    <div
      class="message question goBack"
      @click="closeScroll(false)"
      ref="goBack">
      뒤로가기
    </div>
  </div>
  <div class="questionList message-right">
    <div
      class="message question goBack"
      @click="refresh()"
      ref="refresh">
      처음으로
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    toggle(){
      return this.$store.state.chatBot.toggle
    },
    dialog(){
      return this.$store.state.chatBot.dialog
    },
    loadEl(){
      return this.$store.state.chatBot.load
    }
  },
  watch:{
    toggle(){
      this.close()
      this.$store.state.chatBot.questionList1_1 = false;
    }
  },
  data(){
    return{
      componentKey: 0,
      greetingLoading:true,
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
      goBackEl:[],
      refreshEl:[],
      questionList1:{
        question1:true,
        question2:true,
        question3:true,
        question4:true
      },
      date:''
    }
  },
  mounted(){
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
    this.goBackEl = this.$refs.goBack
    this.refreshEl = this.$refs.refresh

  },
  methods:{
    close(b){
    return new Promise((resolve)=>{
      if(!b){
        this.$store.state.chatBot.load = true;
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

      this.$refs.goBack.style.display = 'none'
      this.$refs.refresh.style.display = 'none'
      this.$store.state.chatBot.load = true;
      
      this.$store.state.chatBot.goBack1.style.display = 'block'
      resolve()
    })  
    },
    refresh(){
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!
      this.$store.dispatch('chatBot/refresh')
    },
    async closeScroll(b){
      await this.close(b)
      await this.scrollTime()
      await this.scrollControl()
    },
    scrollTime(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve()
        },500)
      })
    },
    load(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          this.$store.state.chatBot.load = false
          resolve()
        },500)
      })
    },
     // 스크롤 최하단 메소드
    scrollControl(){
      return new Promise((resolve)=>{
        this.dialog.scrollTo({top:this.dialog.scrollHeight, behavior: 'smooth'})
        resolve()
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
      this.$store.state.chatBot.goBack1.style.display = 'none'
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
    goBackShow(goBackEl,refreshEl){
      return new Promise((reslove)=>{
        setTimeout(()=>{
          goBackEl.style.display = 'block'
          refreshEl.style.display = 'block'
          reslove()
        },200)
      })
    },
    async msgGoBackShow(answerMsgEl,goBackEl,refreshEl){
      await this.answerMsgShow(answerMsgEl)
      await this.goBackShow(goBackEl,refreshEl)
    },
   
    // 챗봇 대답 async/await
    async chatBotAnswer(loadingEl,answerMsgEl,goBackEl,refreshEl){
      await this.loadingScale(loadingEl)
      await this.loadingDisplay(loadingEl)
      await this.msgGoBackShow(answerMsgEl,goBackEl,refreshEl)
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
           &.answer1{
              display:none;
              .answer1-message{
                display:none;
              }
            }
            &.answer2{
              display:none;
              .answer2-message{
                display:none;
              }
            }
            &.answer3{
              display:none;
              .answer3-message{
                display:none;
              }
            }
            &.answer4{
              display:none;
              .answer4-message{
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
          background-color: $white;
          .goBack{
                cursor: pointer;
                margin-top:8px;
                display:none;
                transition:.2s;
                &:hover{
                  background-color:$primary
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
          .question{
            cursor: pointer;  
            transition:.2s;
            margin:2px;
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
        }
</style>