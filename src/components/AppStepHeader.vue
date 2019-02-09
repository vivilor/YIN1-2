<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppStepHeader',
  computed: {
    ...mapGetters('steps', [
      'stepHeader'
    ])
  },
  render (h) {
    // noinspection JSUnresolvedFunction
    return h(
      'h2',
      {
        class: [
          'no-overflow'
        ]
      },
      Array.isArray(this.stepHeader)
        ? Array.from(this.stepHeader, line => h('div', line))
        : this.stepHeader
    )
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/font";
@import "~@/assets/styles/common";

h2 {
  margin-top: 9px;
  font: 22px/28px 'Conqueror Sans', sans-serif;
  color: $text-clr;
  min-height: 56px;
  max-height: 56px;
}
</style>
