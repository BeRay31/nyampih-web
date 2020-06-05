<template>
  <v-container fluid>
    
    <div height="100vh" class="full-page bg-fix">
    </div>
    
    <v-layout class="full-page top-layer" column align-center>
      <v-flex class="flex-1"><div class="text-uppercase text-center font-weight-black banner-title">Menjaga lingkungan kalian tetap bersih</div></v-flex>
      <v-flex class="flex-1">
        <v-layout column class="flex-1">
          <v-flex class="banner-subtitle font-weight-black text-uppercase ">Jasa angkut sampah yang fleksibel melayani daerah Bandung dan sekitarnya.</v-flex>
          <v-flex class="mt-3">
            <v-btn rounded x-small>
              <v-icon left>
                mdi-chevron-down
              </v-icon>
              Show More
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <div class="full-page home-content-2 top-layer">
      <v-layout class="full-page home-content-2 top-layer" row>
        <v-flex md12 xs12 align-self-center class="flex-1 pb-10 title-content-2">
          <div style="width : 80vw" class="banner-title text-uppercase text-center font-weight-black">Kenapa Memilih Nyampih?</div>
        </v-flex>
        <v-flex md3 xs12 align-self-center class="content-2" v-for="ben in benefit" :key="ben.text">
          <v-container >
            <v-layout column align-center>
              <v-flex>
                <v-img
                  max-height="25vh"
                  max-width="25vw"
                  contain
                  class="mb-5"
                  :src="require(`../assets/${ben.img}`)"
                ></v-img>
              </v-flex>
              <v-flex class="banner-subtitle font-weight-black">
                {{ ben.text }}
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
    
    
    <v-layout class="full-page home-content-3 top-layer " column align-center>
      <v-flex class="flex-1">
        <div style="width : 80vw; color:#fff" class="banner-title text-uppercase text-center font-weight-black">Layanan Kami</div>
      </v-flex>
      <v-flex class="flex-1">
        <v-layout class="container-content-2">
          <v-layout column class="mx-1" align-center v-for="service in services" :key="service.text">
            <v-flex>
              <v-img
                max-height="200"
                max-width="200"
                contain
                class="mb-5"
                :src="require(`../assets/${service.img}`)"
              ></v-img>
            </v-flex>
            <v-flex class="banner-subtitle text-lg text-uppercase text-center white--text font-weight-black">
              {{ service.text }}
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
      benefit : [
        {img : 'date_icon.png', text : 'Jadwal Pengangkutan yang Fleksibel'},
        {img : 'trash_edu.png', text : 'Edukasi Tentang Pemilahan Sampah'},
        {img : 'trash_edu.png', text : 'Kemudahan Pemesanan Melalui Aplikasi'},
        {img : 'trash_edu.png', text : 'Pengangkut Terpercaya dan Terverifikasi'}
      ],
      services : [
        {img:'home_icon.png', text : 'Angkut Perumahan' },
        {img:'office_icon.png', text : 'Angkut Bisnis' }
      ]
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
  height: 100vh;
  width: 100vw;
}
.banner-title {
  color: black;
  font-size: 3.4vw;
  letter-spacing: 0.7vw;
  line-height: 3vw;
  width: 50%;
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
  background-size: contain;
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