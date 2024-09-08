<template>
  <section class="section loaders-section">
    <div class="section__wrapper loaders-section__wrapper">
      <span class="loaders-section__label">Change color</span>
      <select v-model="selectedColor" class="loaders-section__select">
        <option v-for="color in colors" :key="color" :value="color">{{ color }}</option>
      </select>
    </div>
    <div class="section__item">
      <span class="section__label">Line scale loader</span>
      <WLineLoader :variant="LineLoaderVariant.LINE_SCALE" :color="selectedColor" />
    </div>
    <div class="section__item">
      <span class="section__label">Line slide away loader</span>
      <WLineLoader :variant="LineLoaderVariant.LINE_SLIDE_AWAY" :color="selectedColor" />
    </div>
    <div class="section__item">
      <span class="section__label">Line loop loader</span>
      <WLineLoader :variant="LineLoaderVariant.LINE_LOOP" :color="selectedColor" />
    </div>
    <div class="section__item">
      <span class="section__label">Jumping dots loader</span>
      <WDotsLoader :variant="DotsLoaderVariant.JUMPING_DOTS" :color="selectedColor" />
    </div>
    <div class="section__item">
      <span class="section__label">Scale dots loader</span>
      <WDotsLoader :variant="DotsLoaderVariant.SCALE_DOTS" :color="selectedColor" />
    </div>
    <div class="section__item">
      <span class="section__label">Scale less dots loader</span>
      <WDotsLoader :variant="DotsLoaderVariant.SCALE_LESS_DOTS" :color="selectedColor" />
    </div>
    <div class="section__item">
      <span class="section__label">Move right bars loader</span>
      <WBarsLoader :variant="BarsLoaderVariant.MOVE_RIGHT_BARS" :color="selectedColor" />
    </div>
    <div class="section__item">
      <span class="section__label">Move center bars loader</span>
      <WBarsLoader :variant="BarsLoaderVariant.MOVE_CENTER_BARS" :color="selectedColor" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { WBarsLoader, WDotsLoader, WLineLoader } from '../../components'
  import { BarsLoaderVariant, ColorScheme, DotsLoaderVariant, LineLoaderVariant } from '../../types'
  import { ref } from 'vue'

  const selectedColor = ref<ColorScheme>(ColorScheme.PRIMARY)

  const colors = [
    ColorScheme.PRIMARY,
    ColorScheme.SECONDARY,
    ColorScheme.SUCCESS,
    ColorScheme.DANGER,
    ColorScheme.WARNING,
    ColorScheme.INFO,
  ]
</script>

<style scoped lang="scss">
  .loaders-section {
    &__wrapper {
      @apply mb-8;
    }

    &__select {
      @apply cursor-pointer p-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-500 outline-none bg-transparent transition-all;

      &:focus {
        @apply border-primary-500;
      }
    }
  }
</style>
