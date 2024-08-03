<script lang="ts">
// @es
import type { Fancybox as FancyboxType } from '@fancyapps/ui/types'
import * as Fancyapps from '@fancyapps/ui'
const Fancybox: typeof FancyboxType = Fancyapps.Fancybox

export default {
  props: {
    options: Object,
  },
  mounted() {
    Fancybox.bind(this.$refs.container, '[data-fancybox]', {
      ...(this.options || {}),
    })
  },
  updated() {
    Fancybox.unbind(this.$refs.container)
    Fancybox.close()

    Fancybox.bind(this.$refs.container, '[data-fancybox]', {
      ...(this.options || {}),
      zx,
    })
  },
  unmounted() {
    Fancybox.destroy()
  },
}
</script>

<template>
  <div ref="container" class="hover:cursor-pointer">
    <slot></slot>
  </div>
</template>
