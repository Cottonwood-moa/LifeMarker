<template>
  <section ref="section1">
    <div class="container">
      <h1 class="title">
        <span>Hello</span>
        <span>we are</span>
        <span>Life MARKER</span>
      </h1>
    
      <h2 class="title">
        <span>web</span>
        <span>development</span>
        <span>team</span>
      </h2>

      <h3 class="title">
        <span>more</span>
        <span>information</span>
        <span>Scroll down</span>
      </h3>

      <div class="info">
        <img
          src="~/assets/arrowBottom2.png"
          class="aosTest"
          data-aos="fade-down"
          data-aos-duration="1000" />
      </div>
    </div>
  </section>
</template>

<script>

export default {
  mounted(){
    this.$store.dispatch('header/scrollToSection1',this.$refs.section1)
    //console.log(this.$refs.section2)
  }
}
</script>

<style lang="scss" scoped>

$primary-color: #1e90ff ;
$secondary-color: #ffe221;
$tertiary-color: #ffffff;
section{
  background: url(https://64.media.tumblr.com/2b0ec5e7d4763b0cc6aaba6982be379c/tumblr_occujlvMQE1qze3hdo1_r2_500.gif) no-repeat center center fixed;
  background-size: 100% 100%;
  font-family: 'Nanum Brush Script', cursive;
  font-weight:700;
}
.container{
  width:100%;
  height: 100vh;
  position: relative;
  .info{
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    right:0;
    left:0;
    bottom:125px;
    margin: auto;
    font-size: 100px;
    :nth-child(1){
      transition-delay: 8.2s;
    }
  }
}
h1, h2{
  width:500px;
  height: 250px;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
  font-size: 75px;
  text-transform: uppercase;
  span{
    text-align: center;
    width: 100%;
    float: left;
    color: $tertiary-color;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    transform: translateY(-50px);
    opacity: 0;
    animation-name: titleAnimation;
    animation-timing-function:ease;
    animation-duration: 3s;
  }
}
h3{
  width:500px;
  height: 250px;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
  font-size: 75px;
  text-transform: uppercase;
  span{
    text-align: center;
    width: 100%;
    float: left;
    color: $tertiary-color;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    transform: translateY(-50px);
    opacity: 0;
    animation-name: titleAnimationShowing;
    animation-timing-function:ease;
    animation-duration: 3s;
  }
}
h1 span{
  animation-delay: 0.6s;
  -webkit-animation-fill-mode: forwards;

  &:first-child{
    animation-delay: 0.7s;

  }

  &:last-child{
    color: $secondary-color;
    animation-delay: 0.5s;
  }
}

h2{ 
  top: 0;
  position: absolute;
  
  span{
    animation-delay: 4.1s;
    -webkit-animation-fill-mode: forwards;

    &:first-child{
      animation-delay: 4.2s;

    }

    &:last-child{
      color: $secondary-color;
      animation-delay: 4s;
    }
  }
}
h3{ 
  top: 0;
  position: absolute;
  
  span{
    animation-delay: 7.5s;
    -webkit-animation-fill-mode: forwards;

    &:first-child{
      animation-delay: 7.4s;

    }

    &:last-child{
      color: $secondary-color;
      animation-delay: 7.3s;
    }
  }
}
.usechrome{
  font-size: 10px;
  color: #fff;
  font-family: helvetica, arial;
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  left: 0;
}

@keyframes titleAnimation {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  20% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  80% {
       transform: translateY(0);
       opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  100% {
       transform: translateY(50px);
       opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    
  }
}

@keyframes titleAnimationShowing {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  20% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  80% {
       transform: translateY(0);
       opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  100% {
       transform: translateY(0);
       opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    
  }
}
</style>