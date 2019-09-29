<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('computeTotalPages');
    this.$store.dispatch('fetchCurrentPage', 1);
  },
};
</script>

<style lang="scss">
</style>
