<template>
  <div>
    <main class="main-content">
      <TheHeader />
      <Nuxt />
      <!-- <Footer /> -->
    </main>
  </div>
</template>
 
<script>
import Header from '~/components/TheHeader/TheHeader'
// import Footer from '~/components/Footer.vue'
 
export default {
  components: {
    Header,
    // Footer
  }
}
</script>
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Lato', sans-serif;
  }
  .main-content {
    margin-top: 4.5rem;
  }
</style>