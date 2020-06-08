<template>
    <v-container grid-list-xl class="dparent" fluid>
        <v-layout align-center row wrap full-page >
            <!-- <v-flex>

            </v-flex> -->
            <v-flex xs12 sm12 md12 lg12 text-uppercase text-center class="hubungiTitle">Hubungi kami untuk info lebih lanjut</v-flex>
            <v-flex md12 v-for="n in 3" :key="n"></v-flex>
            <v-flex xs12 sm6 >
                <GmapMap
                :center="{lat:10, lng:10}"
                :zoom="7"
                map-type-id="terrain"
                style="width: 500px; height: 300px"
                >
                <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                />
                </GmapMap>
            </v-flex>
            <v-flex xs12 sm4 style="background: rgba(242,241,239,0.5); border-radius: 10px; padding: 30px;">
                <v-layout align-center>
                    <v-flex>
                        <v-form ref="form">
                            <v-text-field v-model="Nama" :rules="[rules.empty]" color="#039C9E" label="Nama Lengkap" outlined class="dform" id="form-1"></v-text-field>
                            <v-text-field  v-model="Email" :rules="[rules.email]" outlined color="#039C9E" label="Email" class="dform" id="form-2"></v-text-field>
                            <v-textarea v-model="Isi" :rules="[rules.empty]" outlined color="#039C9E" name="input-7-4" label="Pesan" class="dform" id="form-3"></v-textarea>
                        </v-form>
                        <v-btn light color="#039C9E" style="width: 100%; color: white; font-family: 'Ubuntu';" x-large :disabled="!inputValid()" @click="postIt()" :loading="processing">Kirim Pesan</v-btn>
                        <v-text v-if="submitted" class="success--text subtitle">Pesan Terkirim</v-text>
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
        snackbar : false,
        processing : false,
        submit : false,
        rules: {
            empty: value => !!value || 'Penting!',
            email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Email tidak valid'
          },
        }
    }),
    methods: {
        inputValid()  {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            const testEmail =  pattern.test(this.Email)
            return this.Nama != '' && testEmail && this.Isi != ''
        },
        postIt() {
            if(!this.processing) {
                this.processing = true
                axios.post('https://joe-flask-app.herokuapp.com/contact',
                {
                    'Email': this.Email,
                    'Nama': this.Nama,
                    'Isi': this.Isi
                })  .then((response) => {
                    this.Nama = ''
                    this.Email = ''
                    this.Isi = ''
                    console.log(response.status + ' YEYEYEYEYEY')
                    if(response.status == '200') {
                        this.submit = true
                        setTimeout(()=>{this.submit = false},5000)
                        this.processing = false
                        this.$refs.form.reset()
                    }
                    })
                    .catch(error => {console.log(error)})
            }
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