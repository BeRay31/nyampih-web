<template>
    <v-container fluid class='parentContainer'>
        <v-layout row wrap>
            <v-flex xs12 sm12 md6 class="faqTitle" style="font-size: 30px">FAQ</v-flex>
            <v-flex xs12 sm12 md3>
                <div class="faqTitle">Frequently Asked Question</div>
                <v-container>
                    <div class="faqContainer" v-for="faq in faqs" :key="faq.name">
                        {{ faq.name | uppercase }}
                    </div>
                </v-container>
            </v-flex>
            <v-flex md3></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        faqs: [
            {name: 'Apa itu Nyampih?'},
            {name: 'Mengapa harus Nyampih?'},
            {name: 'Bagaimana cara menggunakan jasa Nyampih?'},
            {name: 'Berapa biaya angkut sampah dari jasa Nyampih?'}
        ], 
        opening: 'none'
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
    .parentContainer {
        background-color: green;
    }
    .faqContainer {
        padding: 10px 0px;
        border-bottom: 2px solid #e5ad06; 
        font-weight: bold;
        color: white;
    }
    .faqTitle {
        font-size: 20px;
        font-weight: 800;
        width: 100%;
        color: white;
        text-align: center;
        /* background-color: red; */
    }
</style>