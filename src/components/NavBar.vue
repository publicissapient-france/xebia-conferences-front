<template>
  <v-navigation-drawer
    persistent
    :mini-variant="miniVariant"
    :clipped="clipped"
    v-model="drawer"
    enable-resize-watcher
  >
    <v-list>
      <v-list-tile
        value="true"
        v-for="year in years"
        :key="year"
        router
        :to="'/'"
      >
        <!--<v-list-tile-action>
          <v-icon v-html="year.icon"></v-icon>
        </v-list-tile-action>-->
        <v-list-tile-content>
          <v-list-tile-title v-text="year"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: [
    'years',
    'miniVariant',
    'clipped',
    'drawer',
  ],
};
</script>
