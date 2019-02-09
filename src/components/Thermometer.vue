<template>
<div id="thermometer" class="flex flex--reverse flex--center-v">
  <span v-text="T"/>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Thermometer',
  computed: {
    ...mapState('equipment', {
      T: state => state.T.cur
    })
  }
}
</script>

<style lang="scss" scoped>
div#thermometer {
  top: 5px;
  left: 3px;
  background: white url('~@/assets/img/thermometer.png') no-repeat;
  width: 152px;
  height: 50px;
  position: absolute;
  & > span {
    text-align: center;
    flex: initial;
    padding: 8px 54px 0 0;
    font: 800 32px/50px 'Conqueror Sans', sans-serif;
    color: #c1272c;
  }
}
</style>
