<template>
  <RouterLink
    to="/"
    class="logo">
    <div>
      <span>MARKER</span>.COM
    </div>
  </RouterLink>
</template>

<script>
export default {
 
}
</script>

<style lang="scss" scoped>
// body{
//   // font-family: 'Do Hyeon', sans-serif;
//   font-family: 'Nanum Brush Script', cursive;
// }
.logo {
  position:relative;
  width:200px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  z-index:1;
  div{
     display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    animation-fill-mode: forwards;
    animation-name: undefined-easeOutBounce;
    animation-duration: .8s;
    transition:1s;
    font-family: 'Nanum Brush Script', cursive;
    font-size: 50px;
    color: $black;
    text-decoration: none;
  }
  &:hover {
    color: $black;
  }
  span {
    color: $primary;
  }
}

</style>