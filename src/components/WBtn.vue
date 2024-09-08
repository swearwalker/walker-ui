<template>
  <component
    :is="component"
    :class="[{ circle, disabled, 'icon-only': icon }, color, variant, size]"
    :type="type"
    :to="to"
    :disabled="disabled"
    class="w-btn"
  >
    <WIcon v-if="icon" :size="iconSize" :icon="icon" class="w-btn__icon w-btn__icon--only" />
    <WIcon v-if="prefixIcon && !icon" :size="iconSize" :icon="prefixIcon" class="w-btn__icon w-btn__icon--prefix" />
    <slot v-if="!icon" name="prefix" />
    <div v-if="!icon" class="span w-btn__text">
      <slot name="default" />
    </div>
    <slot v-if="!icon" name="suffix" />
    <WIcon v-if="suffixIcon && !icon" :size="iconSize" :icon="suffixIcon" class="w-btn__icon w-btn__icon--suffix" />
  </component>
</template>

<script setup lang="ts">
  import { WIcon } from '../components'
  import { computed } from 'vue'
  import { type ButtonProps, ButtonSize, ButtonType, ButtonVariant, ColorScheme } from '../types'

  const {
    to,
    prefixIcon,
    suffixIcon,
    disabled = false,
    type = ButtonType.BUTTON,
    color = ColorScheme.PRIMARY,
    variant = ButtonVariant.DEFAULT,
    size = ButtonSize.MD,
    circle = false,
  } = defineProps<ButtonProps>()

  const component = computed(() => (to ? 'router-link' : 'button'))

  const iconSize = computed(() => {
    const sizesMap = {
      [ButtonSize.SM]: 12,
      [ButtonSize.MD]: 16,
      [ButtonSize.LG]: 20,
    }
    return sizesMap[size]
  })
</script>

