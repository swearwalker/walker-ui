<template>
  <div class="w-icon" :style="iconStyle">
    <Icon :class="`w-icon__${icon}`" :width="size" :height="size" viewBox="0 0 24 24" />
  </div>
</template>

<script lang="ts" setup>
  import { shallowRef, computed, watch, defineAsyncComponent } from 'vue'
  import type { IconProps } from '../types'

  const { icon, size = 16 } = defineProps<IconProps>()

  const Icon = shallowRef<any>()

  const iconStyle = computed(() => ({
    width: `${size}px`,
    height: `${size}px`,
  }))

  watch(
    () => icon,
    () => (Icon.value = defineAsyncComponent(() => import(`../assets/icons/${icon}.svg`))),
    { immediate: true },
  )
</script>

<style lang="scss">
  .w-icon {
    @apply inline-flex items-center justify-center;
  }
</style>
