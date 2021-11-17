<template>
  <div
    ref="section4"
    class="section4">
    <div class="container">
      <img
        src="~/assets/active1.png"
        class="image1 activeImg" />
      <img
        src="~/assets/active2.png"
        class="image2 activeImg" />
      <img
        src="~/assets/active3.png"
        class="image3 activeImg" />
      <img
        src="~/assets/active4.png"
        class="image4 activeImg" />
      <div class="why">
        <h1>WHY?</h1>
      </div>
      <div class="title">
        <div>{{ firstContent.title }}</div>
      </div>
      <div class="subTitle">
        <h1>{{ firstContent.subTitle }}</h1>
      </div>
      <div class="content">
        <span>
          more recently with desktop publishing software lsions of Lorem Ipsum.
        </span><br />
        <span>
          more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </span>
      </div>
      <div class="stick">
        <div></div>
      </div>
      <div class="title">
        <div>{{ secondContent.title }}</div>
      </div>
      <div class="subTitle">
        <h1>{{ secondContent.subTitle }}</h1>
      </div>
      <div class="content">
        <span>
          more recently with desktop publishing software lsions of Lorem Ipsum.
        </span><br />
        <span>
          more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </span>
      </div>
      <div class="stick">
        <div></div>
      </div>
      <div class="title">
        <div>{{ thirdContent.title }}</div>
      </div>
      <div class="subTitle">
        <h1>{{ thirdContent.subTitle }}</h1>
      </div>
      <div class="content">
        <span>
          more recently with desktop publishing software lsions of Lorem Ipsum.
        </span><br />
        <span>
          more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </span>
      </div>
      <div class="meta">
        <div class="metaImg">
          <swiper
            :autoplay="{
              &quot;delay&quot;: 2500,
              &quot;disableOnInteraction&quot;: false
            }"
            :effect="'cube'"
            :grab-cursor="true"
            :cube-effect="{
              &quot;shadow&quot;: true,
              &quot;slideShadows&quot;: true,
              &quot;shadowOffset&quot;: 20,
              &quot;shadowScale&quot;: 0.94
            }"
            class="mySwiper">
            <swiper-slide>
              <img :src="swiperImg.firstImg" />
            </swiper-slide>
            <swiper-slide>
              <img :src="swiperImg.secondImg" />
            </swiper-slide>
            <swiper-slide>
              <img :src="swiperImg.thirdImg" />
            </swiper-slide>
            <swiper-slide>
              <img :src="swiperImg.fourthImg" />
            </swiper-slide>
          </swiper>
        </div>
       
        <div class="metaText">
          <div class="metaTitle">
            Lorem Ipsum
          </div>
          <div class="metaSubTitle">
            PageMaker including
          </div>
          <div class="metaContent">
            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/effect-cube"
import "swiper/css/pagination"
import SwiperCore, {
  EffectCube,Autoplay
} from 'swiper';
SwiperCore.use([EffectCube,Autoplay]);
export default {
    components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      firstContent:{
        title:'소통',
        subTitle:'팀원과의 소통을 통한 유연한 협업'
      },
      secondContent:{
        title:'효율',
        subTitle:'효율적인 업무 관리 및 코드 리뷰'
      },
      thirdContent:{
        title:'근성',
        subTitle:'어떤 문제라도 끈기있게 물고 늘어지는 근성'
      },
      swiperImg:{
        firstImg:'https://tistory4.daumcdn.net/tistory/4706624/skin/images/metaImg.png',
        secondImg:'https://tistory2.daumcdn.net/tistory/4706624/skin/images/metaImg2.png',
        thirdImg:'https://tistory2.daumcdn.net/tistory/4706624/skin/images/metaImg3.png',
        fourthImg:'https://tistory1.daumcdn.net/tistory/4706624/skin/images/metaImg4.jpg',
      }
    }
  },
  mounted(){
    this.$store.dispatch('header/scrollToSection4',this.$refs.section4)
  }
}
</script>

<style lang="scss" scoped>
 .section4{
    width:100%;
    background-color: rgb(250, 250, 250);
    font-family: 'Do Hyeon', sans-serif;
    color:#333;
    .container{
      position:relative;
      display:flex;
      flex-direction: column;
      align-items: center;
      .activeImg{
        position:absolute;
        width:256px;
        height:350px;
        border-radius: 20px;
        opacity: .7;
        box-shadow: 10px 5px 5px #333;
      }
      .image1{
        top:150px;
        left:0;
        transform:rotate(25deg);
      }
      .image2{
        top:300px;
        right:0;
        transform:rotate(-25deg);
      }
      .image3{
        top:600px;
        left:0;
      }
      .image4{
        top:675px;
        right:0;
        transform:rotate(13deg);
      }
      .why{
        margin:150px 0;
        h1{
          font-size: 84px;
        }
      }
      .stick{
        position:relative;
        width:100%;
        height:84px;
        margin:24px 0;
        div{
          position: absolute;
          width:50%;
          height: 100%;
          left:0;
          border-right: 1px solid #333;
        }
      }
      .title{
        font-size: 48px;
        font-weight: 700;
        color:$primary;
        font-family: 'Nanum Brush Script', cursive;
        z-index:1;
      }
      .subTitle{
        margin-top:36px;
        z-index:1;
      }
      .content{
        font-size: 24px;
        color:rgb(105, 105, 105);
        text-align: center;
        z-index:1;
      }
      .meta{
        position:relative;
        display:flex;
        align-items: center;
        width:100%;
        height: 500px;
        margin:150px 0;
        flex-shrink:0;
        .metaImg{
           width:50%;
           height:100%;
           margin-right:124px;
           .swiper {
              width: 100%;
              height: 100%;
              border-radius:8px;
            }
            .swiper-slide {
              background-position: center;
              background-size: cover;
            }
            .swiper-slide img {
              display: block;
              width: 100%;
              height: 100%;
              border-radius:8px;
            }
        }
        .metaText{
          width:100%;
          height:100%;
          display:flex;
          flex-direction: column;
          justify-content: center;

          .metaTitle{
            color:#333;
            font-size:36px;
          }
          .metaSubTitle{
            color:$black;
            font-size:54px;
          }
          .metaContent{
            color: rgb(139, 139, 139);
            font-size:24px;
          }
          
        }
        @include media-breakpoint-down(lg){
            .metaImg{
              display:none;
            }
            .metaText{
              text-align:center;
            }
          }
      }
    }
  }
         
</style>