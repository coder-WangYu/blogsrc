<template>
  <div id="proShow">
    <Header />
    <ProList />
    <Footer />
  </div>
</template>

<script>
import ProList from "../components/Pro/ProList";
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    ProList,
    Header,
    Footer,
  },
};
</script>