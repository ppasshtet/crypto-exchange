<template>
  <div class="button text" @click="$emit('click')">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    font-weight: 700;
    font-size: 14px;
    background-color: $brand;
    border-radius: 8px;
    cursor: pointer;
    text-transform: uppercase;
    border: 1px solid $brand;
    transition: all 0.2s ease;
    user-select: none;
    box-sizing: border-box;
    color: $total-white !important;

    &:hover {
      background-color: rgba($brand, 0.9);
    }

    &:active {
      background-color: rgba($brand, 0.8);
    }
  }
</style>
