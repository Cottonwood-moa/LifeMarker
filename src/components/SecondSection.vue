<template>
  <section
    ref="section2"
    class="section2">
    <div class="container">
      <div class="sun"></div>
      <img
        class="bee"
        src="~/assets/palm-tree.png" />
      <div class="info1">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="infoPic"></div>
        <div
          
          class="infoText">
          <span
            data-aos="fade-right"
            data-aos-duration="1000">{{ info1.name }}</span><br />
          <span
            data-aos="fade-right"
            data-aos-duration="1000">Front-end web developer. / 프론트엔드 & 디자인 & 기획</span><br />
          <span
            data-aos="fade-right"
            data-aos-duration="1000">꾸준히 발전하는 개발자</span><br />
          <div
            data-aos="fade-right"
            data-aos-duration="1000">
            <a
              :href="info1.github">
              <img
                src="~/assets/github.png"
                alt="" />
            </a>
            <a
              :href="info1.blog">  
              <img
                src="~/assets/blog.png"
                alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="info2">
        <div
          class="infoPicBreak"
          data-aos="fade-left"
          data-aos-duration="1000"></div>
        <div class="infoText">
          <span
            data-aos="fade-left"
            data-aos-duration="1000">{{ info2.name }}</span><br />
          <span
            data-aos="fade-left"
            data-aos-duration="1000">Back-end web developer. / 백 엔드 & 서버 관리</span><br />
          <span
            data-aos="fade-left"
            data-aos-duration="1000">인생의 봄날을 찾아 해매는 개발자.</span><br />
          <div
            data-aos="fade-left"
            data-aos-duration="1000">
            <a :href="info2.github">
              <img
                src="~/assets/github.png"
                alt="" />
            </a>
            <a :href="info2.blog">  
              <img
                src="~/assets/blog.png"
                alt="" />
            </a>
          </div>
        </div>
        <div
          class="infoPic"
          data-aos="fade-left"
          data-aos-duration="1000"></div>
      </div>
      <div class="info3">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="infoPic"></div>
        <div class="infoText">
          <span
            data-aos="fade-right"
            data-aos-duration="1000">{{ info3.name }}</span><br />
          <span
            data-aos="fade-right"
            data-aos-duration="1000">Linux / AWS Engineer / 네트워크 & 배포 관리</span><br />
          <span
            data-aos="fade-right"
            data-aos-duration="1000">푸근한 개발자.</span><br />
          <div
            data-aos="fade-right"
            data-aos-duration="1000">
            <a :href="info3.github">
              <img
                src="~/assets/github.png"
                alt="" />
            </a>
            <a :href="info3.blog">  
              <img
                src="~/assets/blog.png"
                alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      info1:{
        name:'Cottonwood',
        github:'https://github.com/Cottonwood-moa',
        blog:'https://cottonwood-moa.tistory.com/'
      },
      info2:{
        name:'EarlyBird',
        github:'https://github.com/Early-Birdd',
        blog:'https://velog.io/@earlybird7/series'

      },
      info3:{
        name:'OkkBBo',
        github:'https://github.com/ohjunyeong',
        blog:'https://hihihi23.tistory.com/'
      }
    }
  },
  mounted(){
    this.$store.dispatch('header/scrollToSection2',this.$refs.section2)
    //console.log(this.$refs.section2)
  }
}
</script>

<style lang="scss" scoped>
@mixin infoPic{
  width:200px;
  height:200px;
  border-radius:50%;
  border:2px solid $black;
}

a{
  text-decoration: none;
  color:#333;
}
span{
  display:inline-block;
}
 .section2{
    width:100%;
    height: auto;
    background-color: $white;
    font-size:24px;
    .container{
      position:relative;
      width:100%;
      height: auto;
      border-left:2px solid $black;
      border-right:2px solid $black;
      .sun{
        position:absolute;
        width:124px;
        height:124px;
        top:24px;
        right:24px;
        background: url(https://media3.giphy.com/media/izijkWI2KBt0k/giphy.gif?cid=ecf05e47h0ehr4l805910dky0sa9pvu4j7131ygg68cid1c0&rid=giphy.gif&ct=g) no-repeat center center;
        background-size: 100% 100%;
      }
      .bee{
        position:absolute;
        width:168px;
        height:168px;
        bottom:-8px;
        right:124px;
        margin:auto;
      }
 
      .info1{
        display:flex;
        align-items: center;
        padding-top:100px;
        transform:translateX(-100px);
        transition:.8s;
        .infoPic{
         @include infoPic;
         background: url(https://media2.giphy.com/media/l2Sqb0owUC5s5tz5m/giphy.gif?cid=ecf05e47301lyybvrlfx1bhuoegyhfl7wh1i0h3awca5ldrf&rid=giphy.gif&ct=g) no-repeat center center;
        background-size: 101% 101%;
        }
        .infoText{
          margin:12px;
          :nth-child(1){
            font-size:24px;
          }
          a{
            margin-right:8px;
            width:32px;
            height: 32px;
            img{
              transition:.2s ease-in-out;
              &:hover{
                transform:scale(1.5,1.5)
              }
            }
          }
        }
         @include media-breakpoint-down(lg){
           flex-direction: column;
           transform:translateX(0);
           padding-top:36px;
           .infoText{
             text-align: center;
           }
         }
      }
      .info2{
        display:flex;
        align-items: center;
        justify-content: flex-end;
        transform:translateX(100px);
        .infoPic{
         @include infoPic;
          background: url(https://media2.giphy.com/media/l3q2sUCenoWY2Cp6U/giphy.gif?cid=ecf05e47t4vd9qrt5r8auk09bn8w6nlnawjlj5xkchl9mp8n&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 101% 101%;
        }
        .infoPicBreak{
          @include infoPic;
          background: url(https://media2.giphy.com/media/l3q2sUCenoWY2Cp6U/giphy.gif?cid=ecf05e47t4vd9qrt5r8auk09bn8w6nlnawjlj5xkchl9mp8n&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 101% 101%;
          display:none;
        }
        .infoText{
        margin:12px;
          :nth-child(1){
            font-size:24px;
          }
          a{
            margin-right:8px;
            width:32px;
            height: 32px;
            img{
              transition:.2s ease-in-out;
              &:hover{
                transform:scale(1.5,1.5)
              }
            }
          }
        }
           @include media-breakpoint-down(lg){
           flex-direction: column;
           transform:translateX(0);
           margin-top:36px;
           .infoPic{
             display:none;
           }
           .infoPicBreak{
             display:block;
           }
           .infoText{
             text-align: center;
           }
         }
      }
      .info3{
        display:flex;
        align-items: center;
        transform:translateX(-100px);
        padding-bottom: 100px;
        .infoPic{
         @include infoPic;
          background: url(https://media4.giphy.com/media/l4Ki9L3zCGw2WPk7S/giphy.gif?cid=ecf05e470zjrkfm4f6hjh447kgljgp2nh6pk1ug5j20hxyj1&rid=giphy.gif&ct=g) no-repeat center center;
          background-size: 101% 101%;
         
        }
        .infoText{
          margin:12px;
          :nth-child(1){
            font-size:24px;
          }
          a{
            margin-right:8px;
            width:32px;
            height: 32px;
            img{
              transition:.2s ease-in-out;
              &:hover{
                transform:scale(1.5,1.5)
              }
            }
          }
        }
           @include media-breakpoint-down(lg){
           flex-direction: column;
           transform:translateX(0);
           margin-top:36px;
           .infoText{
             text-align: center;
           }
         }
      }
    }
  }
</style>