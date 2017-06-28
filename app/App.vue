<template>
    <div id="title-bar" class="app-bar">
        <div class="window-title">
            <p>Nightingale</p>
        </div>
        <div class="window-buttons">
            <div class="title-bar-btn fs1" id="minimize-btn" data-icon=""></div>
            <div class="title-bar-btn" id="maximize-btn"></div>
            <div class="title-bar-btn" id="close-btn"></div>
        </div>
    </div>
</template>

<script type="text/babel">
  import Vue from 'vue';
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
    methods: {
      openSidebar() {
        this.sidebar = !this.sidebar;
      },
      openGithub() {
        window.open('https://github.com/disjfa/vuetify-sidebar-template');
      },
      close() {

      },

      minimize(){

      },

      maximize(){

      }
    }
  }
</script>

<style lang="scss">
    @import '../static/theme_colors';
    html, body {
        width: 100%; height: 100%;
        margin: 0px;
    }
    body{
        background-color: darken($primary_color, 10%);
        background-image: url('../static/images/bg.svg');
        background-position: top right;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    #title-bar {
        position: absolute;
        top: 0px; left: 0px;
        height: 32px; width: 100%;
        background-color: $primary_color;
        color: white;
        -webkit-app-region:drag;
        display: inline-flex;
        flex-direction: row;

         .window-buttons, .title-bar-btn {
            -webkit-app-region: no-drag;
        }

        .window-title{
            flex-grow: 2;
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
            }
            #minimize-btn{background: url('../static/images/win_close.svg');}
            #close-btn:hover {
                background-color: $red;
            }
        }
    }
</style>