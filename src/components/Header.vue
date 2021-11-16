<template>
  <header ref="navbar">
    <Router-link to="/">
      <Logo />
    </Router-link>
    <div class="nav nav-pills"> 
      <div
        class="nav-item"
        v-for="nav in navigations"
        :key="nav.id"
        @click="scrollToElement(nav)">
        <div class="nav-link">
          {{ nav.name }}
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import Logo from '~/components/Logo'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default {
  data(){
    return {
      sectionData:{},
      navigations:[
        {
          id:'intro',
          name:'Intro',
          section: ()=>{
            return this.$store.state.header.section1
          }
        },
          {
          id:'sites',
          name:'Member',
          section: ()=>{
            return this.$store.state.header.section2
          }
        },
          {
          id:'pic',
          name:'Activity',
         section: ()=>{
            return this.$store.state.header.section3
          }
        },
          {
          id:'cus',
          name:'Why',
          section: ()=>{
            return this.$store.state.header.section4
          }
        },
          {
          id:'con',
          name:'Contact',
          section: ()=>{
            return this.$store.state.header.section5
          }
        }
      ],
    }
  },
  components:{
    Logo,
  },
  methods: {
    scrollToElement(nav) {
      const el = nav.section()
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    }
  },
  computed:{

  },
  mounted(){
    const navbar = this.$refs.navbar
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-140px";
      }
      prevScrollpos = currentScrollPos;
    }
  }

}

</script>

<style lang="scss" scoped>
a{
  text-decoration: none;
}
header{
  top:-140px;
  font-family: 'Do Hyeon', sans-serif;
  font-size:24px;
  display:flex;
  flex-direction: column;
  flex-shrink:0;
  width:100%;
  align-items: center;
  justify-content: center;
  position: fixed;
  transition: 0.4s;
  background-color:#fff;
  height: 140px;
  padding: 0 40px;
  transition:.8s;
  z-index:5;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, .5);
  .nav-item{
    animation-fill-mode: forwards;
    animation-name: undefined-easeOutBounce;
    animation-duration: .8s;
    transition:1s;
    text-decoration: none;
    .nav-link{
      color:#333;
      cursor: pointer;
      transition:ease-in-out .2s;
      &:hover{
        transform:scale(1.5,1.5);
      }
    }
  }
@include media-breakpoint-down(sm) {
    .nav {
      display: none;
    }
  }
}

</style>