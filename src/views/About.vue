<template>
  <v-container fluid>
    <div height="100vh" class="full-page bg-fix">
    </div>

    <v-layout class=" full-page about-content-1 top-layer bg-blur" style="height : 90vh" column align-end>
      <v-flex class="flex-1 bg-blur pa-5 content-1"><div class="text-content-1 text-uppercase text-right font-weight-black banner-title width-50 white--text" style="font-family: 'Poppins';padding : 0 1.5rem">Tentang Kami</div></v-flex>
      <v-flex class="flex-1 bg-blur pa-5 content-1"><div class="text-content-1 text-left font-weight-black banner-subtitle width-50 white--text" style="font-family: 'Lato'; letter-spacing : 2px;padding : 0 1.5rem"><span v-if="!mobileView" style="display:inline-block; width: 3rem;"></span>NYAMPIH berupaya menjadi salah satu penggerak rumah tangga Indonesia untuk mau memilah sampah dalam kehidupan sehari-hari melalui suatu kemudahan akses yang diberikan dalam bentuk aplikasi jasa angkut sampah. Sebagai salah satu pelopor perusahaan di bidang Waste Management melalui aplikasi kami memilki beberapa tujuan utama yaitu mengatasi permasalahan sampah yang terus meningkat di Indonesia, menjadi suatu wadah penggerak motivasi masyarakat untuk mau mengolah sampah dengan baik, dan memberikan akses kemudahan waste management yang modern dan terjangkau.</div></v-flex>
    </v-layout>

    <div class="full-page home-content-2 top-layer flex-1">
      
      <v-layout v-if="!mobileView" row align-center style="padding : 1.75rem">
        <v-flex xs12 md12 class="flex-1">
          <div style="width : 80vw; font-family: 'Poppins';text-shadow: 5px 5px white;" class="banner-title text-uppercase text-center font-weight-black title-about my-10" >Meet Our Team</div>
        </v-flex>
        <v-flex xs12 md3 v-for="member in crew" :key="member.img">
          <v-layout row class="pos-relative">
            <v-flex md12 class="flex-1">
              <v-avatar size="17.5vw">
                <v-img
                class="mb-5"
                :src="require(`../assets/${member.img}`)"
                ></v-img>
              </v-avatar>
            </v-flex>

            <v-flex md12 class="banner-subtitle width-30 mt-10 mb-5 member-name" style="font-family: 'Acme'; font-style: italic">
              {{ member.name }}
            </v-flex>

            <v-flex md12 class="flex-1 logo-linkedin">
              <v-btn fab :href="member.link" style="">
                <v-icon>
                  fab fa-linkedin-in
                </v-icon>
              </v-btn>
            </v-flex>

            <v-flex md12 class="banner-subtitle-details font-weight-black mt-5 width-30 headings role-member" style="font-family: 'Lato'">
              {{ member.role }}
            </v-flex>

            <v-flex md12 v-if="member.spec" class="banner-subtitle-details width-40 spec-member" style="font-family: 'Lato'">
              {{ member.spec }}
            </v-flex>
            <v-flex md12 v-else class="banner-subtitle-details text-transparent font-weight-black width-40 spec-member">None</v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-layout v-if="mobileView" column align-center style="padding : 1.75rem">
        <v-flex class="flex-1">
          <div style="width : 80vw; font-family: 'Poppins';text-shadow: 5px 5px white;" class="banner-title text-uppercase text-center font-weight-black title-about my-10" >Meet Our Team</div>
        </v-flex>
        <v-flex v-for="member in crew" :key="member.img">
          <v-layout row class="pos-relative" style="margin-top : 2rem; width : 90vw;padding : 1rem">
            <v-flex sm class="flex-1">
              <v-avatar size="17.5vw">
                <v-img
                class="mb-5"
                :src="require(`../assets/${member.img}`)"
                ></v-img>
              </v-avatar>
            </v-flex>

            <v-flex md12 class="flex-1">
              <div class="text-container" style="text-align : center;">
                <div class="member-name" style="font-family: 'Acme'; font-style: italic;font-size : 20px">{{ member.name }}</div>
                <div class="font-weight-black  headings " style="font-family: 'Lato'">{{ member.role }}</div>
                <div v-if="member.spec" style="font-family: 'Lato'">
                  {{ member.spec }}
                </div>
                <div v-else class="text-transparent">None</div>
              </div>
            </v-flex>

            <v-flex md12 class="flex-1 logo-linkedin">
              <v-btn fab :href="member.link" target="_blank">
                <v-icon>
                  fab fa-linkedin-in
                </v-icon>
              </v-btn>
            </v-flex>

          </v-layout>
        </v-flex>
      </v-layout>


    </div>
  </v-container>  
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      crew : [
        {img : 'karin.png', name : 'Karin Winda Lestari', role : 'CEO',spec : '', link: 'http://linkedin.com/in/karin-winda-lestari-6428751a7'},
        {img : 'faza.png', name : 'Faza Sausan Sanny P', role : 'CMO', spec : 'Digital Marketing', link: 'http://linkedin.com/in/fazassp'},
        {img : 'minaria.png', name : 'Minaria Chantika', role : 'CMO', spec : 'Marketing Communication', link: 'http://linkedin.com/in/minariachantika'},
        {img : 'silvi.png', name : 'Silvia Ayuni Putri', role : 'COO',spec : '', link: 'http://linkedin.com/in/silvia-ayuni-putri-92699b196'}
      ],
      mobileView : false,
    }
  },
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
}
.banner-subtitle {
  text-align: center;
  color: black;
  font-size: 1.7vw;  
}
.width-50 {
  width: 55vw;
}
.width-70 {
  width: 70vw;
}
.width-30 {
  width: 30vw;
}
.width-40 {
  width: 40vw;
}
.top-layer {
  position: relative;
  z-index: 2 ;
}
.flex-1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-subtitle-details {
  text-align: center;
  color: black;
  font-size: 1.3vw;  
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
  height: 100%;
}
.about-content-1 {
  background: url("../assets/showcase_about.png") no-repeat;
  background-size: cover;
  opacity: 0.95;
}
.bg-blur {
  background-color: rgba(3, 0, 0, 0.5);
}
.container-content-2 {
  width: 80vw;
}
.test {
  background-color: aqua;
}
.text-transparent{
  color: transparent;
}
@media screen and (max-width: 990px) {
.home-content-2 {
  height: 100%;
  padding: 10px;
}
.banner-subtitle{
  font-size: 2.5vw;
  width: 80%;
}
.banner-title {
  font-size: 5vw;
  width: 80%;
  line-height: 1em;
}  
.content-2 {
  margin-bottom: 5em;
}
.pos-relative {
  position: relative;
  border-bottom: solid 2px black;
  margin-bottom: 10px;
}
.title-content-2{
  margin: 3em;
}
.content-1 {
  width: 100vw;
  text-align: center !important;
}
.text-content-1{
  text-align: left !important;
}
.banner-subtitle-details {
  text-align: center;
  color: black;
  font-size: 2vw;
  margin-bottom: 3em;  
}
.text-transparent {
  color: transparent;
}
}
</style>