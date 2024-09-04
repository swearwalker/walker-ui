<template>
  <ul class="w-tabs" :class="[{ vertical: direction === 'vertical', compact }, position]">
    <template v-for="tab in tabs" :key="tab.value">
      <li
        v-if="!tab.hidden"
        class="w-tabs__item"
        :class="[
          {
            'w-tabs__item-active': value === String(tab[tabValue]),
            disabled: !!tab.disabled,
            'flex-1 text-center': flexible,
          },
          color,
        ]"
        @click="selectTab(tab[tabValue], !!tab.disabled)"
      >
        <template v-if="$slots.tab">
          <slot name="tab" :tab="tab" />
        </template>
        <span v-else class="w-tabs__label">{{ tab[tabLabel] }}</span>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
  import { ColorScheme, Direction, TabsPosition, type TabsProps } from '@/types'
  import type { PropType } from 'vue'

  const value = defineModel('modelValue', {
    type: [String, Number] as PropType<string | number>,
    required: true,
  })

  withDefaults(defineProps<TabsProps>(), {
    tabLabel: 'label',
    tabValue: 'value',
    direction: Direction.HORIZONTAL,
    color: ColorScheme.PRIMARY,
    position: TabsPosition.LEFT,
    compact: false,
    flexible: false,
  })

  const emit = defineEmits(['update:modelValue'])

  const selectTab = (value: Record<string, number>, disabled: boolean) => {
    if (!disabled) {
      emit('update:modelValue', value)
    }
  }
</script>

<style lang="scss" scoped>
  .w-tabs {
    @apply w-full flex items-center border-b border-gray-200 dark:border-gray-700;

    &.right {
      @apply justify-end;
    }

    &.vertical {
      @apply flex-col items-start border-b-0 border-l;

      &.right {
        @apply items-end border-l-0 border-r;

        .w-tabs__item {
          @apply border-l-0 border-r-2 rounded-l rounded-r-none;
        }
      }

      .w-tabs__item {
        @apply border-b-0 border-l-2 rounded-r rounded-t-none;
      }
    }

    &.compact {
      .w-tabs__item {
        @apply px-2 py-1 text-xs border-b;
      }

      &.vertical {
        .w-tabs__item {
          @apply px-1 py-2 text-xs border-l border-b-0;
        }
      }
    }

    &__item {
      @apply cursor-pointer px-4 py-2 transition-all text-sm rounded-t border-b-2 border-transparent;

      &.disabled {
        @apply cursor-not-allowed opacity-25;
      }

      &:hover:not(.disabled) {
        &.primary {
          @apply text-primary-500 border-primary-500/50;
        }

        &.secondary {
          @apply text-secondary-500 border-secondary-500/50;
        }

        &.success {
          @apply text-success-500 border-success-500/50;
        }

        &.warning {
          @apply text-warning-500 border-warning-500/50;
        }

        &.danger {
          @apply text-danger-500 border-danger-500/50;
        }

        &.info {
          @apply text-info-500 border-info-500/50;
        }
      }

      &-active {
        @apply text-primary-500;

        &.primary {
          @apply text-primary-500 border-primary-500;
        }

        &.secondary {
          @apply text-secondary-500 border-secondary-500;
        }

        &.success {
          @apply text-success-500 border-success-500;
        }

        &.warning {
          @apply text-warning-500 border-warning-500;
        }

        &.danger {
          @apply text-danger-500 border-danger-500;
        }

        &.info {
          @apply text-info-500 border-info-500;
        }
      }
    }
  }
</style>
