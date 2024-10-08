<template>
  <section class="section icons-section">
    <div class="section__wrapper icons-section__wrapper">
      <div class="icons-section__content">
        <span class="icons-section__label">Search by name</span>
        <input v-model="search" type="text" class="icons-section__search" />
      </div>
      <div class="icons-section__content">
        <span class="icons-section__label">Change icon size(You can use any size)</span>
        <select v-model="selectedSize" class="icons-section__select">
          <option v-for="size in iconSizes" :key="size" :value="size">{{ size }}</option>
        </select>
      </div>
      <div class="icons-section__content">
        <span class="icons-section__label">Change color</span>
        <select v-model="selectedColor" class="icons-section__select">
          <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
        </select>
      </div>
    </div>
    <TransitionGroup
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOut"
    >
      <template v-for="icon in filteredIcons" :key="icon">
        <div class="icons-section__card">
          <div
            :class="[{ selected: selectedIcon === icon }, selectedColor]"
            class="icons-section__wrap"
            @click="copyAndSelect(icon)"
          >
            <WIcon class="icons-section__icon" :icon="icon" :size="selectedSize" />
            <span class="icons-section__label">{{ icon }}</span>
          </div>
        </div>
      </template>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
  import { WIcon } from '../../components'
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
  import { ColorScheme } from '../../types'

  const search = ref('')
  const selectedIcon = ref<string>('')
  const selectedSize = ref<number>(24)
  const selectedColor = ref<string>(ColorScheme.PRIMARY)
  const icons = ref<string[]>([
    'add',
    'add-circle',
    'arrow-next',
    'arrow-prev',
    'block',
    'bookmark',
    'caret-down',
    'caret-left',
    'caret-right',
    'caret-up',
    'check',
    'check-circle',
    'checkbox-checked',
    'checkbox-checked-filled',
    'checkbox-indeterminate',
    'checkbox-unchecked',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'clipboard',
    'clock',
    'copy',
    'delete',
    'dismiss',
    'dismiss-circle',
    'edit',
    'error-circle',
    'filter',
    'full-max',
    'full-min',
    'hide',
    'history',
    'image',
    'info-circle',
    'key',
    'like',
    'link',
    'minus',
    'minus-circle',
    'more-horizontal',
    'more-vertical',
    'open',
    'options',
    'pane-close',
    'pane-open',
    'password',
    'pin',
    'play',
    'play-circle',
    'power',
    'question',
    'question-circle',
    'radio',
    'radio-checked',
    'save',
    'search',
    'settings',
    'share',
    'show',
    'sort',
    'star',
    'tag',
    'user',
    'users',
    'warning',
  ])
  const iconSizes = ref<number[]>([12, 16, 20, 24, 32, 40, 48])
  const colors = [
    ColorScheme.PRIMARY,
    ColorScheme.SECONDARY,
    ColorScheme.SUCCESS,
    ColorScheme.DANGER,
    ColorScheme.WARNING,
    ColorScheme.INFO,
  ]

  onMounted(() => {
    window.addEventListener('keydown', handleEscKey)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleEscKey)
  })

  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      selectedIcon.value = ''
    }
  }

  const copyAndSelect = (name: string) => {
    selectedIcon.value = name
    navigator.clipboard.writeText(name)
  }

  const filteredIcons = computed(() => {
    return icons.value.filter((icon) => icon.includes(search.value))
  })
</script>

<style scoped lang="scss">
  .icons-section {
    @apply flex flex-wrap;

    &__wrapper {
      @apply w-full flex-row mb-4 gap-x-8;
    }

    &__content {
      @apply flex items-center gap-x-4;
    }

    &__search {
      @apply p-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-500 outline-none bg-transparent transition-all;

      &:focus {
        @apply border-primary-500;
      }
    }

    &__select {
      @apply cursor-pointer p-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-500 outline-none bg-transparent transition-all;

      &:focus {
        @apply border-primary-500;
      }
    }

    &__card {
      @apply flex flex-col items-center justify-center w-1/12 p-2;
    }

    &__wrap {
      @apply flex flex-col items-center justify-center rounded-lg border transition-all cursor-pointer px-2 py-4 w-full;

      &.primary {
        &:hover {
          @apply border-primary-500 text-primary-500;
        }
        &.selected {
          @apply border-primary-500 text-primary-500;
        }
      }

      &.secondary {
        &:hover {
          @apply border-secondary-500 text-secondary-500;
        }
        &.selected {
          @apply border-secondary-500 text-secondary-500;
        }
      }

      &.success {
        &:hover {
          @apply border-success-500 text-success-500;
        }
        &.selected {
          @apply border-success-500 text-success-500;
        }
      }

      &.danger {
        &:hover {
          @apply border-danger-500 text-danger-500;
        }
        &.selected {
          @apply border-danger-500 text-danger-500;
        }
      }

      &.warning {
        &:hover {
          @apply border-warning-500 text-warning-500;
        }
        &.selected {
          @apply border-warning-500 text-warning-500;
        }
      }

      &.info {
        &:hover {
          @apply border-info-500 text-info-500;
        }
        &.selected {
          @apply border-info-500 text-info-500;
        }
      }
    }

    &__icon {
      @apply transition-all mb-2;
    }

    &__label {
      @apply text-xs text-center transition-all truncate w-full;
    }
  }
</style>
