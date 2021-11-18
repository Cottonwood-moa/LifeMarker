<template>
  <a
    class="boardCircle"
    href="javascript:void()"></a>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.boardCircle{
  display:block;
  width:300px;
  height:300px;
  border-radius: 50%;
  border: 50px solid rgb(161, 247, 219);
  background:url('~/assets/tel.png')  no-repeat center center;
  background-size: 101% 101%;
  cursor: pointer;
  margin-bottom:36px;
  &:hover{
  background:url('~/assets/telHover.gif')  no-repeat center center;
  background-size: 101% 101%;
  }
}
</style>