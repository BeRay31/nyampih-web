<template>
  <v-app>
    <NavBar/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    NavBar, Footer
  },

  data: () => ({
    mobileView: false
  }),
  created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
  },
  destroyed() {
      window.removeEventListener('resize', this.handleResize);
  },
  methods: {
      handleResize() {
          // this.window.width = window.innerWidth;
          // this.window.height = window.innerHeight;
          this.mobileView = window.innerWidth <= 990;
      }
  }
};
</script>
