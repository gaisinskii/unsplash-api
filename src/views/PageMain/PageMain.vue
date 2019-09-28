<template>
  <base-page name="main">
    <div class="page__card-list">
      <base-card
        v-for="(item, index) in 10"
        :key="index"
      />
    </div>

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
  justify-content: center;
  .page {
    &__card-list {
      display: flex;
      max-width: 660px;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__pagination {
      position: fixed;
      bottom: 0;
      height: 60px;
      width: 100%;
      background-color: #000;
      opacity: 0.9;
    }
  }
  @media (max-width: $tablet) {
    .page {
      &__card-list {
        justify-content: center;
        max-width: unset;
      }
    }
  }
}
</style>
