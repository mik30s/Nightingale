<template>
    <b-navbar toggleable type="inverse">

      <b-link class="navbar-brand" to="#">
        <span class="mdi mdi-menu"></span>
      </b-link>
     
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
      margin: 0px;
      height: 2rem;
      padding: 0.5rem 0.5rem;

      .navbar-brand:hover{
        background-color: lighten($secondary_color,5%);
      }

    }
</style>