<template>
  <div class="w-dots-loader">
    <div v-for="dot in [1, 2, 3]" :key="dot" :class="[color, variant]" class="w-dots-loader__dot"></div>
  </div>
</template>

<script setup lang="ts">
  import { ColorScheme, type DotsLoaderProps, DotsLoaderVariant } from '../../types'

  const { color = ColorScheme.PRIMARY, variant = DotsLoaderVariant.JUMPING_DOTS } = defineProps<DotsLoaderProps>()
</script>

<style scoped lang="scss">
  .w-dots-loader {
    @apply flex items-center justify-center gap-x-2;

    &__dot {
      @apply w-2 h-2 rounded-full inline-block;

      &.jumping-dots:first-of-type {
        animation: jumping-dots 0.5s infinite alternate;
      }

      &.jumping-dots:nth-of-type(2) {
        animation: jumping-dots 0.5s infinite alternate 0.25s;
      }

      &.jumping-dots:last-of-type {
        animation: jumping-dots 0.5s infinite alternate 0.5s;
      }

      &.scale-dots:first-of-type {
        animation: scale-dots 0.5s infinite alternate;
      }

      &.scale-dots:nth-of-type(2) {
        animation: scale-dots 0.5s infinite alternate 0.25s;
      }

      &.scale-dots:last-of-type {
        animation: scale-dots 0.5s infinite alternate 0.5s;
      }

      &.scale-less-dots:first-of-type {
        animation: scale-less-dots 0.5s infinite alternate;
      }

      &.scale-less-dots:nth-of-type(2) {
        animation: scale-less-dots 0.5s infinite alternate 0.25s;
      }

      &.scale-less-dots:last-of-type {
        animation: scale-less-dots 0.5s infinite alternate 0.5s;
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

  @keyframes jumping-dots {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-10px);

      @apply opacity-0;
    }
  }

  @keyframes scale-dots {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes scale-less-dots {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
