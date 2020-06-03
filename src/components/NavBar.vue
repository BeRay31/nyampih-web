<template>
    <nav >
        <v-app-bar app height=80 color="#FFF" style="border-bottom : solid 3px #039C9E">
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
            <v-btn class="navbar-button mx-2" text :to="{ name:'Home' }" small rounded active-class="active-link" exact>
                <span class="navbar-text">Home</span>
            </v-btn>
        
            <v-btn class="navbar-button mx-2" text :to="{ name:'About' }" small rounded active-class="active-link">
                <span class="navbar-text">Tentang Kami</span>
            </v-btn>

            <v-btn class="navbar-button mx-2" text small rounded active-class="active-link">
                <span class="navbar-text" >Layanan</span>
            </v-btn>

            <v-btn class="navbar-button mx-2" text small rounded active-class="active-link">
                <span class="navbar-text" >FAQ</span>
            </v-btn>

            <v-btn class="navbar-button mx-2" text small rounded active-class="active-link">
                <span class="navbar-text" >Kontak</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn class="navbar-button mx-2" text rounded active-class="active-link">
                <span class="navbar-text" >join Us</span>
            </v-btn>
            <v-avatar size="40" style="cursor : pointer">
                <v-img
                src="../assets/instagram.png"
                contain
                sizes=""
                ></v-img>
            </v-avatar>
        </v-app-bar>
    </nav>
</template>

<script>
export default {
    components: {
    },
    data: () => ({
    }),
}
</script>

<style scoped>
    /* .shop_menu {
        background-color: green;
    } */
    .cartIcon {
        margin-left: 15px;
    }
    .headerCartDrawer {
        background-color: #1e1e1e;
    }
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
        border-bottom: solid 3px #039C9E;
    }

    .navbar-text {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 1.2em;
        font-weight: bold;
    }   
    .navbar-button {
        margin: 0 0.6em;
    }
    
</style>
