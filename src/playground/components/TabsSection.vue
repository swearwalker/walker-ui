<template>
  <section class="section tabs-section">
    <div class="section__item">
      <span class="section__label">Default Tabs</span>
      <WTabs v-model="currentTab1" :tabs="tabs1" />
    </div>
    <div class="section__item">
      <span class="section__label">Colored Tabs</span>
      <WTabs v-model="currentTab2" :tabs="tabs2" :color="currentTab2" />
    </div>
    <div class="section__item">
      <span class="section__label">Compact Tabs</span>
      <WTabs v-model="currentTab3" :tabs="tabs3" compact />
    </div>
    <div class="section__item">
      <span class="section__label">Disabled Tabs</span>
      <WTabs v-model="currentTab4" :tabs="tabs4" />
    </div>
    <div class="section__item">
      <span class="section__label">Vertical Tabs</span>
      <WTabs v-model="currentTab5" :tabs="tabs5" :direction="Direction.VERTICAL" />
    </div>
    <div class="section__item">
      <span class="section__label">Right Tabs</span>
      <WTabs v-model="currentTab6" :tabs="tabs6" :position="TabsPosition.RIGHT" />
    </div>
    <div class="section__item">
      <span class="section__label">Vertical Right Tabs</span>
      <WTabs v-model="currentTab7" :tabs="tabs7" :direction="Direction.VERTICAL" :position="TabsPosition.RIGHT" />
    </div>
    <div class="section__item">
      <span class="section__label">Flexible Tabs</span>
      <WTabs v-model="currentTab8" :tabs="tabs8" flexible />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { WTabs } from '../../components'
  import { ref } from 'vue'
  import { ColorScheme, Direction, Tab, TabsPosition } from '../../types'

  const currentTab1 = ref('tab1')
  const currentTab2 = ref(ColorScheme.SECONDARY)
  const currentTab3 = ref('tab1')
  const currentTab4 = ref('tab1')
  const currentTab5 = ref('tab1')
  const currentTab6 = ref('tab1')
  const currentTab7 = ref('tab1')
  const currentTab8 = ref('tab1')

  const tabs1: Tab[] = [
    {
      label: 'Tab 1',
      value: 'tab1',
    },
    {
      label: 'Tab 2',
      value: 'tab2',
    },
    {
      label: 'Tab 3',
      value: 'tab3',
    },
  ]

  const tabs2: Tab[] = [
    {
      label: 'Primary',
      value: 'primary',
    },
    {
      label: 'Secondary',
      value: 'secondary',
    },
    {
      label: 'Success',
      value: 'success',
    },
    {
      label: 'Danger',
      value: 'danger',
    },
    {
      label: 'Warning',
      value: 'warning',
    },
    {
      label: 'Info',
      value: 'info',
    },
  ]

  const tabs3: Tab[] = [
    {
      label: 'Tab 1',
      value: 'tab1',
    },
    {
      label: 'Tab 2',
      value: 'tab2',
    },
    {
      label: 'Tab 3',
      value: 'tab3',
    },
  ]

  const tabs4: Tab[] = [
    {
      label: 'Tab 1',
      value: 'tab1',
    },
    {
      label: 'Tab 2',
      value: 'tab2',
      disabled: true,
    },
    {
      label: 'Tab 3',
      value: 'tab3',
    },
  ]

  const tabs5: Tab[] = [
    {
      label: 'Tab 1',
      value: 'tab1',
    },
    {
      label: 'Tab 2',
      value: 'tab2',
    },
    {
      label: 'Tab 3',
      value: 'tab3',
    },
  ]

  const tabs6: Tab[] = [
    {
      label: 'Tab 1',
      value: 'tab1',
    },
    {
      label: 'Tab 2',
      value: 'tab2',
    },
    {
      label: 'Tab 3',
      value: 'tab3',
    },
  ]

  const tabs7: Tab[] = [
    {
      label: 'Tab 1',
      value: 'tab1',
    },
    {
      label: 'Tab 2',
      value: 'tab2',
    },
    {
      label: 'Tab 3',
      value: 'tab3',
    },
  ]

  const tabs8: Tab[] = [
    {
      label: 'Tab 1',
      value: 'tab1',
    },
    {
      label: 'Tab 2',
      value: 'tab2',
    },
    {
      label: 'Tab 3',
      value: 'tab3',
    },
  ]
</script>

<style scoped lang="scss"></style>
