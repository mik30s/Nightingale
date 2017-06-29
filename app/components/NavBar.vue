<template>
    <b-navbar toggleable type="inverse">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="#">
        <span>BootstrapVue</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item>Support</b-nav-item>
          <b-nav-item>Docs</b-nav-item>
          <b-nav-item>Contact Us</b-nav-item>
        </b-nav>
    </b-collapse>      
    </b-navbar>
</template>

<script type="text/babel">

  export default {
    name : 'NavBar',
    data(){ return {}; },
    methods:[

    ]
  }
</script>

<style lang="scss">
    @import '../../static/theme_colors';

    .navbar{
      background-color: $secondary_color;
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      margin:0px;

    }
</style>