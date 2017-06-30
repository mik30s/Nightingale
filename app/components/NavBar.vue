<template>
    <b-navbar toggleable type="inverse">

      <b-link v-on:click="openSideBar" class="navbar-brand" to="#">
        <span class="mdi mdi-menu"></span>
      </b-link>
     
    </b-navbar>
</template>

<script type="text/babel">
  import SideBar from './SideBar.vue';
  const sidebar = SideBar;
  
  export default {
    name : 'NavBar',
    data(){ 
      return {

      }; 
    },
    components:{
      'SideBar':SideBar
    },
    methods:{
      openSideBar() {
        sidebar.open();
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
      height: 3rem;
      padding: 0.5rem 0.5rem;
      border-bottom: 1px solid black;

      .navbar-brand{
        position: absolute;
        top: 0px;
        font-size: 2rem;
        margin: auto;
      }
      .navbar-brand:hover{
        background-color: lighten($secondary_color,5%);
      }

    }
</style>