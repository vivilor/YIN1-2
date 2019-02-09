<script>
export default {
  name: 'InteractiveField',
  render (h) {
    return h(
      'section',
      this.$slots.default
    )
  }
}
</script>

<style lang="scss" scoped>
section {
  flex: auto;
  width: inherit;
  position: relative;
}
</style>
