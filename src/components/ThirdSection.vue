<template>
  <div
    ref="section3"
    class="section3">
    <div class="container">
      <div class="info">
        <h1>Hello world! Lorem Ipsum is Lorem</h1>
        <h1>Ipsumsimot only five centuries, butting iLorem </h1>
        <span>Lorem Ipsum is Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsumsimot only five centuries, butting iLorem Ipsumn paLorem Ipsumssages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
      </div>
      <div class="bottomEl">
        <img
          src="https://media3.giphy.com/media/NVeMpuAOIKL0HZKJj4/giphy.gif"
          alt="" />
        <img
          src="https://media2.giphy.com/media/nuvTeKJyHQ4VHvjSnE/giphy.gif"
          alt="" />
        <img
          src="https://media0.giphy.com/media/E78rugCVNffd8thdK0/giphy.gif?cid=ecf05e47fynbani5ojehlvw5rnapfdhr8xci3s8zxl75h49s&rid=giphy.gif&ct=s"
          alt="" />
      </div>
      <swiper
        :effect="'cards'"
        :grab-cursor="true"
        :autoplay="{
          &quot;delay&quot;: 2500,
          &quot;disableOnInteraction&quot;: false
        }"
        class="mySwiper">
        <swiper-slide>
          <div class="slideText">
            BEERCRAFT
          </div>
          <div
            @click="link('http://13.209.239.133/')"
            class="inner">
            <img
              src="~/assets/cheers.gif"
              alt="" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slideText">
            StarBucks
          </div>
          <div
            @click="link('https://priceless-bhabha-83fc0d.netlify.app/')"
            class="inner">
            <img
              src="~/assets/starBucks.gif"
              alt="" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slideText">
            TISTORY SKIN
          </div>
          <div
            @click="link('https://cottonwood-moa.tistory.com/')"
            class="inner">
            <img
              src="~/assets/blog.gif"
              alt="" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/effect-cards"
import SwiperCore, {
  EffectCards,Autoplay
} from 'swiper';
SwiperCore.use([EffectCards,Autoplay]);

export default {
  data(){
    return{
      cards:{
        card1:{
          name:'beerCraft',
          id:1
        },
        card2:{
          name:'starBucks',
          id:2
        },
        card3:{
          name:'moneyGame',
          id:3
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted(){
    this.$store.dispatch('header/scrollToSection3',this.$refs.section3)
  },
  methods:{
    link(linkEl){
      location.href = linkEl
    }
  }
}
</script>

<style lang="scss" scoped>
 .section3{
   position:relative;
    width:100%;
    height:800px;
    overflow:hidden;
    font-size:24px;
    font-family: 'Do Hyeon', sans-serif;
    .container{
      width:100%;
      height: 100%;
      position:relative;
      display:flex;
      align-items: center;
      justify-content: center;
      border-top:2px solid #333;
      .info{
        width:70%;
        height: 320px;
        margin:0 24px;
      }
    
      .bottomEl{
        display:flex;
        width:calc(124*3)px;
        height:calc(150*3)px;
        position: absolute;
        bottom:-5px;
        right:0;
        img{
          width:124px;
          height:150px;
        }
      }
      .swiper {
        width: 290px;
        height: 380px;
        z-index:0;
        .swiper-slide {
          position:relative;
          display: flex;
          justify-content: center;
          border-radius: 18px;
          font-size: 22px;
          font-weight: bold;
          color: #fff;
          background-color: rgb(63, 63, 63, 0.95);
          .slideText{
            position:absolute;
            top:5px;
          }
          .inner{
            position:absolute;
            bottom:0;
            margin-bottom:18px;
            width:270px;
            height:320px;
            border-radius:18px;
            background-color:white;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
              width:100%;
              height:100%;
              border-radius:18px;
            }
          } 
        }
      }
      @include media-breakpoint-down(lg){
        display:block;
        .info{
          width:100%;
          height: auto;
          margin-top:24px;
        }
        .bottomEl{
          display:none;
        }
        .swiper{
          margin-top:24px;
        }
      }
    }
  }
</style>