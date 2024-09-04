<template>
  <div :class="[{ disabled }, size, labelPosition]" class="w-toggle" @click="toggle">
    <div :class="[{ 'small-round': smallRound, active: value }, color]" class="w-toggle__container">
      <div :class="{ active: value }" class="w-toggle__slider" />
    </div>
    <span v-if="label" class="w-toggle__label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
  import { ColorScheme, ToggleLabelPosition, type ToggleProps, ToggleSize } from '@/types'

  const value = defineModel('modelValue', {
    type: Boolean,
    required: true,
  })

  const props = withDefaults(defineProps<ToggleProps>(), {
    color: ColorScheme.PRIMARY,
    size: ToggleSize.MD,
    labelPosition: ToggleLabelPosition.RIGHT,
    disabled: false,
    smallRound: false,
    label: '',
  })

  const emit = defineEmits(['update:modelValue'])

  const toggle = () => {
    if (!props.disabled) {
      emit('update:modelValue', !value.value)
    }
  }
</script>

<style lang="scss" scoped>
  .w-toggle {
    @apply flex items-center cursor-pointer self-start;

    &.left {
      @apply flex-row-reverse;
    }

    &.sm {
      .w-toggle__container {
        @apply w-6 h-3;
      }

      .w-toggle__slider {
        @apply w-2 h-2;

        &.active {
          @apply left-3;
        }
      }

      .w-toggle__label {
        @apply ml-1 text-xs;
      }

      &.left {
        .w-toggle__label {
          @apply mr-1 ml-0;
        }
      }
    }

    &.md {
      .w-toggle__container {
        @apply w-8 h-4;
      }

      .w-toggle__slider {
        @apply w-3 h-3;

        &.active {
          @apply left-4;
        }
      }

      .w-toggle__label {
        @apply ml-2 text-sm;
      }

      &.left {
        .w-toggle__label {
          @apply mr-2 ml-0;
        }
      }
    }

    &.lg {
      .w-toggle__container {
        @apply w-10 h-5;
      }

      .w-toggle__slider {
        @apply w-4 h-4;

        &.active {
          @apply left-5;
        }
      }

      .w-toggle__label {
        @apply ml-3 text-lg;
      }

      &.left {
        .w-toggle__label {
          @apply mr-3 ml-0;
        }
      }
    }

    &.disabled {
      @apply opacity-25 cursor-not-allowed;
    }

    &__container {
      @apply relative flex items-center p-1 rounded-full border border-gray-200 transition-all;

      &.small-round {
        @apply rounded;

        .w-toggle__slider {
          @apply rounded;
        }
      }

      &.primary:hover {
        @apply border-primary-500/50;

        .w-toggle__slider {
          @apply bg-primary-500/50;
        }
      }

      &.secondary:hover {
        @apply border-secondary-500/50;

        .w-toggle__slider {
          @apply bg-secondary-500/50;
        }
      }

      &.success:hover {
        @apply border-success-500/50;

        .w-toggle__slider {
          @apply bg-success-500/50;
        }
      }

      &.warning:hover {
        @apply border-warning-500/50;

        .w-toggle__slider {
          @apply bg-warning-500/50;
        }
      }

      &.danger:hover {
        @apply border-danger-500/50;

        .w-toggle__slider {
          @apply bg-danger-500/50;
        }
      }

      &.info:hover {
        @apply border-info-500/50;

        .w-toggle__slider {
          @apply bg-info-500/50;
        }
      }

      &.active {
        &.primary {
          @apply border-primary-500;

          .w-toggle__slider {
            @apply bg-primary-500;
          }
        }

        &.secondary {
          @apply border-secondary-500;

          .w-toggle__slider {
            @apply bg-secondary-500;
          }
        }

        &.success {
          @apply border-success-500;

          .w-toggle__slider {
            @apply bg-success-500;
          }
        }

        &.warning {
          @apply border-warning-500;

          .w-toggle__slider {
            @apply bg-warning-500;
          }
        }

        &.danger {
          @apply border-danger-500;

          .w-toggle__slider {
            @apply bg-danger-500;
          }
        }

        &.info {
          @apply border-info-500;

          .w-toggle__slider {
            @apply bg-info-500;
          }
        }
      }
    }

    &__slider {
      @apply absolute left-0.5 w-3 h-3 rounded-full bg-gray-200 transition-all;
    }
  }
</style>
