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
        class="detail"
        v-if="contact.telToggle">
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
        class="detail"
        v-else-if="contact.boardToggle">
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
export default {
  components:{
    EmailSubmit
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
    font-family: 'Do Hyeon', sans-serif;
    color:#333;
    background: url(https://images.pexels.com/photos/1477156/pexels-photo-1477156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) no-repeat center center fixed;
  background-size: 100% 100%;
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
          background-size: 100% 100%;
          
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
          width:150px;
          height:150px;
          border-radius: 50%;
          font-size:24px;
          background-color:$white;
          cursor: pointer;
          z-index:2;
        }
        .subCircle.cottonwood{
          position:absolute;
          transition:.4s;
          transform:scale(0.1,0.1);
          background: url(https://media2.giphy.com/media/l2Sqb0owUC5s5tz5m/giphy.gif?cid=ecf05e47301lyybvrlfx1bhuoegyhfl7wh1i0h3awca5ldrf&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 100% 100%;
        }
        .subCircle.okk{
          position:absolute;
          transition:.4s;
          transform:scale(0.1,0.1);
          transition-delay: .1s;
          background: url(https://media4.giphy.com/media/l4Ki9L3zCGw2WPk7S/giphy.gif?cid=ecf05e470zjrkfm4f6hjh447kgljgp2nh6pk1ug5j20hxyj1&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 100% 100%;
        }
        .subCircle.early{
          position:absolute;
          transition:.4s;
          transform:scale(0.1,0.1);
          transition-delay: .2s;
          background: url(https://media2.giphy.com/media/l3q2sUCenoWY2Cp6U/giphy.gif?cid=ecf05e47t4vd9qrt5r8auk09bn8w6nlnawjlj5xkchl9mp8n&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 100% 100%;
        }
         .subCircle.email{
          position:absolute;
          transition:.4s;
          transform:scale(0.1,0.1);
          transition-delay: .3s;
          background: url(https://media1.giphy.com/media/ckB9wvcONerp73fvkQ/giphy.gif?cid=ecf05e47bvda488e2k1y5ftvh8s4c1woi5lmr5o3eyk7u476&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 100% 100%;
          
        }
        .subCircle.tel{
          position:absolute;
          transition:.4s;
          transform:scale(0.1,0.1);
          transition-delay: .4s;
          background: url(https://media3.giphy.com/media/3o6ozBzviUKC1FsvqE/giphy.gif?cid=ecf05e47sxux4be56819zr35vomx0mvhwjfogawxdlwsnzte&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 100% 100%;
        }
        .subCircle.board{
          position:absolute;
          transition:.4s;
          transform:scale(0.1,0.1);
          transition-delay: .5s;
          background: url(https://media1.giphy.com/media/0olsSaw3F2J2ldjvbb/giphy.gif?cid=ecf05e47wpw0fkwo2k1e6kxb8aq2atu5yex67kced50s46no&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 100% 100%;
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
          border-radius: 20px;
        }
        .CottonwoodProfile{
          width:300px;
          height:300px;
          border: 50px solid rgb(226, 226, 226);
          border-radius: 50%;
          background: url(https://media2.giphy.com/media/l2Sqb0owUC5s5tz5m/giphy.gif?cid=ecf05e47301lyybvrlfx1bhuoegyhfl7wh1i0h3awca5ldrf&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 100% 100%;
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
          background-size: 100% 100%;
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
          background-size: 100% 100%;
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