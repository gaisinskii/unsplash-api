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
      <paginate
        :page-count="totalPages"
        :page-range="3"
        :margin-pages="1"
        :click-handler="paginate"
        :prev-text="''"
        :next-text="''"
        :break-view-class="'page__pagination-item--truncate'"
        :active-class="'page__pagination-item--active'"
        :page-link-class="'page__pagination-link'"
        :disabled-class="'page__pagination-item--disabled'"
        :container-class="'page__pagination'"
        :page-class="'page__pagination-item'"
      />
    </footer>
  </base-page>
</template>

<script>
import { mapState } from 'vuex';
import Paginate from 'vuejs-paginate';
import BasePage from '@/components/BasePage/BasePage.vue';
import BaseCard from '@/components/BaseCard/BaseCard.vue';

export default {
  components: {
    BasePage,
    BaseCard,
    Paginate,
  },
  computed: {
    ...mapState(['currentPageData', 'totalPages']),
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
      color: #fff;
      list-style: none;
    }
    &__pagination-item {
      display: flex;
      align-items: center;
      &--active {
        .page__pagination-link {
          font-size: 18px;
          font-weight: bold;
        }
      }
      &--truncate {
        &:hover {
          .page__pagination-link {
            cursor: default;
          }
        }
      }
      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
    &__pagination-link {
      font-size: 14px;
      outline: none;
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
