<template>
  <!-- @submit.prevent="checkForm" -->
  <div class="title">
    LIFE MARKER
  </div>
  <div
    class="emailLoading"
    ref="emailLoading"
    data-aos="zoom-in"
    v-if="emailLoading"></div>
  <form
    method="POST"
    @submit="checkForm"
    action="https://script.google.com/macros/s/AKfycbxSGNe2uNOrQLx-PHZNhzch0BXJYBeG3NXiye8P7_29wjdw40OmDKLGBXPaP4-_sC_0/exec"
    target="iframe1"
    ref="form"
    class="section">
    <div>
      <label
        for="exampleFormControlInput1"
        ref="name"
        class="form-label"></label>
      <input
        type="name"
        name="name"
        class="form-control form-control-lg"
        id="exampleFormControlInput1"
        placeholder="Please enter your name"
        v-model="name"
        @keydown.enter.prevent />
    </div>
    <div>
      <label
        for="exampleFormControlInput1"
        class="form-label"><span style="font-size=12px; color:rgb(226, 226, 226);">*메일 확인 시간 평일 오전10:00 ~ 오후16:00</span></label>
      <input
        type="email"
        name="email"
        ref="email"
        class="form-control form-control-lg"
        id="exampleFormControlInput1"
        placeholder="Please enter your email : example@example.com"
        v-model="email" 
        @keydown.enter.prevent />
    </div>
    <div>
      <div class="mb-3">
        <label
          for="exampleFormControlTextarea1"
          class="form-label"><span style="font-size=12px; color:rgb(226, 226, 226);">*메일은 90일간 보관 후 삭제됩니다.</span></label>
        <textarea
          v-model="text"
          type="text"
          name="text"
          ref="text"
          @keydown.enter.prevent
          class="form-control form-control-lg"
          id="exampleFormControlTextarea1"
          rows="3"></textarea>
      </div>
    </div>
    <p class="submitButton">
      <input
        type="submit"
        value="Submit" />
    </p>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
    errors: [],
    text: null,
    email: null,
    name:null,
    emailLoading:false,
    }
  },
  mounted(){
    const nameEl = this.$refs.name
    nameEl.focus()
  },
  watch:{
    emailLoading(){
      this.emailLoadingOff()
    }
  },
  methods:{
     checkForm: function (e) {
      this.errors = [];
      if (!this.name) {
        this.errors.push('null name');
        alert("이름을 입력해주세요")
        this.$refs.name.focus()
      } else if (!this.email) {
        this.errors.push('null email');
        alert("이메일을 입력해주세요")
        this.$refs.email.focus()
      } else if (!this.validEmail(this.email)) {
        this.errors.push('validEmail');
        alert("이메일 양식을 지켜주세요")
        this.$refs.email.focus()
      } else if (!this.text) {
        this.errors.push("null text");
        alert("내용을 입력해주세요")
        this.$refs.text.focus()
      } else if (!this.errors.length) {
        this.emailLoading = true;
        return true;
      }
      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
   
    emailLoadingScale:function(){
      return new Promise((resolve)=>{
        if(this.emailLoading){
          setTimeout(()=>{
            this.$refs.emailLoading.style.transform = 'scale(0.01,0.01)'
            resolve()
          },4000)
        }
      })
    },
    emailLoadingFalse:function(){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          this.email=null
          this.name=null
          this.text=null
          this.emailLoading = false;
          resolve()
        },400)
      })
    },
     emailLoadingOff:async function(){
      await this.emailLoadingScale()
      await this.emailLoadingFalse()
    },
  
    // postEmail : function(){
    //   if (!this.errors.length){
    //   const emailContent = {
    //     name:this.name,
    //     text:this.text,
    //     email:this.email }
    //   const JsonEmailContent = JSON.stringify(emailContent)
    //   console.log("JSON 문자화: ",JsonEmailContent)
    //   console.log("JSON 데이터화:",JSON.parse(JsonEmailContent))
    //   axios.post('https://script.google.com/macros/s/AKfycbxSGNe2uNOrQLx-PHZNhzch0BXJYBeG3NXiye8P7_29wjdw40OmDKLGBXPaP4-_sC_0/exec',JsonEmailContent)
    //     .then((response)=>{
    //       console.log(response)
    //     })
    //     .catch((reject)=>{
    //       console.log(reject)
    //     })
    //   }else{
    //     return
    //   }
    // },

  }
}
</script>

<style lang="scss" scoped>
input[type="submit"]{
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
.title{
  position:absolute;
  top:0;
  color:$primary;
  font-size: 72px;
  font-weight: 700;
  font-family: 'Nanum Brush Script', cursive;
}
.emailLoading{
  position:absolute;
  width:400px;
  height:400px;
  border-radius: 50%;
  z-index:3;
  border: 30px solid rgb(226, 226, 226);
  box-sizing: border-box;
  transform : scale(1.0,1.0);
  background: url(https://media0.giphy.com/media/8sXvnfSos1ot59qBf7/giphy.gif?cid=790b76113b1aa4a4af94d01bf2b7c76127c8c2a7766bcbb6&rid=giphy.gif&ct=g) no-repeat center center;
  background-size: 100% 100%;
  transition:.4s
}
.section{
  position:relative;
  .submitButton{
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    color:$primary;
    font-family: 'Nanum Brush Script', cursive;
    transition:.4s;
  }
}
#exampleFormControlInput1{
  width:500px;
}
#exampleFormControlTextarea1{
  height:200px;
  resize: none;
}
.form-label{
  font-size: 24px;
}
input{
  margin-bottom:24px;
}
</style>