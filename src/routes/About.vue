
<template>
  <div
    class="button"
    @click="elShow">
    나오기
  </div>
  <div
    class="button"
    @click="elHide">
    숨기기
  </div>
  <div
    class="button"
    @click="elRefresh">
    요소 리프레쉬
  </div>
  <div
    class="element"
    ref="element"></div>
</template>
<script>

export default {
  methods:{
    elShowDisplay(){
      return new Promise((resolve)=>{
        this.$refs.element.style.display = 'block'
        resolve()
      })
    },
    elShowScale(){
       return new Promise((resolve)=>{
         setTimeout(()=>{
          this.$refs.element.style.transform = 'scale(1.0,1.0)'
          resolve()
         },1)
      })
    },
    async elShow(){
      await this.elShowDisplay()
      await this.elShowScale()
    },
    // Hide
    elHideDisplay(){
      return new Promise((resolve)=>{
          setTimeout(()=>{
            this.$refs.element.style.display = 'none'
            resolve()
          },400)
      })
    },
    elHideScale(){
       return new Promise((resolve)=>{
        this.$refs.element.style.transform = 'scale(0.01,0.01)'
        console.log('이거 왜 안됨?')
        resolve()
      })
    },
    async elHide(){
      await this.elHideScale()
      await this.elHideDisplay()
    },
    elRefresh(){
     this.$refs.element.contentWindow.location.reload(true);
    }
    
  }
    

}
</script>
<style lang="scss" scoped>
.element{
  display:none;
  transform:scale(0.01,0.01);
  transition:.4s;
  width: 300px;
  height:300px;
  border-radius:50%;
  background-color:red;
}
.button{
  cursor: pointer;
  font-size:50px;
}
</style>
