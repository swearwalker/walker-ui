<template>
  <section class="section icons-section">
    <div class="section__wrapper icons-section__wrapper">
      <div class="icons-section__content">
        <span class="icons-section__label">Search by name</span>
        <input v-model="search" type="text" class="icons-section__search" />
      </div>
      <div class="icons-section__content">
        <span class="icons-section__label">Change icon size(You can use any size)</span>
        <select v-model="selectedSize" class="icons-section__size">
          <option v-for="size in iconSizes" :key="size" :value="size">{{ size }}</option>
        </select>
      </div>
      <div class="icons-section__content">
        <span class="icons-section__label">Change color</span>
        <select v-model="selectedColor" class="icons-section__size">
          <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
        </select>
      </div>
    </div>
    <TransitionGroup
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOut"
    >
      <template v-for="icon in filteredIcons" :key="icon">
        <div
          :class="[{ selected: selectedIcon === icon }, selectedColor]"
          class="icons-section__card"
          @click="copyAndSelect(icon)"
        >
          <WIcon class="icons-section__icon" :icon="icon" :size="selectedSize" />
          <span class="icons-section__label">{{ icon }}</span>
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
    'block',
    'chevron-down',
    'chevron-left',
    'chevron-right',
    'chevron-up',
    'clock',
    'copy',
    'delete',
    'dismiss',
    'edit',
    'filter',
    'hide',
    'image',
    'info',
    'minus',
    'more-horizontal',
    'more-vertical',
    'options',
    'play',
    'power',
    'save',
    'search',
    'settings',
    'share',
    'show',
    'user',
    'users',
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
    @apply flex flex-wrap gap-4;

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

    &__size {
      @apply cursor-pointer p-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-500 outline-none bg-transparent transition-all;

      &:focus {
        @apply border-primary-500;
      }
    }

    &__card {
      @apply flex flex-col items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 p-4 w-40 transition-all cursor-pointer;

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
      @apply text-sm text-center transition-all;
    }
  }
</style>
