<template>
  <div id="app" class="flex">
    <div class="workfield flex flex__column flex__fill">
      <AppHeader/>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  components: { AppHeader }
}
</script>

<style lang="scss">
@import "assets/styles/font";
@import "assets/styles/common";

#app {
  width: $app-width;
  height: $app-height;
  background: white;

  & > .workfield {
    position: relative;
    margin: $top-margin $side-margin $bottom-margin;
  }
}
</style>
