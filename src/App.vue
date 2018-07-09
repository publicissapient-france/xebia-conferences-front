<template>
  <v-app light>
    <!-- NavBar Component -->
    <nav-bar
      :years="years"
      :miniVariant="miniVariant"
      :clipped="clipped"
      :drawer="drawer"
      />

    <!-- ToolBar component -->
    <!-- The projects map is used to display project title in tool bar -->
    <tool-bar
      :years="years"
      :miniVariant="miniVariant"
      @toggleFixedFooter="toggleFixedFooter"
      @toggleClipped="toggleClipped"
      @toggleDrawer="toggleDrawer"
      @toggleMiniVariant="toggleMiniVariant"
      />

    <main>
      <router-view></router-view>
    </main>

    <!-- FooterBar component -->
    <footer-bar
      :fixedFooter="fixedFooter"
      />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import ToolBar from './components/ToolBar';
import FooterBar from './components/FooterBar';

export default {
  components: {
    'nav-bar': NavBar,
    'tool-bar': ToolBar,
    'footer-bar': FooterBar,
  },
  data() {
    return {
      years: [
        'Toutes',
        '2017',
        '2016',
        '2013',
      ],
      clipped: true,
      fixedFooter: false,
      right: true,
      drawer: true,
      rightDrawer: false,
      miniVariant: false,
    };
  },
  methods: {
    toggleClipped: function toggle() {
      this.clipped = !this.clipped;
    },
    toggleDrawer: function toggle() {
      this.drawer = !this.drawer;
    },
    toggleFixedFooter: function toggle() {
      this.fixedFooter = !this.fixedFooter;
    },
    toggleMiniVariant: function toggle() {
      this.miniVariant = !this.miniVariant;
    },
  },
};
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
