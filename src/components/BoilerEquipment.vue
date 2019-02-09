<template>
  <div>
    <img
      id="equipment"
      src="../assets/img/boiler-equipment.png"
      alt="boiler-equipment">
    <img
      id="drop"
      src="../assets/img/drop.png"
      alt="drop">
  </div>
</template>

<script>
export default {
  name: 'BoilerEquipment'
}
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  width: 100%;
  height: 100%;
  & > #equipment {
    top: 8px;
    left: 134px;
    position: absolute;
  }
  & > #drop {
    top: 199px;
    left: 426px;
    position: absolute;
  }
}
</style>
