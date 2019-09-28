<template>
  <base-page name="main">
    <base-card />
    <footer class="page__pagination" />
  </base-page>
</template>

<script>
import BasePage from '@/components/BasePage/BasePage.vue';
import BaseCard from '@/components/BaseCard/BaseCard.vue';

export default {
  components: {
    BasePage,
    BaseCard,
  },
};
</script>

<style lang="scss">
.page--main {
  display: flex;
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
