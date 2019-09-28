<template>
  <base-page name="main">
    <h1 class="page__test1">
      main page is here!
    </h1>
    <span class="page__test2">hahaha</span>
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
    &__test1 {
      font-size: $test1;
    }
    &__test2 {
      color: $test2;
    }
  }
}
</style>
