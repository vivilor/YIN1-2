<template>
  <div id="app" class="flex">
    <div class="workfield flex flex--column flex--fill">
      <AppHeader/>
      <AppStepsBar/>
      <AppStepHeader/>
      <InteractiveField>
        <BoilerEquipment/>
        <Stove/>
        <Thermometer/>
      </InteractiveField>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppStepsBar from '@/components/AppStepsBar'
import AppStepHeader from '@/components/AppStepHeader'
import InteractiveField from '@/components/InteractiveField'
import BoilerEquipment from '@/components/BoilerEquipment'
import Stove from '@/components/Stove'
import Thermometer from '@/components/Thermometer'

export default {
  components: { Thermometer, Stove, BoilerEquipment, InteractiveField, AppStepHeader, AppStepsBar, AppHeader }
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
