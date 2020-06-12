<template>
    <nav >
        <v-app-bar app height=80 style="border-bottom : solid 3px #039C9E; background-color : rgba(255,255,255,0.9)">
            <router-link tag="div" class="logo mr-12 pa-1" :to="{ name:'Home' }">
                <v-avatar>
                    <v-img
                    src="../assets/logo.png"
                    ></v-img>
                </v-avatar>
                <v-text class="pl-3 font-weight-bold">
                    NYAMPIH
                </v-text>
            </router-link>
            <v-btn class="navbar-button mx-2" text :to="{ name:'Home' }" rounded active-class="active-link" exact>
                <span class="navbar-text">Home</span>
            </v-btn>
        
            <v-btn class="navbar-button mx-2" text :to="{ name:'About' }" rounded active-class="active-link">
                <span class="navbar-text">Tentang Kami</span>
            </v-btn>

            <v-btn class="navbar-button mx-2" text rounded :to="{ name : 'Services' }" active-class="active-link">
                <span class="navbar-text" >Layanan</span>
            </v-btn>

            <v-btn class="navbar-button mx-2" text rounded :to="{ name: 'FAQ' }" active-class="active-link">
                <span class="navbar-text" >FAQ</span>
            </v-btn>

            <v-btn class="navbar-button mx-2" text rounded :to="{ name: 'Contact' }" active-class="active-link">
                <span class="navbar-text" >Kontak</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn class="navbar-button mx-2" target="_blank" @click="snackbar = true" href="https://joe-flask-app.herokuapp.com/download" text rounded active-class="active-link">
                <span class="navbar-text" >join Us</span>
            </v-btn>
            <v-btn class="mx-2" small fab flat target="_blank" href="https://www.instagram.com/nyampih.co/?igshid=1s2nvor4bxk8y">
                <v-avatar size="40" style="cursor : pointer">
                    <v-img
                    src="../assets/instagram.png"
                    contain
                    ></v-img>
                </v-avatar>
            </v-btn>
            <v-btn class="mx-2" small fab flat target="_blank" href="Use: https://wa.me/6285383539770">
                <v-img
                src="../assets/whatsapp-icon.png"
                width="51px"
                height="51px"
                ></v-img>
            </v-btn>
        </v-app-bar>
        <v-snackbar v-model="snackbar" top timeout="10000" color="#039C9E">
            Aplikasi Sudah Di Download !
            <v-btn color="black" text @click="snackbar = false">Close</v-btn>
        </v-snackbar>
    </nav>
</template>

<script>
export default {
    components: {
    },
    data: () => ({
        snackbar : false,
    }),
}
</script>

<style scoped>
    .use-raleway {
        font-family: 'Raleway', sans-serif;  
    }
    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom: 4px solid #039C9E;
        border-radius: 1em;
        text-align: center;
        letter-spacing: 3px;
        font-size: 1.1em;
        cursor: pointer;
    }
    .use-roboto-condensed {
        font-family: 'Roboto Condensed', sans-serif;
    }

    .active-link {
        border-bottom: none 0px #039C9E !important;
    }

    .navbar-text {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 1.2em;
        font-weight: bold;
    }   
    .navbar-button {
        margin: 0 0.6em;
        border-bottom: solid 5px #039C9E;
    }
    
    
</style>
