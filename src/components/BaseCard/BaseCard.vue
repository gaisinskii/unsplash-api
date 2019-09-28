<template>
  <section class="base-card">
    <header class="base-card__header">
      <div class="base-card__avatar">
        <img
          src="https://image.shutterstock.com/image-photo/portrait-beautiful-smiling-man-showing-260nw-715845643.jpg"
          class="base-card__image"
          alt=""
        >
      </div>
      <div class="base-card__user">
        <h3 class="base-card__user-name">
          Jason Mowry
        </h3>
        <p class="base-card__user-alias">
          @jason_mowry_photo
        </p>
      </div>
    </header>
    <div class="base-card__body">
      <img
        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/F8C9/production/_106398636_mediaitem106398635.jpg"
        class="base-card__image"
        alt=""
      >
    </div>
    <footer class="base-card__footer">
      <div class="base-card__views">
        <p class="base-card__views-count">
          51 200
        </p>
        <img
          src="@/assets/images/eye.svg"
          class="base-card__image"
          alt=""
        >
      </div>
    </footer>
  </section>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.base-card {
  display: flex;
  flex-direction: column;
  // height: 312px;
  &__image {
    height: 100%;
    width: 100%;
  }
  &__header {
    display: flex;
    align-items: center;
    padding: 10px;
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
}
</style>
