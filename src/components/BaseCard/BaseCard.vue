<template>
  <section class="base-card">
    <header class="base-card__header">
      <div class="base-card__user">
        <div class="base-card__avatar">
          <img
            :src="item.user.profile_image.small"
            class="base-card__image"
            alt=""
          >
        </div>
        <div class="base-card__user-info">
          <h3 class="base-card__user-name">
            {{ item.user.first_name }} {{ item.user.last_name }}
          </h3>
          <p class="base-card__user-alias">
            @{{ item.user.instagram_username }}
          </p>
        </div>
      </div>
    </header>
    <div class="base-card__body">
      <img
        :src="item.urls.regular"
        :alt="item.alt_description"
        class="base-card__image"
      >
    </div>
    <footer class="base-card__footer">
      <div class="base-card__views">
        <p class="base-card__views-count">
          {{ item.likes }}
        </p>
        <img
          src="@/assets/images/eye.svg"
          class="base-card__image"
          alt="eye icon"
        >
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.base-card {
  display: flex;
  flex-direction: column;
  &__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &__header {
    display: flex;
    padding: 10px;
  }
  &__user {
    display: inline-flex;
    align-items: center;
  }
  &__avatar {
    height: 30px;
    width: 30px;
    margin-right: 10px;
    .base-card__image {
      border-radius: 50%;
    }
  }
  &__user-name {
    color: $color-black;
  }
  &__user-alias,
  &__views-count {
    color: $color-grey;
  }
  &__user-name,
  &__views-count {
    font-weight: bold;
  }
  &__body {
    height: 230px;
    width: 320px;
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
    padding: 10px 10px 8px 10px;
    .base-card__image {
      width: 18px;
      height: 11.47px;
      margin-left: 5px;
    }
  }
  &__views {
    display: flex;
    align-items: center;
  }
  @media (max-width: $tablet) {
    &__body {
      width: 440px;
      height: 300px;
    }
    &__footer {
      padding-bottom: 6px;
    }
  }
  @media (max-width: $mobile) {
    &__body {
      width: 320px;
      height: 230px;
    }
    &__footer {
      padding-bottom: 0px;
    }
  }
}
</style>
