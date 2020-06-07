<template>
  <v-app>
    <transition name="fadeNav" mode="out-in">
      <NavBarMobile v-if="mobileView"/>
      <NavBar v-else/>
    </transition>
    
    <v-content>
      <transition name="fade" mode="out-in" >
        <router-view></router-view>
      </transition>
    </v-content>
    <Footer class="top-layer" />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import NavBarMobile from './components/NavBarMobile'

export default {
  name: 'App',

  components: {
    NavBar, Footer,
    NavBarMobile,
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
<style>
.top-layer {
  position: relative;
  z-index: 2 ;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.fadeNav-enter-active,
.fadeNav-leave-active {
  transition-duration: 0.6s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fadeNav-enter,
.fadeNav-leave-active {
  opacity: 0
}
</style>