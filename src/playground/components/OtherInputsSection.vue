<template>
  <section class="section btn-section">
    <div class="section__wrapper btn-section__wrapper">
      <div class="btn-section__content">
        <WToggle v-model="compact" label="Compact" />
      </div>
      <div class="btn-section__content">
        <WToggle v-model="outlined" label="Outlined" />
      </div>
      <div class="btn-section__content">
        <WToggle v-model="disabled" label="Disabled" />
      </div>
      <div class="btn-section__content">
        <span class="btn-section__label">Change color</span>
        <select v-model="selectedColor" class="btn-section__select">
          <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
        </select>
      </div>
    </div>
    <div class="section__item">
      <span class="section__label">Default checkbox</span>
      <WCheckbox
        id="checkbox1"
        v-model="value1"
        label="Default checkbox"
        :color="selectedColor"
        :compact="compact"
        :outlined="outlined"
        :disabled="disabled"
      />
    </div>
    <div class="section__item">
      <span class="section__label">Default checked radio</span>
      <WRadio
        id="radio1"
        v-model="value2"
        :value="'test'"
        label="Default checkbox"
        :color="selectedColor"
        :compact="compact"
        :outlined="outlined"
        :disabled="disabled"
      />
    </div>
    <div class="section__item">
      <span class="section__label">Default unchecked radio</span>
      <WRadio
        id="radio1"
        v-model="value2"
        :value="'test1'"
        label="Default checkbox"
        :color="selectedColor"
        :compact="compact"
        :outlined="outlined"
        :disabled="disabled"
      />
    </div>
    <div class="section__item">
      <span class="section__label">Radio group</span>
      <WRadioGroup v-model="value3" :options="options" :compact="compact" :color="selectedColor" />
    </div>
    <div class="section__item">
      <span class="section__label">Radio group</span>
      <WRadioGroup
        v-model="value3"
        :options="options"
        :compact="compact"
        :color="selectedColor"
        :direction="Direction.HORIZONTAL"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { WCheckbox, WRadio, WRadioGroup, WToggle } from '../../components'
  import { ref } from 'vue'
  import { ColorScheme, Direction, type RadioOption } from '../../types'

  const selectedColor = ref<ColorScheme>(ColorScheme.PRIMARY)
  const compact = ref(false)
  const outlined = ref(false)
  const disabled = ref(false)
  const value1 = ref(false)
  const value2 = ref('test')
  const value3 = ref('')
  const colors = [
    ColorScheme.PRIMARY,
    ColorScheme.SECONDARY,
    ColorScheme.SUCCESS,
    ColorScheme.DANGER,
    ColorScheme.WARNING,
    ColorScheme.INFO,
  ]
  const options: RadioOption[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
  ]
</script>

<style scoped lang="scss">
  .btn-section {
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

    &__select {
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
