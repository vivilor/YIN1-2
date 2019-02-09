<script>
import TextContent from '@/assets/content'

export default {
  name: 'AppHeader',
  functional: true,
  render: h => h('h1', TextContent.header)
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/common";

h1 {
  font: 23px/32pt "Conqueror Sans", sans-serif;
  font-weight: 800;
  color: $text-clr;
}
</style>
