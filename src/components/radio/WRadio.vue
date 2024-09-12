<template>
  <label :for="id.toString()" :class="[{ compact }, color]" class="w-radio">
    <input :id="id.toString()" v-model="model" type="radio" :value="value" class="w-radio__hidden" />
    <WIcon :icon="model === value ? 'radio-checked' : 'radio'" :size="compact ? 16 : 20" class="w-radio__checkmark" />
    <slot name="label">
      <span class="w-radio__label">{{ label }}</span>
    </slot>
  </label>
</template>

<script setup lang="ts">
  import { WIcon } from '../../components'
  import { ColorScheme, type RadioProps } from '../../types'

  const model = defineModel<string | number>({ default: '' })

  const { id, color = ColorScheme.PRIMARY } = defineProps<RadioProps>()
</script>

<style scoped lang="scss">
  .w-radio {
    @apply relative flex items-center cursor-pointer;
    user-select: none;

    &.compact {
      .w-radio__label {
        @apply ml-1 text-xs;
      }
    }

    &.primary {
      .w-radio__checkmark {
        @apply text-primary-500;
      }
    }

    &.secondary {
      .w-radio__checkmark {
        @apply text-secondary-500;
      }
    }

    &.success {
      .w-radio__checkmark {
        @apply text-success-500;
      }
    }

    &.danger {
      .w-radio__checkmark {
        @apply text-danger-500;
      }
    }

    &.warning {
      .w-radio__checkmark {
        @apply text-warning-500;
      }
    }

    &.info {
      .w-radio__checkmark {
        @apply text-info-500;
      }
    }

    &__hidden {
      @apply absolute opacity-0 -z-10;
    }

    &__label {
      @apply ml-2 text-sm;
    }
  }
</style>
