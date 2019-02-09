<template>
<ul class="flex">
  <li
    class="flex flex--center-vh"
    v-for="stepIndex in stepsTotal"
    :key="stepIndex">
    <img
      v-if="stepIndex < currentStep + 1"
      src="../assets/img/Done.png">
    <span
      v-else
      v-text="stepIndex"/>
  </li>
</ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppStepsBar',
  computed: {
    ...mapState('steps', {
      currentStep: state => state.current,
      stepsTotal: state => state.total
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/common";

$border-radius: 18px;
$border-width: 1px;
$circle-diameter: $border-radius * 2 - $border-width * 2;

ul {
  & > li {
    width: $circle-diameter;
    height: $circle-diameter;
    border-radius: $border-radius;
    border: $border-width solid #c6c6c6;
    &:not(:last-child) {
      margin-right: 19px;
    }
    & > span {
      color: $main-clr;
      font: bold 16px/#{$circle-diameter} 'Open Sans', sans-serif;
    }
  }
}
</style>
