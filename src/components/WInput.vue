<template>
  <div :class="{ compact, error: errorsText.length || error, success, warning, readonly, disabled }" class="w-input">
    <div class="w-input__wrapper">
      <span class="w-input__label">{{ label }}</span>
      <div class="w-input__content">
        <WIcon v-if="prefixIcon" :icon="prefixIcon" class="w-input__icon w-input__icon--prefix" @click="prefix" />
        <slot name="prefix" />
        <input
          v-model="value"
          class="w-input__field"
          :type="password && !showPassword ? 'password' : 'text'"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
        />
        <WIcon v-if="clearable && value" icon="dismiss" class="w-input__icon w-input__icon--clear" @click="clear" />
        <WIcon
          v-if="password && value"
          :icon="showPassword ? 'show' : 'hide'"
          class="w-input__icon w-input__icon--password"
          @click="togglePassword"
        />
        <slot name="suffix" />
        <WIcon v-if="suffixIcon" :icon="suffixIcon" class="w-input__icon w-input__icon--suffix" @click="suffix" />
      </div>
    </div>
    <slot v-if="helpText" name="help" />
    <span v-if="helpText && !$slots.help" class="w-input__help">{{ helpText }}</span>
    <slot v-if="errorsText.length" name="error" />
    <ul v-if="errorsText.length && !$slots.error" class="w-input__errors">
      <li v-for="(errorText, index) in errorsText" :key="index" class="w-input__error">{{ errorText }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { WIcon } from '../components'
  import type { InputProps } from '@/types'
  import { computed, ref } from 'vue'

  const value = defineModel<string | number>({ required: true })

  const {
    label,
    helpText,
    prefixIcon,
    suffixIcon,
    clearable,
    errors,
    compact = false,
    disabled = false,
    readonly = false,
    success = false,
    error = false,
    warning = false,
    placeholder,
    password = false,
  } = defineProps<InputProps>()

  const emit = defineEmits(['prefix', 'suffix', 'clear', 'input', 'focus', 'blur', 'toggle-password'])

  const showPassword = ref(false)

  const errorsText = computed(() => {
    if (typeof errors === 'string') return [errors]

    return errors || []
  })

  const clear = () => {
    emit('clear')
    value.value = ''
  }

  const prefix = () => emit('prefix')

  const suffix = () => emit('suffix')

  const onInput = (event: Event) => {
    emit('input', (event.target as HTMLInputElement).value)
  }

  const onFocus = () => emit('focus')

  const onBlur = () => emit('blur')

  const togglePassword = () => {
    showPassword.value = !showPassword.value
    emit('toggle-password', showPassword.value)
  }
</script>

<style scoped lang="scss">
  .w-input {
    &.error {
      @apply text-danger-500;

      .w-input__content {
        @apply border-danger-500/50;

        &:focus-within {
          @apply border-danger-500;
        }
      }

      .w-input__help {
        @apply text-gray-700 dark:text-gray-200;
      }
    }

    &.success {
      @apply text-success-500;

      .w-input__content {
        @apply border-success-500/50;

        &:focus-within {
          @apply border-success-500;
        }
      }
    }

    &.warning {
      @apply text-warning-500;

      .w-input__content {
        @apply border-warning-500/50;

        &:focus-within {
          @apply border-warning-500;
        }
      }
    }

    &.disabled {
      @apply opacity-50;

      * {
        @apply cursor-not-allowed;
      }
    }

    &:focus-within {
      .w-input__label,
      .w-input__help,
      .w-input__errors {
        @apply opacity-100;
      }
    }

    &.compact {
      .w-input__content {
        @apply px-2 py-1;
      }

      .w-input__field {
        @apply text-sm;
      }
    }

    &__label {
      @apply text-sm opacity-75 transition-all;
    }

    &__content {
      @apply flex items-center rounded-md border border-gray-200 dark:border-gray-700 bg-transparent px-3 py-2 transition-all;

      &:focus-within {
        @apply border-gray-400 dark:border-gray-500;
      }
    }

    &__icon {
      &--prefix {
        @apply mr-2;
      }

      &--suffix {
        @apply ml-2;
      }

      &--clear {
        @apply cursor-pointer ml-2 transition-all text-danger-500;
      }

      &--password {
        @apply cursor-pointer ml-2 transition-all;
      }
    }

    &__field {
      @apply w-full bg-transparent outline-none;
    }

    &__help {
      @apply text-sm mt-1 opacity-75 transition-all;
    }

    &__errors {
      @apply mt-1 text-danger-500 text-sm opacity-75 transition-all;
    }
  }
</style>
