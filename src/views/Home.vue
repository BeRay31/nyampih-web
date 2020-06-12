<template>
  <v-container fluid>
    
    <div height="100vh" class="full-page bg-fix">
    </div>
    
    <v-layout class="full-page top-layer" column align-center id="overview">
      <v-flex class="flex-1"><div class="text-uppercase text-center font-weight-black banner-title home-showcase-text" style="font-family: 'Poppins'">Menjaga lingkungan anda tetap bersih</div></v-flex>
      <v-flex class="flex-1">
        <v-layout column class="flex-1">
          <v-flex class="banner-subtitle font-weight-black text-stroke" style="font-family: 'Lato';text-shadow: -3px 3px 3px grey;width : 70%;font-size : 2.1vw">Jasa angkut sampah yang fleksibel melayani daerah Bandung dan sekitarnya.</v-flex>
          <v-flex class="mt-3">
            <transition name="fade" mode="out-in">
              <v-btn @click="showMore" class="white--text" rounded  color="#039C9E" v-if="!show">
                <v-icon left>
                  mdi-chevron-down
                </v-icon>
                <span>
                  Show More
                </span>
              </v-btn>
              <v-btn @click="showLess" class="white--text" rounded  color="#039C9E" v-if="show">
                <v-icon left>
                  mdi-chevron-up
                </v-icon>
                <span>
                  Show Less
                </span>
              </v-btn>
            </transition>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <transition name="fade" mode="out-in">
      <div class="full-page home-content-2 top-layer py-10" id="content" v-show="show">
        <v-layout class="full-page home-content-2 top-layer" row>
          <v-flex md12 xs12 align-self-center class="flex-1 pb-10 title-content-2">
            <div style="width : 80vw; font-family: 'Poppins';text-shadow: -3px 8px 8px grey;" class="banner-title text-uppercase text-center font-weight-black" >Kenapa Memilih Nyampih?</div>
          </v-flex>
          <v-flex md3 xs12 align-self-center class="content-2" v-for="ben in benefit" :key="ben.text">
            <v-container >
              <v-layout column align-center>
                <v-flex>
                  <v-img
                    max-height="25vh"
                    max-width="25vw"
                    min-height="10vh"
                    min-width="10vw"
                    contain
                    class="mb-5 flex-1"
                    :src="require(`../assets/${ben.img}`)"
                  ></v-img>
                </v-flex>
                <v-flex class="banner-subtitle font-weight-black" style="font-family: 'Lato' ;">
                  {{ ben.text }}
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </div>
    </transition>
    
    <transition name="fade" mode="out-in">
      <v-layout class="full-page home-content-3 top-layer " column align-center v-show="show">
        <v-flex class="flex-1">
          <div style="width : 80vw; color:#fff; font-family: 'Poppins';text-shadow: -2px 2px 2px black" class="banner-title text-uppercase text-center font-weight-black">Layanan Kami</div>
        </v-flex>
        <v-flex class="flex-1">
          <v-layout class="container-content-2">
            <v-layout column class="mx-1" align-center v-for="service in services" :key="service.text" @click="$router.push('/services')" style="cursor:pointer">
              <v-flex>
                <v-img
                  max-height="25vh"
                  max-width="25vw"
                  min-height="10vh"
                  min-width="10vw"
                  contain
                  class="mb-5"
                  :src="require(`../assets/${service.img}`)"
                ></v-img>
              </v-flex>
              <v-flex class="banner-subtitle text-lg text-uppercase text-center white--text font-weight-black" style="font-family: 'Lato';text-shadow: -2px 2px 2px black">
                {{ service.text }}
              </v-flex>
            </v-layout>
          </v-layout>
        </v-flex>
      </v-layout>
    </transition>

  </v-container>  
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      show : false,
      benefit : [
        {img : 'event.png', text : 'Jadwal Pengangkutan yang Fleksibel'},
        {img : 'faces.png', text : 'Edukasi Tentang Pemilahan Sampah'},
        {img : 'phone.png', text : 'Kemudahan Pemesanan Melalui Aplikasi'},
        {img : 'verified.png', text : 'Pengangkut Terpercaya dan Terverifikasi'}
      ],
      services : [
        {img:'home.png', text : 'Angkut Perumahan' },
        {img:'business.png', text : 'Angkut Bisnis' }
      ],
      linkedin : [
        {id: 1, src: 'gaada'},
        {id: 2, src: 'gaada'},
        {id: 3, src: 'https://www.linkedin.com/in/minariachantika/'},
        {id: 4, src: 'gaada'}
      ]
    }
  },
  options () {
    return {
      duration: 700,
      offset: 0,
      easing: 'easeInOutCubic',
    }
  },
  methods :  {
    showMore() {
      this.show = true
      setTimeout(()=>(
        this.$vuetify.goTo('#content', this.options)
      ),500)
    },
    showLess() {
      setTimeout(()=>(
        this.show = false
      ),500)
        this.$vuetify.goTo('#overview', this.options)
    },
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.bg-fix{
  background: url("../assets/showcase_home.png") repeat;
  background-size: contain;
  position: fixed;
  z-index: 0;
  opacity: 0.6;
}
.full-page {
  min-height: 100vh;
  max-height: 110%;
  min-width: 100vw;
}
.banner-title {
  color: black;
  font-size: 3.4vw;
  letter-spacing: 0.7vw;
  line-height: 3vw;
  width: 50%;
}
.home-showcase-text {
  width : 60%;
}
.top-layer {
  position: relative;
  z-index: 2 ;
}
.text-stroke {
  letter-spacing: 2px;
}
.flex-1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-subtitle {
  width: 60vw;
  text-align: center;
  color: black;
  font-size: 1.8vw;  
}
.text-lg {
  font-size : 3vw;
  width: 20vw;
  letter-spacing: 3px;
  text-align: center;
}
.home-content-2 {
  background: url("../assets/content-2-background.png") repeat;
  background-size: cover;
  min-height: 100vh;
}
.home-content-3 {
  background: url("../assets/content-3-background.png") no-repeat;
  background-size: cover;
}
.container-content-2 {
  width: 80vw;
}
.test {
  background-color: aqua;
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

@media screen and (max-width: 800px) {
.home-content-2 {
  height: 100%;
  padding: 10px;
}
.banner-subtitle{
  font-size: 4vw;
  width: 80%;
}
.banner-title {
  font-size: 6vw;
  width: 80%;
  line-height: 1em;
}  
.content-2 {
  margin-bottom: 5em;
}
.title-content-2{
  margin: 3em;
}
}
</style>