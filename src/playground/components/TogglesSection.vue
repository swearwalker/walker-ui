<template>
  <section class="section tabs-section">
    <div class="section__item">
      <span class="section__label">Default Toggle</span>
      <WToggle v-model="toggle1" label="Default" />
    </div>
    <div class="section__item">
      <span class="section__label">Disabled Toggle</span>
      <div class="section__wrapper">
        <WToggle v-model="toggle2" disabled label="Disabled" />
        <WToggle v-model="toggle3" disabled label="Disabled" />
      </div>
    </div>
    <div class="section__item">
      <span class="section__label">Small rounds Toggle</span>
      <WToggle v-model="toggle4" small-round label="Small rounds" />
    </div>
    <div class="section__item">
      <span class="section__label">Sizes Toggle</span>
      <div class="section__wrapper">
        <WToggle v-model="toggle5" :size="ToggleSize.SM" label="Small" />
        <WToggle v-model="toggle5" :size="ToggleSize.MD" label="Medium" />
        <WToggle v-model="toggle5" :size="ToggleSize.LG" label="Large" />
      </div>
    </div>
    <div class="section__item">
      <span class="section__label">Colors Toggle</span>
      <div class="section__wrapper">
        <WToggle v-for="color in colors" :key="color" v-model="toggle6" :color="color" :label="color" label-colored />
      </div>
    </div>
    <div class="section__item">
      <span class="section__label">Label left Toggle</span>
      <WToggle v-model="toggle7" :label-position="ToggleLabelPosition.LEFT" label="Left" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { WToggle } from '@/components'
  import { ref } from 'vue'
  import { ToggleLabelPosition, ToggleSize } from '@/types'

  const toggle1 = ref(true)
  const toggle2 = ref(true)
  const toggle3 = ref(false)
  const toggle4 = ref(true)
  const toggle5 = ref(true)
  const toggle6 = ref(true)
  const toggle7 = ref(true)

  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
</script>

<style scoped lang="scss"></style>
