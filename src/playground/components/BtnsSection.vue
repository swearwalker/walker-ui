<template>
  <section class="section btn-section">
    <div class="section__wrapper btn-section__wrapper">
      <div class="btn-section__content">
        <span class="btn-section__label">Change icon size</span>
        <select v-model="selectedSize" class="btn-section__select">
          <option v-for="size in btnSizes" :key="size" :value="size">{{ size }}</option>
        </select>
      </div>
      <div class="btn-section__content">
        <span class="btn-section__label">Change color</span>
        <select v-model="selectedColor" class="btn-section__select">
          <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
        </select>
      </div>
      <div class="btn-section__content">
        <span class="btn-section__label">Change variant</span>
        <select v-model="selectedVariant" class="btn-section__select">
          <option v-for="variant in variants" :key="variant" :value="variant">{{ variant }}</option>
        </select>
      </div>
    </div>
    <div class="section__item">
      <span class="section__label">Default button</span>
      <WBtn :color="selectedColor" :size="selectedSize" :variant="selectedVariant">Default button</WBtn>
    </div>
    <div class="section__item">
      <span class="section__label">Icons button</span>
      <WBtn
        prefix-icon="save"
        suffix-icon="dismiss"
        :color="selectedColor"
        :size="selectedSize"
        :variant="selectedVariant"
        >Prefix button</WBtn
      >
    </div>
    <div class="section__item">
      <span class="section__label">Icon only button</span>
      <WBtn icon="add" :color="selectedColor" :size="selectedSize" :variant="selectedVariant" />
    </div>
    <div class="section__item">
      <span class="section__label">Icon only rounded button</span>
      <WBtn icon="add" :color="selectedColor" :size="selectedSize" :variant="selectedVariant" circle />
    </div>
    <div class="section__item">
      <span class="section__label">Rounded button</span>
      <WBtn :color="selectedColor" :size="selectedSize" :variant="selectedVariant" circle>Rounded button</WBtn>
    </div>
    <div class="section__item">
      <span class="section__label">Disabled button</span>
      <WBtn :color="selectedColor" :size="selectedSize" :variant="selectedVariant" disabled>Disabled button</WBtn>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { WBtn } from '../../components'
  import { ref } from 'vue'
  import { ButtonSize, ButtonVariant, ColorScheme } from '../../types'

  const selectedSize = ref<ButtonSize>(ButtonSize.MD)
  const selectedColor = ref<ColorScheme>(ColorScheme.PRIMARY)
  const selectedVariant = ref<ButtonVariant>(ButtonVariant.DEFAULT)
  const btnSizes = [ButtonSize.SM, ButtonSize.MD, ButtonSize.LG]
  const colors = [
    ColorScheme.PRIMARY,
    ColorScheme.SECONDARY,
    ColorScheme.SUCCESS,
    ColorScheme.DANGER,
    ColorScheme.WARNING,
    ColorScheme.INFO,
  ]
  const variants = [
    ButtonVariant.DEFAULT,
    ButtonVariant.OUTLINED,
    ButtonVariant.SMOOTH,
    ButtonVariant.CLEAR,
    ButtonVariant.TEXT,
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
