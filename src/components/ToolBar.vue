<template>
    <v-toolbar fixed>
      <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
      <v-btn
        icon
        @click.stop="toggleMiniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="toggleClipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="toggleFixedFooter"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <!-- <v-toolbar-title v-text="title + ' - ' + years[$route.params.years].title"></v-toolbar-title>-->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <!--<v-spacer></v-spacer>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>-->
    </v-toolbar>
</template>

<script>
export default {
  props: [
    'years',
    'miniVariant',
    'clipped',
    'drawer',
  ],
  data() {
    return {
      title: 'Xebia - Conférences',
    };
  },
  methods: {
    toggleClipped: function toggle() {
      this.$emit('toggleClipped');
    },
    toggleDrawer: function toggle() {
      this.$emit('toggleDrawer');
    },
    toggleFixedFooter: function toggle() {
      this.$emit('toggleFixedFooter');
    },
    toggleMiniVariant: function toggle() {
      this.$emit('toggleMiniVariant');
    },
  },
};
</script>
