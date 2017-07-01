<template>
    <b-navbar toggleable type="inverse">

      <b-link v-on:click="toggleSideBar" class="navbar-brand">
        <span class="mdi mdi-menu"></span>
      </b-link>
     
    </b-navbar>
</template>

<script type="text/babel">
  import Vue from 'vue';
  import SideBar from './SideBar.vue';
  
  export default {
    name : 'NavBar',
    isOpen: false,
    data(){ 
      return {
        isOpen: false
      }; 
    },
    components:{
      'SideBar':SideBar
    },
    methods:{
      toggleSideBar() {
        if (!this.isOpen) {
          this.isOpen = true;
        }
        else{
          this.isOpen = false;
        }
        bus.$emit('navBtnClicked')
      }
    }
  }
</script>

<style lang="scss">
    @import '../../static/theme_colors';

    .navbar{
      background-color: $secondary_color;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      margin: 0px;
      height: 2rem;
      padding: 0.5rem 0.6rem;
      border-bottom: 1px solid black;

      .navbar-brand{
        position: absolute;
        top: 0px;
        font-size: 1.5rem;
        margin: auto;
      }
      .navbar-brand:hover{
        background-color: lighten($secondary_color,5%);
      }

    }
</style>