<style scoped lang="scss">
  .w-btn {
    @apply transition-all flex items-center justify-center cursor-pointer relative rounded-md border;

    &.circle {
      @apply rounded-full;

      &.sm {
        @apply p-1;
      }

      &.md {
        @apply p-2;
      }

      &.lg {
        @apply p-3;
      }
    }

    &.icon-only {
      &.sm {
        @apply p-1;
      }

      &.md {
        @apply p-2;
      }

      &.lg {
        @apply p-3;
      }
    }

    &.disabled {
      * {
        @apply cursor-not-allowed;
      }

      &.default {
        &.primary {
          @apply bg-primary-200 border-primary-200 dark:bg-primary-950 text-primary-500 dark:border-primary-950;
        }

        &.secondary {
          @apply bg-secondary-200 border-secondary-200 dark:bg-secondary-950 text-secondary-500 dark:border-secondary-950;
        }

        &.success {
          @apply bg-success-200 border-success-200 dark:bg-success-950 text-success-500 dark:border-success-950;
        }

        &.warning {
          @apply bg-warning-200 border-warning-200 dark:bg-warning-950 text-warning-500 dark:border-warning-950;
        }

        &.danger {
          @apply bg-danger-200 border-danger-200 dark:bg-danger-950 text-danger-500 dark:border-danger-950;
        }

        &.info {
          @apply bg-info-200 border-info-200 dark:bg-info-950 text-info-500 dark:border-info-950;
        }
      }

      &.outlined {
        &.primary {
          @apply text-primary-200 border-primary-200;
        }

        &.secondary {
          @apply text-secondary-200 border-secondary-200;
        }

        &.success {
          @apply text-success-200 border-success-200;
        }

        &.warning {
          @apply text-warning-200 border-warning-200;
        }

        &.danger {
          @apply text-danger-200 border-danger-200;
        }

        &.info {
          @apply text-info-200 border-info-200;
        }
      }

      &.smooth {
        &.primary {
          @apply bg-primary-100/75 dark:bg-primary-950/75 text-primary-500 border-transparent;
        }

        &.secondary {
          @apply bg-secondary-100/75 dark:bg-secondary-950/75 text-secondary-500 border-transparent;
        }

        &.success {
          @apply bg-success-100/75 dark:bg-success-950/75 text-success-500 border-transparent;
        }

        &.warning {
          @apply bg-warning-100/75 dark:bg-warning-950/75 text-warning-500 border-transparent;
        }

        &.danger {
          @apply bg-danger-100/75 dark:bg-danger-950/75 text-danger-500 border-transparent;
        }

        &.info {
          @apply bg-info-100/75 dark:bg-info-950/75 text-info-500 border-transparent;
        }
      }

      &.clear {
        &.primary {
          @apply bg-primary-500/5 text-primary-900 border-transparent;
        }

        &.secondary {
          @apply bg-secondary-500/5 text-secondary-900 border-transparent;
        }

        &.success {
          @apply bg-success-500/5 text-success-900 border-transparent;
        }

        &.warning {
          @apply bg-warning-500/5 text-warning-900 border-transparent;
        }

        &.danger {
          @apply bg-danger-500/5 text-danger-900 border-transparent;
        }

        &.info {
          @apply bg-info-500/5 text-info-900 border-transparent;
        }
      }

      &.text {
        &.primary {
          @apply bg-transparent text-primary-900 border-transparent;
        }

        &.secondary {
          @apply bg-transparent text-secondary-900 border-transparent;
        }

        &.success {
          @apply bg-transparent text-success-900 border-transparent;
        }

        &.warning {
          @apply bg-transparent text-warning-900 border-transparent;
        }

        &.danger {
          @apply bg-transparent text-danger-900 border-transparent;
        }

        &.info {
          @apply bg-transparent text-info-900 border-transparent;
        }
      }
    }

    &.default:not(.disabled) {
      &.primary {
        @apply bg-primary-500 text-primary-50 border-primary-500;

        &:hover {
          @apply bg-primary-600 border-primary-600;
        }

        &:active {
          @apply bg-primary-700 border-primary-700;
        }
      }

      &.secondary {
        @apply bg-secondary-500 text-secondary-50 border-secondary-500;

        &:hover {
          @apply bg-secondary-600 border-secondary-600;
        }

        &:active {
          @apply bg-secondary-700 border-secondary-700;
        }
      }

      &.success {
        @apply bg-success-500 text-success-50 border-success-500;

        &:hover {
          @apply bg-success-600 border-success-600;
        }

        &:active {
          @apply bg-success-700 border-success-700;
        }
      }

      &.warning {
        @apply bg-warning-500 text-warning-50 border-warning-500;

        &:hover {
          @apply bg-warning-600 border-warning-600;
        }

        &:active {
          @apply bg-warning-700 border-warning-700;
        }
      }

      &.danger {
        @apply bg-danger-500 text-danger-50 border-danger-500;

        &:hover {
          @apply bg-danger-600 border-danger-600;
        }

        &:active {
          @apply bg-danger-700 border-danger-700;
        }
      }

      &.info {
        @apply bg-info-500 text-info-50 border-info-500;

        &:hover {
          @apply bg-info-600 border-info-600;
        }

        &:active {
          @apply bg-info-700 border-info-700;
        }
      }
    }

    &.outlined:not(.disabled) {
      @apply bg-transparent;
      &.primary {
        @apply text-primary-500 border-primary-500;

        &:hover {
          @apply text-primary-600 border-primary-600;
        }

        &:active {
          @apply text-primary-700 border-primary-700;
        }
      }

      &.secondary {
        @apply text-secondary-500 border-secondary-500;

        &:hover {
          @apply text-secondary-600 border-secondary-600;
        }

        &:active {
          @apply text-secondary-700 border-secondary-700;
        }
      }

      &.success {
        @apply text-success-500 border-success-500;

        &:hover {
          @apply text-success-600 border-success-600;
        }

        &:active {
          @apply text-success-700 border-success-700;
        }
      }

      &.warning {
        @apply text-warning-500 border-warning-500;

        &:hover {
          @apply text-warning-600 border-warning-600;
        }

        &:active {
          @apply text-warning-700 border-warning-700;
        }
      }

      &.danger {
        @apply text-danger-500 border-danger-500;

        &:hover {
          @apply text-danger-600 border-danger-600;
        }

        &:active {
          @apply text-danger-700 border-danger-700;
        }
      }

      &.info {
        @apply text-info-500 border-info-500;

        &:hover {
          @apply text-info-600 border-info-600;
        }

        &:active {
          @apply text-info-700 border-info-700;
        }
      }
    }

    &.smooth:not(.disabled) {
      &.primary {
        @apply bg-primary-700/75 text-primary-50 border-transparent;

        &:hover {
          @apply bg-primary-800/75 border-transparent;
        }

        &:active {
          @apply bg-primary-900/75 border-transparent;
        }
      }

      &.secondary {
        @apply bg-secondary-700/75 text-secondary-50 border-transparent;

        &:hover {
          @apply bg-secondary-800/75 border-transparent;
        }

        &:active {
          @apply bg-secondary-900/75 border-transparent;
        }
      }

      &.success {
        @apply bg-success-700/75 text-success-50 border-transparent;

        &:hover {
          @apply bg-success-800/75 border-transparent;
        }

        &:active {
          @apply bg-success-900/75 border-transparent;
        }
      }

      &.warning {
        @apply bg-warning-700/75 text-warning-50 border-transparent;

        &:hover {
          @apply bg-warning-800/75 border-transparent;
        }

        &:active {
          @apply bg-warning-900/75 border-transparent;
        }
      }

      &.danger {
        @apply bg-danger-700/75 text-danger-50 border-transparent;

        &:hover {
          @apply bg-danger-800/75 border-transparent;
        }

        &:active {
          @apply bg-danger-900/75 border-transparent;
        }
      }

      &.info {
        @apply bg-info-700/75 text-info-50 border-transparent;

        &:hover {
          @apply bg-info-800/75 border-transparent;
        }

        &:active {
          @apply bg-info-900/75 border-transparent;
        }
      }
    }

    &.clear:not(.disabled) {
      &.primary {
        @apply bg-transparent text-primary-500 border-transparent;

        &:hover {
          @apply bg-primary-600/75 text-primary-50 border-transparent;
        }

        &:active {
          @apply bg-primary-700/75 text-primary-50 border-transparent;
        }
      }

      &.secondary {
        @apply bg-transparent text-secondary-500 border-transparent;

        &:hover {
          @apply bg-secondary-600/75 text-secondary-50 border-transparent;
        }

        &:active {
          @apply bg-secondary-700/75 text-secondary-50 border-transparent;
        }
      }

      &.success {
        @apply bg-transparent text-success-500 border-transparent;

        &:hover {
          @apply bg-success-600/75 text-success-50 border-transparent;
        }

        &:active {
          @apply bg-success-700/75 text-success-50 border-transparent;
        }
      }

      &.warning {
        @apply bg-transparent text-warning-500 border-transparent;

        &:hover {
          @apply bg-warning-600/75 text-warning-50 border-transparent;
        }

        &:active {
          @apply bg-warning-700/75 text-warning-50 border-transparent;
        }
      }

      &.danger {
        @apply bg-transparent text-danger-500 border-transparent;

        &:hover {
          @apply bg-danger-600/75 text-danger-50 border-transparent;
        }

        &:active {
          @apply bg-danger-700/75 text-danger-50 border-transparent;
        }
      }

      &.info {
        @apply bg-transparent text-info-500 border-transparent;

        &:hover {
          @apply bg-info-600/75 text-info-50 border-transparent;
        }

        &:active {
          @apply bg-info-700/75 text-info-50 border-transparent;
        }
      }
    }

    &.text:not(.disabled) {
      &.primary {
        @apply bg-transparent text-primary-500 border-transparent;

        &:hover {
          @apply text-primary-400;
        }

        &:active {
          @apply text-primary-300;
        }
      }

      &.secondary {
        @apply bg-transparent text-secondary-500 border-transparent;

        &:hover {
          @apply text-secondary-400;
        }

        &:active {
          @apply text-secondary-300;
        }
      }

      &.success {
        @apply bg-transparent text-success-500 border-transparent;

        &:hover {
          @apply text-success-400;
        }

        &:active {
          @apply text-success-300;
        }
      }

      &.warning {
        @apply bg-transparent text-warning-500 border-transparent;

        &:hover {
          @apply text-warning-400;
        }

        &:active {
          @apply text-warning-300;
        }
      }

      &.danger {
        @apply bg-transparent text-danger-500 border-transparent;

        &:hover {
          @apply text-danger-400;
        }

        &:active {
          @apply text-danger-300;
        }
      }

      &.info {
        @apply bg-transparent text-info-500 border-transparent;

        &:hover {
          @apply text-info-400;
        }

        &:active {
          @apply text-info-300;
        }
      }
    }

    &.sm {
      @apply px-2 py-1 text-sm;
    }

    &.md {
      @apply px-3 py-2 text-base;
    }

    &.lg {
      @apply px-4 py-3 text-lg;
    }

    &__icon {
      &--prefix {
        @apply mr-2;
      }

      &--suffix {
        @apply ml-2;
      }
    }
  }
</style>
