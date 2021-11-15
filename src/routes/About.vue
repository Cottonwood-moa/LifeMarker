
<template>
  <swiper
    :effect="'cube'"
    :grab-cursor="true"
    :cube-effect="{
      &quot;shadow&quot;: true,
      &quot;slideShadows&quot;: true,
      &quot;shadowOffset&quot;: 20,
      &quot;shadowScale&quot;: 0.94
    }"
    :pagination="true"
    class="mySwiper">
    <swiper-slide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide><swiper-slide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide><swiper-slide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide><swiper-slide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/effect-cube"
import "swiper/css/pagination"
import SwiperCore, {
  EffectCube,Pagination
} from 'swiper';
SwiperCore.use([EffectCube,Pagination]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
        
        
    };
  },
  methods: {
    
  }
  
}
</script>

<style lang="scss" scoped>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

</style>