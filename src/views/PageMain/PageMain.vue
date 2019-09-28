<template>
  <base-page name="main">
    <footer class="page__pagination" />
  </base-page>
</template>

<script>
import BasePage from '@/components/BasePage/BasePage.vue';

export default {
  components: {
    BasePage,
  },
};
</script>

<style lang="scss">
.page--main {
  .page {
    &__pagination {
      position: fixed;
      bottom: 0;
      height: 60px;
      width: 100%;
      background-color: #000;
      opacity: 0.9;
    }
  }
}
</style>
