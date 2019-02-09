<template>
<div
  id="stove"
  class="flex flex--column flex--center-v">
  <div :class="{ working: isStoveOn }"/>
  <ul class="flex flex--center-v flex--spaced">
    <li
      v-for="i in stoveModesTotal"
      v-text="i - 1"
      :key="i"
      class="clickable"
      :class="{ working: (i - 1) === stoveMode }"
      @click="onStoveButtonClick(i - 1)"/>
  </ul>
</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Stove',
  computed: {
    ...mapState('equipment', [
      'stoveMode',
      'tickDelays'
    ]),
    ...mapGetters('equipment', [
      'isStoveOn',
      'stoveModesTotal'
    ])
  },
  methods: {
    ...mapMutations('equipment', [
      'SET_STOVE_MODE'
    ]),
    ...mapActions('equipment', [
      'changeT'
    ]),
    onStoveButtonClick (mode) {
      this.SET_STOVE_MODE(mode)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/font";
@import "~@/assets/styles/common";

$stove-width: 143px;
$line-width: 3px;
$border-width: 4px;
$side-padding: 8px;

/*
 TODO: Reoragnize colors
 */

div#stove {
  position: absolute;
  top: 259px;
  left: 105px;
  width: $stove-width;
  & > div {
    width: 72px;
    height: 0;
    border: $line-width #4ecdc4 solid;
    border-radius: $line-width;
    transition: .6s ease-in-out .3s;
    margin-bottom: 1px;

    &.working {
      border-color: #c1272c;
    }
  }
  & > ul {
    border-radius: $border-width * 2;
    border: $border-width #4ecdc4 solid;
    width: $stove-width - $border-width * 2 - $side-padding * 2;
    height: 48px;
    padding: 0 $side-padding;

    & > li {
      text-align: center;
      width: 21px;
      height: 25px;
      font: bold 18px/30px 'Conqueror Sans', sans-serif;
      border-radius: $border-width;
      background-color: #b2b3b3;
      color: white;

      &.working {
        background-color: #c1272c;
      }
    }
  }
}

</style>
