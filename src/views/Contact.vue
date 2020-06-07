<template>
    <v-container grid-list-xl class="dparent" fluid>
        <v-layout align-center row wrap full-page >
            <!-- <v-flex>

            </v-flex> -->
            <v-flex xs12 sm12 md12 lg12 text-uppercase text-center class="hubungiTitle">Hubungi kami untuk info lebih lanjut</v-flex>
            <v-flex md12 v-for="n in 3" :key="n"></v-flex>
            <v-flex xs12 sm6 >
                <!-- gmaps here -->
            </v-flex>
            <v-flex xs12 sm4 style="background: rgba(242,241,239,0.5); border-radius: 10px; padding: 30px;">
                <v-layout align-center>
                    <v-flex>
                        <v-text-field v-model="Nama" :rules="[rules.empty]" label="FULL NAME" outlined class="dform"></v-text-field>
                        <v-text-field  v-model="Email" :rules="[rules.email]" outlined label="EMAIL" class="dform"></v-text-field>
                        <v-textarea v-model="Isi" :rules="[rules.empty]" outlined name="input-7-4" label="Your message" class="dform"></v-textarea>
                        <v-btn light style="width: 100%; color: white; background-color: black; font-family: 'Ubuntu';" x-large :disabled="!inputValid()" @click="postIt()">Submit</v-btn>
                        <v-text class="success--text subtitle">Your Record HaveBeen Submitted</v-text>
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
        Nama: '',
        Email: '',
        Isi: '',
        submit : false,
        rules: {
            empty: value => !!value || 'Required!',
            email : value => {
                return value.includes('@') || 'Invalid Email'
            }
        }
    }),
    methods: {
        inputValid()  {
            return this.Nama != '' && this.Email.includes('@') && this.Isi != ''
        },
        postIt() {
            axios.post('https://joe-flask-app.herokuapp.com/',
            {
                'Email': this.Email,
                'Nama': this.Nama,
                'Isi': this.Isi
            })  .then((response) => {
                console.log(response.status + ' YEYEYEYEYEY')
                if(response.status == '200') {
                    this.Nama = ''
                    this.Email = ''
                    this.Isi = ''
                    this.submit = true
                    setTimeout(()=>{this.submit = false},5000)
                }
                })
                .catch(error => {console.log(error)})
        }
    },
    computed : {
        submitted() {
            return this.submit
        }
    }
}
</script>

<style scoped>
    .hubungiTitle{
        margin-top: 30px;
        font-size:calc(12px + 1.5vw);
        font-weight: 800;
        text-shadow: -3px 3px 3px grey;
        font-family: 'Ubuntu';
        letter-spacing: 2px;
    }
    .dparent {
        background: url('../assets/content-2-background.png');
    }
    .dform {
        font-family: 'Lato';
    }
</style>