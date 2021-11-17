<template>
  <a
    class="kakaoCircle"
    href="https://open.kakao.com/o/sTv9NyKd"></a>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.kakaoCircle{
  display:block;
  width:300px;
  height:300px;
  border-radius: 50%;
  border: 50px solid rgb(218, 240, 252);
  background:url('~/assets/kakao.png')  no-repeat center center;
  background-size: 101% 101%;
  cursor: pointer;
  margin-bottom:36px;
  &:hover{
  background:url('~/assets/kakaoHover.gif')  no-repeat center center;
  background-size: 101% 101%;
  }
}
</style>