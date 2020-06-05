<template>
    <v-container fluid class="test" grid-list-xl>
        <br v-for="n in 3" :key="n">
        <v-layout row wrap text-center>
            <v-flex xs0 md3></v-flex>
            <v-flex xs12 md3>
                <!-- <v-spacer></v-spacer> -->
                <v-img src="../assets/logo.png" width="200px" class="test2"></v-img>
                <!-- <v-spacer></v-spacer> -->
            </v-flex>
            <v-flex xs6 md2>
                <div class="fontTebel">Kantor Pusat</div>
                <br v-for="n in 2" :key="n">
                <div style="color: white">
                    Jl. Ganesa No.15, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132
                </div>
            </v-flex>
            <v-flex xs6 md2>
                <div class="fontTebel">Jam Operasional</div>
                <br v-for="n in 2" :key="n">
                <div style="color: white">
                    Mon - Fri: 8.00 - 18.00
                </div>
                <div style="color: white">
                    Sat & Sun : 9.00 - 17.00
                </div>
            </v-flex>
            <v-flex xs0 md2></v-flex>

            <v-flex xs0 md6></v-flex>
            <v-flex xs12 md4>
                <hr>
                <v-container>
                    <v-layout row wrap>
                        <v-flex xs6 class="fontTebel" style="text-align: left; text-shadow: none; font-size: 100%;">0822-4023-3120</v-flex>
                        <v-flex xs6 style="text-align: right">
                            <v-icon>mdi-instagram</v-icon>
                            <span class="fontTebel" style="text-shadow: none; font-size: 100%;">@nyampih.co</span>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs0 md2></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
    .test {
        background-color: #039c9e;
    }
    .fontTebel {
        font-weight: 800;
        font-size: 20px;
        text-shadow: -3px 3px 3px grey;
    }
    .test2 {
        margin: 0 auto;
    }
</style>