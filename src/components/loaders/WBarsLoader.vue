<template>
  <div class="w-bars-loader">
    <div v-for="bar in [1, 2, 3]" :key="bar" :class="[color, variant]" class="w-bars-loader__bar"></div>
  </div>
</template>

<script setup lang="ts">
  import { type BarsLoaderProps, BarsLoaderVariant, ColorScheme } from '../../types'

  const { color = ColorScheme.PRIMARY, variant = BarsLoaderVariant.MOVE_CENTER_BARS } = defineProps<BarsLoaderProps>()
</script>

<style scoped lang="scss">
  .w-bars-loader {
    @apply flex items-center justify-center gap-x-2 h-6;

    &__bar {
      @apply w-0.5 h-6;

      &.move-right-bars:first-of-type {
        animation: move-bars 0.5s infinite alternate;
      }

      &.move-right-bars:nth-of-type(2) {
        animation: move-bars 0.5s infinite alternate 0.25s;
      }

      &.move-right-bars:last-of-type {
        animation: move-bars 0.5s infinite alternate 0.5s;
      }

      &.move-center-bars:first-of-type {
        animation: move-bars 0.5s infinite alternate;
      }

      &.move-center-bars:nth-of-type(2) {
        animation: move-bars 0.5s infinite alternate 0.5s;
      }

      &.move-center-bars:last-of-type {
        animation: move-bars 0.5s infinite alternate;
      }

      &.primary {
        @apply bg-primary-500;
      }

      &.secondary {
        @apply bg-secondary-500;
      }

      &.success {
        @apply bg-success-500;
      }

      &.warning {
        @apply bg-warning-500;
      }

      &.danger {
        @apply bg-danger-500;
      }

      &.info {
        @apply bg-info-500;
      }
    }
  }

  @keyframes move-bars {
    0% {
      @apply h-2;
    }
    100% {
      @apply h-6;
    }
  }
</style>
