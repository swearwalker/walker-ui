<template>
  <div class="w-line-loader">
    <div :class="[color, variant]" class="w-line-loader__line"></div>
  </div>
</template>

<script setup lang="ts">
  import { ColorScheme, type LineLoaderProps, LineLoaderVariant } from '../../types'

  const { color = ColorScheme.PRIMARY, variant = LineLoaderVariant.LINE_LOOP } = defineProps<LineLoaderProps>()
</script>

<style scoped lang="scss">
  .w-line-loader {
    @apply flex items-center justify-center h-0.5 w-full relative overflow-hidden;

    &__line {
      @apply h-full w-full absolute top-0 left-0;

      &.line-scale {
        animation: line-scale 2.5s infinite;
      }

      &.line-slide-away {
        animation: line-slide-away 2.5s infinite;
      }

      &.line-loop {
        animation: line-loop 2.5s infinite;
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

  @keyframes line-scale {
    0% {
      transform: scaleX(0);
    }
    50% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }

  @keyframes line-slide-away {
    0% {
      transform: translate(-100%, 0);
    }
    50% {
      transform: translate(100%, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }

  @keyframes line-loop {
    0% {
      transform: translateX(0%);

      @apply w-0;
    }
    7% {
      transform: translateX(0%);

      @apply w-3/12;
    }
    40% {
      @apply w-3/5;
    }
    50% {
      transform: translateX(85%);
    }

    75% {
      @apply w-full;
    }
    100% {
      transform: translateX(100%);
    }
  }
</style>
