<template>
  <div
    v-if="isLoading"
    class="loader"
  >
    <div class="loader__spinner" />
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.loader {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  &__spinner {
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid #3498db;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
