<template>
    <v-container>
        <div class="descriptionContainer">
            <v-container>
                <span class="layananDesc" style="font-size: 40px; font-weight: 800; letter-spacing: 5px;">LAYANAN</span>
                <br v-for="n in 3" :key="n">
                <p class="layananDesc">{{ layananDescription | uppercase}}</p>
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
                    <v-flex xs6 class="serviceDesc" text-xs-center>
                        <div class="layananKami" style="font-size: 20px">{{ service.name | uppercase }}</div>
                        <router-link :to="service.linkReadMore">
                            <div style="color: #414141; text-decoration: underline;" >Read More</div>
                        </router-link>
                        <div style="color: #7faefe">{{ service.time }}</div>
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
            {name: 'Angkut Perumahan', img: 'angkutperumahan.png', linkReadMore: '/hehe', time: '30 min', linkBookNow: '/hai'},
            {name: 'Angkut Bisnis', img: 'angkutbisnis.png', linkReadMore: '/hihi', time: '1 hr', linkBookNow: '/hei'}
        ],
        layananDescription: 'Service yang kami sediakan berupa jasa angkut sampah dengan kategori sampah; makanan, kertas/kardus, botol plastik. Untuk setiap sampah minimal pengangkutan 5 kilogram. Konsumen dapat mudah memilih kategori sampah di aplikasi kami. Pada layanan aplikasi kami juga terdapat fitur chat untuk memudahkan petugas sampah kami berkomunikasi dengan konsumen, ada pula sistem point/ membership yang nantinya dipergunakan untuk konsumen setia kami lalu point yang didapatkan bisa dikumpulkan hingga ditukarkan dengan produk-produk bertema lingkungan bersama partnership kami.'
    }),
    filters: {
        uppercase: function (value) {
            if (!value) return ''
            return value.toUpperCase()
        }
    }
}
</script>

<style scoped>
    .descriptionContainer {
        background-color: green;
    }
    .servicesContainer {
        /* background-color: blue; */
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
</style>