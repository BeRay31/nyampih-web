<template>
    <v-container fluid>
         <div class="descriptionContainer pa-10" style="width: 100vw; height: calc(100vh - 80px)">
            <span class="layananDesc banner-title white--text" style=" font-weight: 800; letter-spacing: 5px;font-family: 'Ubuntu'">LAYANAN</span>
            <br v-for="n in 3" :key="n">
            <p class="layananDesc text-uppercase banner-subtitle white--text">{{ layananDescription }}</p>
        </div>
        <v-container>
            <br>
            <div class="layananKami" style="color: #414141; font-family: 'Ubuntu'">LAYANAN KAMI</div>
            <br>
            <div v-for="service in services" :key="service.name">
                <v-layout align-center>
                    <v-flex xs6>
                        <v-img :src="require(`../assets/services/${service.img}`)"></v-img>
                    </v-flex>
                    <v-flex xs6 class="serviceDesc flex-1" text-xs-center>
                        <div class="layananKami text-uppercase" style="font-size: 20px; font-family: 'Ubuntu'">{{ service.name}}</div>
                        <div class="product-desc flex-1" >{{ service.desc }}</div>
                        <div>
                            <v-btn dark color="#039C9E" @click="snackbar = true" target="_blank" href="https://joe-flask-app.herokuapp.com/download" style="font-family: 'Ubuntu'">Book Now</v-btn>
                        </div>
                    </v-flex>
                </v-layout>
                <br v-for="n in 2" :key="n">
            </div>
        </v-container>
        <v-snackbar v-model="snackbar" top timeout="10000" color="#039C9E">
            Aplikasi Sudah Di Download !
            <v-btn color="black" text @click="snackbar = false">Close</v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        services: [
            {name: 'Angkut Perumahan', img: 'angkutperumahan.png', desc: 'Angkut Perumahan adalah jasa angkut sampah perumahan dan sampah yang diangkut akan dibawa ke penadah sampah,bank sampah,dll', time: '30 min', linkBookNow: '/hai'},
            {name: 'Angkut Bisnis', img: 'angkutbisnis.png', desc: 'Jasa angkut sampah yang bisa digunakan oleh perkantoran,coffee shop,restauran,kos-kosan,hotel,dll', time: '1 hr', linkBookNow: '/hei'}
        ],
        layananDescription: 'Service yang kami sediakan berupa jasa angkut sampah dengan kategori sampah; makanan, kertas/kardus, botol plastik. Untuk setiap sampah minimal pengangkutan 5 kilogram. Konsumen dapat mudah memilih kategori sampah di aplikasi kami. Pada layanan aplikasi kami juga terdapat fitur chat untuk memudahkan petugas sampah kami berkomunikasi dengan konsumen, ada pula sistem point/ membership yang nantinya dipergunakan untuk konsumen setia kami lalu point yang didapatkan bisa dikumpulkan hingga ditukarkan dengan produk-produk bertema lingkungan bersama partnership kami.',
        snackbar : false,
    }),
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
        /* margin: 0; */
        padding: 0;
    }
    .descriptionContainer {
        background: url("../assets/layanan-background.png") no-repeat;
        background-size: cover;
        font-family: 'Roboto';
        /* padding: 0;
        margin: 0; */
        /* font-weight: 800; */
    }
    .flex-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .layananDesc {
        font-weight: 600;
        letter-spacing: 2px;
        color: white;
    }
    .layananKami {
        text-align: center;
        font-size: 35px;
        font-weight: 800;
        letter-spacing: 4px;
    }
    .serviceDesc div {
        /* background-color: orange; */
        text-align: center;
        margin: 10px;
    }
    .product-desc{
        text-align: center;
        width: 50%;
        font-family: 'Lato';
    }
    .banner-title {
        font-size: 3.4vw;
        letter-spacing: 0.7vw;
        line-height: 3vw;
    }
    .banner-subtitle {
        font-size: 1.7vw;  
    }

    @media screen and (max-width: 800px) {
        .banner-subtitle{
            font-size: 2.5vw;
            width: 80%;
        }
        .banner-title {
            font-size: 4vw;
            width: 80%;
            line-height: 1em;
        }  
    }
</style>