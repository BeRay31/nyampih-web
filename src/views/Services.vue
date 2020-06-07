<template>
    <v-container>
        <div>
            <v-container class="descriptionContainer pa-10" style="width: 60vw;">
                <span class="layananDesc" style="font-size: 40px; font-weight: 800; letter-spacing: 5px;">LAYANAN</span>
                <br v-for="n in 3" :key="n">
                <p class="layananDesc text-uppercase">{{ layananDescription }}</p>
            </v-container>
        </div>
        <div class="servicesContainer">
            <br>
            <div class="layananKami" style="color: #414141">LAYANAN KAMI</div>
            <br>
            <div v-for="service in services" :key="service.name">
                <v-layout align-center>
                    <v-flex xs6>
                        <v-img :src="require(`../assets/services/${service.img}`)"></v-img>
                    </v-flex>
                    <v-flex xs6 class="serviceDesc flex-1" text-xs-center>
                        <div class="layananKami text-uppercase" style="font-size: 20px">{{ service.name}}</div>
                        <div class="product-desc flex-1" >{{ service.desc }}</div>
                        <div>
                            <v-btn dark color="#0f93fe" :to="service.linkBookNow">Book Now</v-btn>
                        </div>
                    </v-flex>
                </v-layout>
                <br v-for="n in 2" :key="n">
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        services: [
            {name: 'Angkut Perumahan', img: 'angkutperumahan.png', desc: 'Angkut Perumahan adalah jasa angkut sampah perumahan dan sampah yang diangkut akan dibawa ke penadah sampah,bank sampah,dll', time: '30 min', linkBookNow: '/hai'},
            {name: 'Angkut Bisnis', img: 'angkutbisnis.png', desc: 'Jasa angkut sampah yang bisa digunakan oleh perkantoran,coffee shop,restauran,kos-kosan,hotel,dll', time: '1 hr', linkBookNow: '/hei'}
        ],
        layananDescription: 'Service yang kami sediakan berupa jasa angkut sampah dengan kategori sampah; makanan, kertas/kardus, botol plastik. Untuk setiap sampah minimal pengangkutan 5 kilogram. Konsumen dapat mudah memilih kategori sampah di aplikasi kami. Pada layanan aplikasi kami juga terdapat fitur chat untuk memudahkan petugas sampah kami berkomunikasi dengan konsumen, ada pula sistem point/ membership yang nantinya dipergunakan untuk konsumen setia kami lalu point yang didapatkan bisa dikumpulkan hingga ditukarkan dengan produk-produk bertema lingkungan bersama partnership kami.'
    }),
}
</script>

<style scoped>
    .descriptionContainer {
        background: url("../assets/layanan-background.png") no-repeat;
        background-size: cover;
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
    }
</style>