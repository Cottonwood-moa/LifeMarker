<template>
  <div class="container">
    <div class="text">
      404 NOT FOUND
    </div>
    <div class="dance">
      <img
        src="https://media2.giphy.com/media/foFVacFW3G6qM1ZqVm/giphy.gif"
        alt="" />
    </div>
    <Router-link 
      to="/"
      class="back">
      Back to Home
    </Router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@mixin easingShow{
  animation-fill-mode: forwards;
  animation-name: undefined-easeOutBounce;
  animation-duration: .8s;
}
  .container{
    position:relative;
    height:100vh;
    font-family: 'Do Hyeon', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background:url(https://media1.giphy.com/media/14uQ3cOFteDaU/giphy.gif?cid=ecf05e47xu4f0t0epdv7xdtgkvr7zd34hj2784b0d6w13njm&rid=giphy.gif&ct=g) center center fixed;
    // background-size: 100% 100%;
    .text{
      @include easingShow;
      font-size: 45px;
      transition:1s;
    }
    .back{
      @include easingShow;
      cursor: pointer;
      font-size: 45px;
      color: $black;
      text-decoration: none;
    }
    .dance{
      @include easingShow;
      width:300px;
      height: 450px;
      img{
      width:300px;
      height: 450px;
      }
    }
  }
</style>