<template>
  <div
    ref="section5"
    class="section5">
    <div class="container">
      <img
        src="https://media2.giphy.com/media/KY3VlS0RyPcSVo1Wh5/giphy.gif?cid=ecf05e47je5ectlvzowldund3k3lvgxriw7b11iueqad2w9a&rid=giphy.gif&ct=s"
        class="planet" />
      <div class="circleContainer">
        <div class="circle front">
        </div>
        <div
          class="circle back"
          ref="back">
          <div
            class="contact"
            @click="show">
            CONTACT
          </div>
        </div>
      </div>
      <div class="subCircleContainer">
        <div
          class="subCircle tel"
          @click="telBool()"
          ref="tel">
        </div>
        <div
          class="subCircle email"
          @click="emailBool()"
          ref="email">
        </div>
        <div
          class="subCircle board"
          @click="boardBool()"
          ref="board">
        </div>
        <div
          class="subCircle cottonwood"
          @click="cottonwoodBool()"
          ref="cottonwood">
        </div>
        <div
          class="subCircle okk"
          @click="okkBool()"
          ref="okk">
        </div>
        <div
          class="subCircle early"
          @click="earlyBool()"
          ref="early">
        </div>
      </div>
      <div
        class="detail telDetail"
        v-if="contact.telToggle">
        <BoardLink />
        <span class="telFurther">
          * 위 이미지 클릭시 문의 게시판으로 이동 <br />
          * 답변 가능 시간 평일 오전 10:00 ~ 오후 04:00
        </span>
        <span class="telTitle">- Life MARKER -</span>
        <div
          class="btn btn-outline-dark btn-lg"
          @click="telBool()">
          닫기
        </div>
      </div>
      <div
        class="detail"
        v-else-if="contact.earlyToggle">
        <div class="earlyProfile">
        </div>
        <div class="earlyContent">
          Tel : 010-5468-3890 <br />
          E-mail : goghwk1100@nate.com <br />
          KakaoID : EarlyBird
        </div>
        <div
          class="btn btn btn-outline-dark btn-lg"
          @click="earlyBool()">
          닫기
        </div>
      </div>
      <div
        class="detail kakaoDetail"
        v-else-if="contact.boardToggle">
        <OpenKakaoId />
        <span class="openKakaoFurther">
          * 위 이미지 클릭시 카카오톡 오픈 채팅방으로 이동 <br />
          * 상담 가능 시간 평일 오전 10:00 ~ 오후 04:00
        </span>
        <span class="openKakaoTitle">- Life MARKER -</span>
        <div
          class="btn btn btn-outline-dark btn-lg"
          @click="boardBool()">
          닫기
        </div>
      </div>
      <div
        class="detail"
        v-else-if="contact.cottonwoodToggle">
        <div class="CottonwoodProfile">
        </div>
        <div class="CottonwoodContent">
          Tel : 010-2831-6735 <br />
          E-mail : geon0529@gmail.com <br />
          KakaoID : geon0529
        </div>
        <div
          class="btn btn btn-outline-dark btn-lg"
          @click="cottonwoodBool()">
          닫기
        </div>
      </div>
      <div
        class="detail"
        v-else-if="contact.okkToggle">
        <div class="okkProfile">
        </div>
        <div class="okkContent">
          Tel : 010-2343-6263 <br />
          E-mail : rudtjdl123@naver.com <br />
          KakaoID : okkBBo
        </div>
        <div
          class="btn btn btn-outline-dark btn-lg"
          @click="okkBool()">
          닫기
        </div>
      </div>
      <div
        class="detail emailDetail"
        v-else-if="contact.emailToggle">
        <EmailSubmit />
        <div
          class="btn btn btn-outline-dark btn-lg"
          @click="emailBool()">
          닫기
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailSubmit from '~/components/EmailSubmit'
import OpenKakaoId from '~/components/OpenKakaoId'
import BoardLink from '~/components/BoardLink'
export default {
  components:{
    EmailSubmit,
    OpenKakaoId,
    BoardLink
  },
  data(){
    return{
     contact:{
      tel:'',
      early:'',
      board:'',
      cottonwood:'',
      okk:'',
      email:'',
      toggle:true,
      telToggle:false,
      earlyToggle:false,
      boardToggle:false,
      cottonwoodToggle:false,
      okkToggle:false,
      emailToggle:false,
     }
    }
  },
  computed:{
  },
  methods:{
    show(){
      if(this.contact.toggle){
        this.contact.tel.style.transform = 'translateX(-250%) scale(1.0,1.0)'
        this.contact.early.style.transform = 'translateX(120%) translateY(200%) scale(1.0,1.0)'
        this.contact.board.style.transform = 'translateX(-120%) translateY(-200%) scale(1.0,1.0)'
        this.contact.cottonwood.style.transform = 'translateX(120%) translateY(-200%) scale(1.0,1.0)'
        this.contact.okk.style.transform = 'translateX(250%) scale(1.0,1.0)'
        this.contact.email.style.transform = 'translateX(-120%) translateY(200%) scale(1.0,1.0)'
        this.contact.toggle = false
      }else{
        this.contact.tel.style.transform = 'translateX(0) scale(0.1,0.1)'
        this.contact.early.style.transform = 'translateX(0) translateY(0) scale(0.1,0.1)'
        this.contact.board.style.transform = 'translateX(0) translateY(0) scale(0.1,0.1)'
        this.contact.cottonwood.style.transform = 'translateX(0) translateY(0) scale(0.1,0.1)'
        this.contact.okk.style.transform = 'translateX(0) scale(0.1,0.1)'
        this.contact.email.style.transform = 'translateX(0) translateY(0) scale(0.1,0.1)'
        this.contact.toggle = true
      }
    },
    telBool(){
      this.contact.telToggle = !this.contact.telToggle
    },
    emailBool(){
      this.contact.emailToggle = !this.contact.emailToggle
    },
    boardBool(){
      this.contact.boardToggle = !this.contact.boardToggle
    },
    cottonwoodBool(){
      this.contact.cottonwoodToggle = !this.contact.cottonwoodToggle
    },
    okkBool(){
      this.contact.okkToggle = !this.contact.okkToggle
    },
    earlyBool(){
      this.contact.earlyToggle = !this.contact.earlyToggle
    },

  },
  mounted(){
    this.$store.dispatch('header/scrollToSection5',this.$refs.section5)
    this.contact.tel = this.$refs.tel
    this.contact.email = this.$refs.email
    this.contact.board = this.$refs.board
    this.contact.cottonwood = this.$refs.cottonwood
    this.contact.okk = this.$refs.okk
    this.contact.early = this.$refs.early
  },
  created(){
    
  },
}
</script>

