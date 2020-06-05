<template>
    <nav>
        <v-app-bar app height=60 class="text-center" style="border-bottom : solid 3px #039C9E; background-color : rgba(255,255,255,0.9)">
            <v-app-bar-nav-icon class="navbar-button" :class="{'active-link': drawer}" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-spacer></v-spacer>
            <router-link tag="div" class="logo mb-1"  :to="{ name:'Home' }">
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
            <v-btn class="navbar-button join-us" text rounded active-class="active-link">
                <span class="navbar-text" >join Us</span>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute left temporary width=100vw>
            <v-btn text class="navbar-button mt-2" @click.stop="drawer = !drawer" height=50 width=50 fab>
                <v-icon>mdi-close</v-icon>    
            </v-btn> <!-- bisa ganti jadi icon x-->
            <div class="menu">
                <v-btn class="navbar-button drawer-button " text :to="{ name:'Home' }" rounded active-class="active-link" exact>
                    <span class="navbar-text">Home</span>
                </v-btn>
            
                <v-btn class="navbar-button drawer-button " text :to="{ name:'About' }" rounded active-class="active-link">
                    <span class="navbar-text">Tentang Kami</span>
                </v-btn>

                <v-btn class="navbar-button drawer-button " text rounded :to="{ name : 'Services' }" active-class="active-link">
                    <span class="navbar-text" >Layanan</span>
                </v-btn>

                <v-btn class="navbar-button drawer-button " text rounded :to="{ name: 'FAQ' }" active-class="active-link">
                    <span class="navbar-text" >FAQ</span>
                </v-btn>

                <v-btn class="navbar-button drawer-button " text rounded active-class="active-link">
                    <span class="navbar-text" >Kontak</span>
                </v-btn>
                <v-avatar size="40" style="cursor : pointer">
                    <v-img
                    src="../assets/instagram.png"
                    contain
                    ></v-img>
            </v-avatar>
                <v-spacer></v-spacer>

            </div>
        </v-navigation-drawer>
    </nav>
</template>

<script>

  export default {
    data: () => ({
      drawer: false,
      cartDrawer: false,
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
    border-bottom: 4px solid #039C9E;
    border-radius: 1em;
    text-align: center;
    letter-spacing: 3px;
    font-size: 1.1em;
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