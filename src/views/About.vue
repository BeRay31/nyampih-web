<template>
  <v-container fluid>
    <div height="100vh" class="full-page bg-fix">
    </div>

    <v-layout class="pr-3 full-page about-content-1 top-layer bg-blur" style="height : 90vh" column align-end>
      <v-flex class="flex-1 bg-blur pa-5 content-1"><div class="text-content-1 text-uppercase text-right font-weight-black banner-title width-50 white--text" style="font-family: 'Ubuntu'">Tentang Kami</div></v-flex>
      <v-flex class="flex-1 bg-blur pa-5 content-1"><div class="text-content-1 text-left font-weight-black banner-subtitle width-50 white--text" style="font-family: 'Lato';">NYAMPIH berupaya menjadi salah satu penggerak rumah tangga Indonesia untuk mau memilah sampah dalam kehidupan sehari-hari melalui suatu kemudahan akses yang diberikan dalam bentuk aplikasi jasa angkut sampah. Sebagai salah satu pelopor perusahaan di bidang Waste Management melalui aplikasi kami memilki beberapa tujuan utama yaitu mengatasi permasalahan sampah yang terus meningkat di Indonesia, menjadi suatu wadah penggerak motivasi masyarakat untuk mau mengolah sampah dengan baik, dan memberikan akses kemudahan waste management yang modern dan terjangkau.</div></v-flex>
    </v-layout>

    <div class="full-page home-content-2 top-layer">
      <v-layout row align-center>
        <v-flex xs12 md12 class="flex-1">
          <div style="width : 80vw; font-family: 'Ubuntu';text-shadow: 5px 5px white;" class="banner-title text-uppercase text-center font-weight-black title-about my-10" >Meet Our Team</div>
        </v-flex>
        <v-flex xs12 md3 v-for="member in crew" :key="member.img">
          <v-layout row class="pos-relative">
            <v-flex md12 class="flex-1">
              <v-avatar size="15vw">
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
              <v-btn fab>
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
    </div>

  </v-container>  
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      crew : [
        {img : 'karin.png', name : 'Karin Winda Lestari', role : 'CEO',spec : ''},
        {img : 'faza.png', name : 'Faza Sausan Sanny P', role : 'CMO', spec : 'Digital Marketing'},
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
  height: 100vh;
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
  font-size: 1.7vw;  
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
  background-size: contain;
}
.about-content-1 {
  background: url("../assets/showcase_about.png") no-repeat;
  background-size: contain;
  background-size: 100vw 100vh;
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
@media screen and (max-width: 800px) {
.home-content-2 {
  height: 100%;
  padding: 10px;
}
.banner-subtitle{
  font-size: 2.3vw;
  width: 80%;
}
.banner-title {
  font-size: 4vw;
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
  text-align: center !important;
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
.logo-linkedin{
  position: absolute;
  bottom: 10%;
  right: 4%;
}
.role-member{
  position: absolute;
  left: 43%;
  top: 40%;
}
.spec-member{
  position: absolute;
  left: 38%;
  top: 80%;

}
.member-name{
  margin: 0;
  padding: 0;
}
}
</style>