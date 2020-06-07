<template>
    <v-container fluid class='parentContainer'>
        <v-layout row wrap>
            <v-flex xs12 sm12 md6 class="faqTitle" style="font-size: 30px">FAQ</v-flex>
            <v-flex xs12 sm12 md6 class="pa-6">
                <div class="faqTitle">Frequently Asked Question</div>
                <br v-for="i in 5" :key="i"/>
                <v-expansion-panels accordion tile dark>
                    <v-expansion-panel v-for="faq in faqs" :key="faq.name" style="background:rgba(0, 0, 0, 0.8);color:white">
                    <v-expansion-panel-header>
                            <span style="font-family: 'Lato'; font-weight: 800;">{{ faq.name | uppercase }}</span>
                        </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div v-for="each in faq.desc" :key="each.des" class="content-panel" style="font-family: 'Ubuntu'">
                            {{ each.des }}
                        </div>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-flex>
            <v-flex md3></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        faqs: [
            {id: 1, name: 'Apa itu Nyampih?', desc: [{des:'Nyampih adalah sebuah aplikasi yang menghubungkan penghasil sampah baik rumah tangga maupun bisnis dengan pengumpul sampah (garbage collector) dengan mengutamakan jasa angkut sampah yang fleksibel, kemudahan pemesanan dengan aplikasi, dan edukasi pemilahan sampah'}]},
            {id: 2, name: 'Mengapa harus Nyampih?', desc: [{des:'- Jadwal pengangkutan yang fleksibel'}, {des:'- Kemudahan pemesanan melalui aplikasi'}, {des:'- Pengangkut yang terpercaya dan terverifikasi'},  {des:'- Edukasi mengenai pemilahan sampah'}]},
            {id: 3, name: 'Bagaimana cara menggunakan jasa Nyampih?', desc: [{des:'Dengan mendownload aplikasi Nyampih di link'}]},
            {id: 4, name: 'Berapa biaya angkut sampah dari jasa Nyampih?', desc: [{des:'Tergantung jenis sampahnya. Untuk lebih jelas, bisa melihat di bagian layanan.'}]}
        ],
        opening: 0
    }),
    filters: {
        uppercase: function (value) {
            if (!value) return ''
            return value.toUpperCase()
        }
    },
    methods: {
        clickThis(id) {
            if (this.opening == id) {
                this.opening = 0
            } else {
                this.opening = id
            }
        }
    }
}
</script>

<style scoped>
    .parentContainer {
        background: url("../assets/faq-background.png") no-repeat;
        background-size: cover;
        height: 100vh;
    }
    .faqContainer {
        padding: 10px 0px;
        border-bottom: 2px solid #e5ad06; 
        font-weight: bold;
        color: white;
        /* cursor: pointer; */
    }
    .faqTitle {
        font-size: 20px;
        font-weight: 800;
        width: 100%;
        color: white;
        text-align: center;
        font-family: 'Ubuntu'
    }
    .flex-1 {
        display: flex;
        align-items: center;
        justify-content: center;
    }
@media screen and (max-width: 800px) {
    .content-panel {
        width: 70% !important;
    }
}
</style>