<template>
    <div class="app">
        <div id="title-bar" class="app-bar">
            <div class="window-title">  Nightingale</div>
            <div class="window-buttons">
                <div v-on:click="minimize()" class="title-bar-btn" id="minimize-btn">
                  <i class="mdi mdi-window-minimize"></i> 
                </div>
                <div  v-on:click="maximize()" class="title-bar-btn" id="maximize-btn">
                  <i class="mdi mdi-window-maximize"></i>                   
                </div>
                <div v-on:click="close()" class="title-bar-btn" id="close-btn">
                  <i class="mdi mdi-window-close"></i> 
                </div>
            </div>
        </div>
        <div class="content">
            <NavBar></NavBar>
        </div>
    </div>
</template>

<script type="text/babel">
  import Vue from 'vue';
  import NavBar from './components/NavBar.vue';
  
  const {remote} = window.require('electron');
  const win = remote.getCurrentWindow();

  export default {
    data () {
      return {
        drawer: true,
        items: [{
          href: 'home',
          router: true,
          title: 'Home',
          icon: 'home',
        }, {
          href: 'examples',
          router: true,
          title: 'Example',
          icon: 'extension',
        }, {
          href: 'about',
          router: true,
          title: 'About',
          icon: 'domain',
        }]
      }
    },
    components:{
        'NavBar': NavBar
    },
    methods: {
      close() {
        win.close();
      },

      minimize() {
        win.minimize();
      },

      maximize(){
        if(!win.isMaximized()){
          win.maximize();
        } else{
          win.unmaximize();
        }
      }
    }
  }
</script>

<style lang="scss">
    @import '../static/theme_colors';
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');

    html, body {
        width: 100%; height: 100%;
        margin: 0px;
    }
    body{
        background-color: darken($primary_color, 10%);
        // background-image: url('../static/images/bg.svg');
        // background-position: top right;
        // background-repeat: no-repeat;
        // background-size: 100% 100%;
        font-family: 'Noto Sans', sans-serif;
    }
    .app{
        width: 100%;
        height:100%;
        #title-bar {
            position: absolute;
            top: 0px; left: 0px;
            height: 32px; width: 100%;
            background-color: $secondary_color;
            color: white;
            -webkit-app-region:drag;
            display: inline-flex;
            flex-direction: row;


             .window-buttons, .title-bar-btn {
                -webkit-app-region: no-drag;
            }

            .window-title{
                flex-grow: 2;
                vertical-align: middle;
                text-align: left;
                margin: auto;
                margin-left: 25px;
            }

            .window-buttons{
                width: 135px;
                height: 32px;
                display: inline-flex;
                flex-direction: row;

                .title-bar-btn {
                    width: 45px;
                    height: 32px;
                    margin: 0px;
                    i {margin: 14px;}
                }
                #minimize-btn:hover,#maximize-btn:hover{
                    background-color: lighten($secondary_color,5%);
                }
                #close-btn:hover {
                    background-color: $red;
                }
            }
        }

        .content {
            top: 32px;
            position: fixed;
            width: 100%;
            height: 100%;
        }
    }
</style>