<style lang="scss" scoped>
@mixin center{
  display:flex;
  justify-content:center;
  align-items:center;
}

 .section5{
    width:100%;
    height: 1100px;
    background-color: $black;
    color:#333;
    background: url(https://images.pexels.com/photos/1477156/pexels-photo-1477156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) no-repeat center center fixed;
  background-size: 101% 101%;
  .allBool{
    position:absolute;
    width:100%;
    height:100%;
    z-index:1;
  }
    .container{
      @include center;
      width:100%;
      height: 100%;
      .circleContainer{
        @include center;
        position: absolute;
        width:300px;
        height:300px;
        perspective:300px;
        z-index:1;
        border-radius: 50%;
        .circle{
          @include center;
          width:300px;
          height:300px;
          border: 2px solid #333;
          backface-visibility:hidden;
          font-size:50px;
          z-index:1;
          border-radius: 50%;
        }
        .circle.front{
          font-size: 36px;
          font-weight: 700;
          position:absolute;
          transition:.4s;
          border-radius: 50%;
          background: url(https://media4.giphy.com/media/H7Kr00zSNIu7ZdvkE6/giphy.gif?cid=ecf05e47b2m14kyt74frup8wonl9yncozhbpg5nx2o2ijyrq&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 101% 101%;
          
        }
        .circle.back{
          position:absolute;
          transform:rotateY(180deg);
          transition:.4s;
          border-radius: 50%;
          background-color:$white;
          .contact{
            font-size: 36px;
            font-weight: 700;
            cursor: pointer;
          }
        }
        &:hover{
              .circle.front{
                transform:rotateY(-180deg);
              }
              .circle.back{
                transform:rotateY(0deg);
              }
          }
      }
      .subCircleContainer{
        @include center;
        position: absolute;
        width:300px;
        height:300px;
        perspective:300px;
        border-radius: 50%;
        .subCircle{
          @include center;
          position:absolute;
          width:150px;
          height:150px;
          border-radius: 50%;
          transform:scale(0.1,0.1);
          font-size:24px;
          background-color:$white;
          cursor: pointer;
          z-index:2;
        }
        .subCircle.cottonwood{
          transition:.4s;
          background: url('~/assets/cottonwood.png') no-repeat center center;
          background-size: 101% 101%;
          &:hover{
            background: url('~/assets/cottonwoodHover.gif') no-repeat center center;
            background-size: 101% 101%;
          }
        }
        .subCircle.okk{
          transition:.4s;
          transition-delay: 0.05s;
          background: url('~/assets/okk.png') no-repeat center center;
          background-size: 101% 101%;
          &:hover{
            transition-delay: 0s;
            background: url('~/assets/okkHover.gif') no-repeat center center;
            background-size: 101% 101%;
          }
        }
        .subCircle.early{
          transition:.4s;
          transition-delay: .1s;
          background: url('~/assets/bird.png') no-repeat center center;
          background-size: 101% 101%;
          &:hover{
            transition-delay: 0s;
            background: url('~/assets/birdHover.gif') no-repeat center center;
            background-size: 101% 101%;
          }
        }
         .subCircle.email{
          transition:.4s;
          transition-delay: .15s;
          background: url('~/assets/email.png') no-repeat center center;
          background-size: 101% 101%;
          &:hover{
            transition-delay: 0s;
            background: url('~/assets/emailHover.gif') no-repeat center center;
            background-size: 101% 101%;
          }
        }
        .subCircle.tel{
          transition:.4s;
          transition-delay: .2s;
          background: url('~/assets/tel.png') no-repeat center center;
          background-size: 101% 101%;
          &:hover{
            transition-delay: 0s;
            background: url('~/assets/telHover.gif') no-repeat center center;
            background-size: 101% 101%;
          }
        }
        .subCircle.board{
          transition:.4s;
          transition-delay: .25s;
          background: url('~/assets/board.png') no-repeat center center;
          background-size: 101% 101%;
          &:hover{
            transition-delay: 0s;
            background: url('~/assets/boardHover.gif') no-repeat center center;
            background-size: 101% 101%;
          }
        }
      }
     .detail{
        @include center;
        position:absolute;
        flex-direction: column;
        animation-fill-mode: forwards;
        animation-name: scale-easeInBounce;
        animation-duration: .8s;
        width:1000px;
        height:1000px;
        border-radius: 50%;
        border: 80px solid rgb(194, 194, 194);
        background-color: $white;
        z-index: 1;
        @include media-breakpoint-down(lg){
          border:0;
          border-radius: 20px;
        }
         &.telDetail{
          .telFurther{
          }
          .telTitle{
            font-family: 'Nanum Brush Script', cursive;
            font-size:36px;
            font-weight:700;
            text-align: center;
            margin:36px;
          }
        }
        &.kakaoDetail{
          .openKakaoFurther{
          }
          .openKakaoTitle{
            font-family: 'Nanum Brush Script', cursive;
            font-size:36px;
            font-weight:700;
            text-align: center;
            margin:36px;
          }
        }
        .CottonwoodProfile{
          width:300px;
          height:300px;
          border: 50px solid rgb(226, 226, 226);
          border-radius: 50%;
          background: url(https://media2.giphy.com/media/l2Sqb0owUC5s5tz5m/giphy.gif?cid=ecf05e47301lyybvrlfx1bhuoegyhfl7wh1i0h3awca5ldrf&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 101% 101%;
          margin-bottom: 36px;
        }
        .CottonwoodContent{
          color:$black;
          font-size:24px;
          margin-bottom:36px;
        }
        .earlyProfile{
          width:300px;
          height:300px;
          border: 50px solid rgb(226, 226, 226);
          border-radius: 50%;
          background: url(https://media2.giphy.com/media/l3q2sUCenoWY2Cp6U/giphy.gif?cid=ecf05e47t4vd9qrt5r8auk09bn8w6nlnawjlj5xkchl9mp8n&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 101% 101%;
          margin-bottom: 36px;
        }
        .earlyContent{
          color:$black;
          font-size:24px;
          margin-bottom:36px;
        }
          .okkProfile{
          width:300px;
          height:300px;
          border: 50px solid rgb(226, 226, 226);
          border-radius: 50%;
          background: url(https://media4.giphy.com/media/l4Ki9L3zCGw2WPk7S/giphy.gif?cid=ecf05e470zjrkfm4f6hjh447kgljgp2nh6pk1ug5j20hxyj1&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 101% 101%;
          margin-bottom: 36px;
        }
        .okkContent{
          color:$black;
          font-size:24px;
          margin-bottom:36px;
        }
        .planet{
          position:absolute;
        }
      }   
    }
  }
</style>