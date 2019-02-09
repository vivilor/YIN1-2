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
  flex: initial;
  width: inherit;
}
</style>
