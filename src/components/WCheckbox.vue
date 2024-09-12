<template>
  <label :for="id" :class="[{ compact, disabled }, color]" class="w-checkbox">
    <input :id="id" v-model="value" type="checkbox" class="w-checkbox__hidden" :disabled="disabled" />
    <WIcon
      :icon="value ? (outlined ? 'checkbox-checked' : 'checkbox-checked-filled') : 'checkbox-unchecked'"
      :size="compact ? 16 : 20"
      class="w-checkbox__checkmark"
    />
    <slot name="label">
      <span class="w-checkbox__label">{{ label }}</span>
    </slot>
  </label>
</template>

<script setup lang="ts">
  import { WIcon } from '../components'
  import { type CheckboxProps, ColorScheme } from '../types'

  const value = defineModel<boolean>({ default: false })

  const { id, color = ColorScheme.PRIMARY } = defineProps<CheckboxProps>()
</script>

<style scoped lang="scss">
  .w-checkbox {
    @apply relative flex items-center cursor-pointer transition-all;
    user-select: none;

    &.compact {
      .w-checkbox__label {
        @apply ml-1 text-xs;
      }
    }

    &.disabled {
      @apply cursor-not-allowed opacity-50;
    }

    &.primary {
      .w-checkbox__checkmark {
        @apply text-primary-500;
      }
    }

    &.secondary {
      .w-checkbox__checkmark {
        @apply text-secondary-500;
      }
    }

    &.success {
      .w-checkbox__checkmark {
        @apply text-success-500;
      }
    }

    &.danger {
      .w-checkbox__checkmark {
        @apply text-danger-500;
      }
    }

    &.warning {
      .w-checkbox__checkmark {
        @apply text-warning-500;
      }
    }

    &.info {
      .w-checkbox__checkmark {
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
