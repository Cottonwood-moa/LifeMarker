<template>
  <Header />
  <ChatBot />
  <FirstSection />
  <SecondSection />
  <ThirdSection />
  <FourthSection />
  <FifthSection />
  <Footer />
</template>

<script>
import Header from '~/components/Header'
import ChatBot from '~/components/ChatBot'
import FirstSection from '~/components/FirstSection';
import SecondSection from '~/components/SecondSection';
import ThirdSection from '~/components/ThirdSection';
import FourthSection from '~/components/FourthSection';
import FifthSection from '~/components/FifthSection';
import Footer from '~/components/Footer';
export default {
  components:{
    Header,
    ChatBot,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
    Footer
  },
}
</script>

<style lang="scss">
body{
  font-family: 'Do Hyeon', sans-serif;
}
</style>