<template>
  <section class="section tabs-section">
    <div class="section__item">
      <span class="section__label">Default Toggle</span>
      <WToggle v-model="toggle1" label="Default" />
    </div>
    <div class="section__item">
      <span class="section__label">Disabled Toggle</span>
      <WToggle v-model="toggle2" disabled label="Disabled" />
    </div>
    <div class="section__item">
      <span class="section__label">Small rounds Toggle</span>
      <WToggle v-model="toggle3" small-round label="Small rounds" />
    </div>
    <div class="section__item">
      <span class="section__label">Sizes Toggle</span>
      <WToggle v-model="toggle4" :size="ToggleSize.SM" label="Small" />
      <WToggle v-model="toggle4" :size="ToggleSize.MD" label="Medium" />
      <WToggle v-model="toggle4" :size="ToggleSize.LG" label="Large" />
    </div>
    <div class="section__item">
      <span class="section__label">Colors Toggle</span>
      <WToggle v-for="color in colors" :key="color" v-model="toggle5" :color="color" :label="color" />
    </div>
    <div class="section__item">
      <span class="section__label">Label left Toggle</span>
      <WToggle v-model="toggle6" :label-position="ToggleLabelPosition.LEFT" label="Left" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { WToggle } from '@/components'
  import { ref } from 'vue'
  import { ToggleLabelPosition, ToggleSize } from '@/types'

  const toggle1 = ref(true)
  const toggle2 = ref(true)
  const toggle3 = ref(true)
  const toggle4 = ref(true)
  const toggle5 = ref(true)
  const toggle6 = ref(true)

  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
</script>

<style scoped lang="scss"></style>
