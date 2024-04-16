<template>
  <footer class="footer">
    <div>
      <slot name="left-side"></slot>
    </div>
    <div>
      <slot name="right-side"></slot>
    </div>
  </footer>

</template>
<style scoped lang="scss">
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 20px;
  }
</style>
