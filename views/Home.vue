<template>
  <div id="home">
    <Header />
    <HomeContent />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeContent from '../components/Home/HomeContent'

export default {
  components: {
    Header,
    Footer,
    HomeContent,
  }
}
</script>