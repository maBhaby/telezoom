<template>
  <div class="main-layout">
    <slot name="header" />
    <main class="main-layout__main">
      <slot>Layout children</slot>
    </main>
    <slot name="footer" />
  </div>
</template>
<style scoped lang="scss">
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--main-bg-color);
  

  &__main {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
</style>
