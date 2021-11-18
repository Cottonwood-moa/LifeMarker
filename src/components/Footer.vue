<template>
  <section class="footer">
    <div class="container">
      <div class="teamPostScript">
        <span>사업자등록번호 xxx-xx-xxxxx&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>Life Marker 팀장 박건우&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>TEL: 010 - 2831 - 6735 / FAX: xxxx-xxxx&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span>책임자: 박건우</span>
      </div>
      <div class="footerTitle">
        <span>- Life Marker -</span>
      </div>
      <div class="teamMember">
        <span>Cottonwood&nbsp;&nbsp;&nbsp;</span>
        <span>Early Bird&nbsp;&nbsp;&nbsp;</span>
        <span>Okk BBo</span>
      </div>
      <div class="copyrights">
        © Life Marker Team. All Rights Reserved.
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@mixin neonBlue{
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #5271ff,
    0 0 82px #5271ff,
    0 0 92px #5271ff,
    0 0 102px #5271ff,
    0 0 151px #5271ff;
}
.footer{
  width:100%;
  height:360px;
  background-color:rgb(30, 30, 30);
  .container{
    .teamPostScript{
      padding-top:48px;
      text-align: center;
      font-size: 20px;
      color:rgb(128, 128, 128)
    }
    .footerTitle{
      padding-top:48px;
      color:rgb(128, 128, 128);
      font-family: 'Nanum Brush Script', cursive;
      font-size: 48px;
      font-weight: 700;
      text-align: center;
      @include neonBlue;
    }
    .teamMember{
      padding-top:8px;
      text-align: center;
      font-size: 18px;
      color:rgb(128, 128, 128)
    }
    .copyrights{
      padding-top:48px;
      text-align: center;
      font-size: 18px;
      color:rgb(128, 128, 128)
    }
  }
}
</style>