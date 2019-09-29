<template>
  <base-page name="main">
    <div class="page__card-list">
      <base-card
        v-for="(item, index) in currentPageData"
        :key="index"
        :item="item"
      />
    </div>

    <footer class="page__footer">
      <div class="page__pagination">
        test
      </div>
    </footer>
  </base-page>
</template>

<script>
import { mapState } from 'vuex';
import BasePage from '@/components/BasePage/BasePage.vue';
import BaseCard from '@/components/BaseCard/BaseCard.vue';

export default {
  components: {
    BasePage,
    BaseCard,
  },
  computed: {
    ...mapState(['currentPageData', 'totalPages', 'currentPage']),
  },
  methods: {
    paginate(page) {
      this.$store.dispatch('fetchCurrentPage', page);
    },
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
    &__footer {
      display: flex;
      position: fixed;
      justify-content: center;
      bottom: 0;
      height: 60px;
      width: 100%;
      background-color: #000;
      opacity: 0.9;
    }
    &__pagination {
      display: flex;
      height: 100%;
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
