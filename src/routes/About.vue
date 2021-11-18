
<template>
  <div
    ref="test">
    출력되나이거
  </div>
  <div
    v-if="toggle"
    ref="test2">
    테스트
  </div>
  <button @click="toggleBool">
    버튼
  </button>
</template>
<script>

export default {
  data(){
    return{
      toggle:false,
      test2:()=>{
        return this.$refs.test2
      }
    }
  },
  mounted(){
    console.log('mounted',this.$refs.test2)
  },
  methods:{
    toggleBool(){
      this.toggle = !this.toggle
    }
  },
  watch:{
    test2: function(){
      console.log('성공',this.test2)
    }
  }
}

</script>
