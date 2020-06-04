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

    <v-layout class="full-page home-content-2 top-layer">

    </v-layout>

    <v-layout class="full-page home-content-3 top-layer">

    </v-layout>

    <v-layout class="full-page home-content-2 top-layer">

    </v-layout>
  </v-container>  
</template>

<script>
// @ is an alias to /src
export default {

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
  font-size: 3vw;
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
  width: 40vw;
  text-align: center;
  color: black;
  font-size: 1.4vw;  
}
.home-content-2 {
  background: url("../assets/content-2-background.png") repeat;
  background-size: contain;
}
.home-content-3 {
  background: url("../assets/content-3-background.png") no-repeat;
  background-size: cover;
}
</style>