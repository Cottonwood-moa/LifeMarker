<template>
  <div
    ref="section5"
    class="section5">
    <div class="container">
      <div class="circleContainer">
        <div class="circle front">
          <h1>앞</h1>
        </div>
        <div
          class="circle back"
          ref="back">
          <button
            class="contect"
            @click="show">
            contact
          </button>
        </div>
      </div>
      <div class="subCircleContainer">
        <div
          class="subCircle tel"
          @click="test()"
          ref="tel">
          TEL
        </div>
        <div
          class="subCircle email"
          ref="email">
          EMAIL
        </div>
        <div
          class="subCircle board"
          ref="board">
          BOARD
        </div>
        <div
          class="subCircle cottonwood"
          ref="cottonwood">
          COTTONWOOD
        </div>
        <div
          class="subCircle okk"
          ref="okk">
          OKK
        </div>
        <div
          class="subCircle early"
          ref="early">
          {{ contact.telToggle }}
        </div>
      </div>
      <div
        class="detailTel"
        v-if="contact.telToggle">
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      telToggle:false
     }
    }
  },
  computed:{
  },
  methods:{
    show(){
      if(this.contact.toggle){
        this.contact.tel.style.transform = 'translateX(-125%) scale(1.0,1.0)'
        this.contact.early.style.transform = 'translateX(60%) translateY(100%) scale(1.0,1.0)'
        this.contact.board.style.transform = 'translateX(-60%) translateY(-100%) scale(1.0,1.0)'
        this.contact.cottonwood.style.transform = 'translateX(60%) translateY(-100%) scale(1.0,1.0)'
        this.contact.okk.style.transform = 'translateX(125%) scale(1.0,1.0)'
        this.contact.email.style.transform = 'translateX(-60%) translateY(100%) scale(1.0,1.0)'
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
    test(){
      this.contact.telToggle = !this.contact.telToggle
    }
  },
  mounted(){
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
    height: 1000px;
    background-color: $white;
    .container{
      @include center;
      position:relative;
      width:100%;
      height: 100%;
      .circleContainer{
        @include center;
         position: absolute;
        width:300px;
        height:300px;
        perspective:300px;
        z-index:1;
        .circle{
          @include center;
          width:300px;
          height:300px;
          border-radius: 50%;
          border: 2px solid #333;
          backface-visibility:hidden;
          font-size:50px;
          background-color:$white;
          z-index:1;
        }
        .circle.front{
          position:absolute;
          transition:.4s;
        }
        .circle.back{
          position:absolute;
          transform:rotateY(180deg);
          transition:.4s;
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
        .subCircle{
          @include center;
          width:250px;
          height:250px;
          border-radius: 50%;
          border: 2px solid #333;
          font-size:24px;
        }
        .subCircle.cottonwood{
          position:absolute;
          transition:.4s;
          transform:scale(0.1,0.1);
        }
        .subCircle.okk{
          position:absolute;
          transition:.4s;
          transform:scale(0.1,0.1);
          transition-delay: .2s;
        }
        .subCircle.early{
          position:absolute;
          transition:.4s;
          transform:scale(0.1,0.1);
          transition-delay: .4s;
        }
         .subCircle.email{
          position:absolute;
          transition:.4s;
          transform:scale(0.1,0.1);
          transition-delay: .6s;
        }
        .subCircle.tel{
          position:absolute;
          transition:.4s;
          transform:scale(0.1,0.1);
          transition-delay: .8s;
        }
        .subCircle.board{
          position:absolute;
          transition:.4s;
          transform:scale(0.1,0.1);
          transition-delay: 1s;
        }
      }
     .detailTel{
        @include center;
        animation-fill-mode: forwards;
        animation-name: scale-easeInBounce;
        animation-duration: .8s;
        width:800px;
        height:800px;
        border-radius: 50%;
        background-color: red;
        z-index: 1;
      }   
      
    }
  }

</style>