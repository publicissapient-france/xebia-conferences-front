<template>
  <v-footer :fixed="fixedFooter">
    <span>&copy; Alexis "Horgix" Chotard 2017</span>
  </v-footer>
</template>

<script>
export default {
  props: [
    'fixedFooter',
  ],
};
</script>
