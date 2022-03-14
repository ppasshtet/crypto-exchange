<template>
    <div class="default-layout">
        <Header class="default-layout__header" />
        <div class="default-layout__main">
            <Menu class="defaul-layout__menu"/>
            <div class="default-layout__content">
            <Nuxt />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .default-layout {
    min-height: 100vh;
    background-color: $white;
    * {
      box-sizing: border-box;
      outline: none;
      text-decoration: none;
    }
  }
  .default-layout__main {
      display: flex;
  }
  .default-layout__menu {
    flex-shrink: 0;
    display: flex;
  }

  .default-layout__content {
      padding: 32px;
  }
</style>