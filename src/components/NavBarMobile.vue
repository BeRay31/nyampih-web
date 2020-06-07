<template>
    <nav>
        <v-app-bar app height=60 class="text-center" style="border-bottom : solid 3px #039C9E; background-color : rgba(255,255,255,0.9)">
            <v-app-bar-nav-icon class="navbar-button" :class="{'active-link': drawer}" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-spacer></v-spacer>
            <router-link tag="div" class="logo mb-1 pb-1"  :to="{ name:'Home' }">
                <v-avatar>
                    <v-img
                    src="../assets/logo.png"
                    ></v-img>
                </v-avatar>
                <v-text class="pl-3 font-weight-bold">
                    NYAMPIH
                </v-text>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn class="navbar-button join-us" small text @click="snackbar = true" rounded active-class="active-link" target="_blank" href="https://joe-flask-app.herokuapp.com/download">
                <span class="navbar-text" >join Us</span>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" style="position : fixed" absolute left temporary width=100vw>
            <v-btn text class="navbar-button mt-2" @click.stop="drawer = !drawer" height=50 width=50 fab>
                <v-icon>mdi-close</v-icon>    
            </v-btn> <!-- bisa ganti jadi icon x-->
            <div class="menu">
                <v-btn class="navbar-button drawer-button " text :to="{ hash : '#overview',name:'Home' }" rounded active-class="active-link" exact>
                    <span class="navbar-text">Home</span>
                </v-btn>
            
                <v-btn class="navbar-button drawer-button " text :to="{ hash : '#overview', name:'About' }" rounded active-class="active-link">
                    <span class="navbar-text">Tentang Kami</span>
                </v-btn>

                <v-btn class="navbar-button drawer-button " text rounded :to="{ hash: '#overview', name : 'Services' }" active-class="active-link">
                    <span class="navbar-text" >Layanan</span>
                </v-btn>

                <v-btn class="navbar-button drawer-button " text rounded :to="{ hash:'#faq', name: 'FAQ' }" active-class="active-link">
                    <span class="navbar-text" >FAQ</span>
                </v-btn>

                <v-btn class="navbar-button drawer-button " text rounded :to="{ name: 'Contact' }" active-class="active-link">
                    <span class="navbar-text" >Kontak</span>
                </v-btn>
                <v-btn small fab flat target="_blank" href="https://www.instagram.com/nyampih.co/?igshid=1s2nvor4bxk8y">
                    <v-avatar size="40" style="cursor : pointer">
                        <v-img
                        src="../assets/instagram.png"
                        contain
                        ></v-img>
                    </v-avatar>
                </v-btn>
                <v-spacer></v-spacer>

            </div>
        </v-navigation-drawer>
        <v-snackbar v-model="snackbar" top timeout="10000" color="#039C9E">
            Aplikasi Di Download !
            <v-btn color="black" text @click="snackbar = false">Close</v-btn>
        </v-snackbar>
    </nav>
</template>

<script>

  export default {
    data: () => ({
      drawer: false,
      cartDrawer: false,
      snackbar : false,
      group: null,
      shop_clicked: false,
      loggedIn: false,
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>
.logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 4px solid rgb(3, 156, 158);
    border-radius: 1em;
    text-align: center;
    letter-spacing: 3px;
    font-size: 2vw;
    cursor: pointer;
    margin-right: 3em;
}
.navbar-button {
    margin: 0 0.6em;
    border-bottom: solid 5px #039C9E;
}
.navbar-text {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.2em;
    font-weight: bold;
} 
.join-us {
    position: absolute;
    right: 0%;
    margin: 0;
}
.active-link {
    border-bottom: none 0px #039C9E !important;
}
.menu {
    height: 90vh;
    display: grid;
    align-items: center;
    justify-items: center;
}
</style>