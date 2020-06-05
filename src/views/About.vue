<template>
  <v-container fluid>

    <v-layout class="pr-3 full-page about-content-1 top-layer bg-blur" column align-end>
      <v-flex class="flex-1 bg-blur pa-5"><div class="text-uppercase text-right font-weight-black banner-title width-50 white--text ">Tentang Kami</div></v-flex>
      <v-flex class="flex-1 bg-blur pa-5"><div class="text-uppercase text-left font-weight-black banner-subtitle width-50 white--text">NYAMPIH berupaya menjadi salah satu penggerak rumah tangga Indonesia untuk mau memilah sampah dalam kehidupan sehari-hari melalui suatu kemudahan akses yang diberikan dalam bentuk aplikasi jasa angkut sampah. Sebagai salah satu pelopor perusahaan di bidang Waste Management melalui aplikasi kami memilki beberapa tujuan utama yaitu mengatasi permasalahan sampah yang terus meningkat di Indonesia, menjadi suatu wadah penggerak motivasi masyarakat untuk mau mengolah sampah dengan baik, dan memberikan akses kemudahan waste management yang modern dan terjangkau.</div></v-flex>
      
    </v-layout>

    <div height="100vh" class="full-page bg-fix">
    </div>
    <v-layout class="full-page home-content-2 top-layer" column align-center>
      <v-flex class="flex-1">
        <div style="width : 80vw" class="banner-title text-uppercase text-center font-weight-black title-about">Meet Our Team</div>
      </v-flex>
      <v-flex class="flex-1">
        <v-layout class="container-content-2">
          <v-layout column class="mx-1 width-30" align-center v-for="member in crew" :key="member.name">
            <v-flex>
              <v-avatar size="220">
                <v-img
                class="mb-5"
                :src="require(`../assets/${member.img}`)"
                ></v-img>
              </v-avatar>
            </v-flex>
            <v-flex class="banner-subtitle font-weight-black width-30 mt-10">
              {{ member.name }}
            </v-flex>
            <v-flex>
              <v-btn fab large>
                <v-icon>
                  mdi-plus
                </v-icon>
              </v-btn>
            </v-flex>
            <v-flex class="banner-subtitle font-weight-black width-30 headings">
              {{ member.role }}
            </v-flex>
            <v-flex v-if="member.spec" class="banner-subtitle font-weight-black width-40">
              {{ member.spec }}
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-layout>

  </v-container>  
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      crew : [
        {img : 'karin.png', name : 'Karin Winda Lestari', role : 'CEO',spec : ''},
        {img : 'faza.png', name : 'Faza Sausan Sanny Pramadithya', role : 'CMO', spec : 'Digital Marketing'},
        {img : 'minaria.png', name : 'Minaria Chantika', role : 'CMO', spec : 'Marketing Communication'},
        {img : 'silvi.png', name : 'Silvia Ayuni Putri', role : 'COO',spec : ''}
      ],
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
  height: 90vh;
  width: 100vw;
}
.banner-title {
  color: black;
  font-size: 3.4vw;
  letter-spacing: 0.7vw;
  line-height: 3vw;
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
.banner-subtitle {
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
  background-size: contain;
}
.about-content-1 {
  background: url("../assets/showcase_about.png") no-repeat;
  background-size: contain;
  background-size: 100vw 100vh;
  opacity: 0.9;
}
.bg-blur {
  background-color: rgba(3, 0, 0, 0.5);
}
.container-content-2 {
  width: 80vw;
}
</style>