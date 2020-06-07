<template>
    <v-container grid-list-xl class="dparent" fluid>
        <v-layout align-center row wrap full-page >
            <!-- <v-flex>

            </v-flex> -->
            <v-flex xs12 sm12 md12 lg12 text-uppercase text-center class="hubungiTitle">Hubungi kami untuk info lebih lanjut</v-flex>
            <v-flex md12 v-for="n in 3" :key="n"></v-flex>
            <v-flex xs12 sm6 >
                gmaps here
            </v-flex>
            <v-flex xs12 sm4 style="background-color: white; border-radius: 10px; padding: 30px;">
                <v-layout align-center>
                    <v-flex>
                        <v-text-field  label="FULL NAME" outlined></v-text-field>
                        <v-text-field   outlined label="EMAIL"></v-text-field>
                        <v-textarea outlined name="input-7-4" label="Your message"></v-textarea>
                        <v-btn dark style="width: 100%" x-large>Submit</v-btn>
                    </v-flex>
                </v-layout> 
            </v-flex>
            <v-flex md12 v-for="n in 2" :key="n"></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        checkbox: true
    })
}
</script>

<style scoped>
    .hubungiTitle{
        margin-top: 30px;
        font-size:calc(12px + 1.5vw);
        font-weight: 800;
        text-shadow: 0px 0px 2px grey;
    }
    .dparent {
        background: url('../assets/content-2-background.png');
    }
</style>