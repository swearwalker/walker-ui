<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title">Walker UI</h1>
      <p class="header__description">This is a UI Components library.</p>
      <WToggle v-model="isDark" :label="isDark ? 'Dark theme' : 'Light theme'" />
    </div>
  </header>
  <main class="main">
    <div class="container">
      <WTabs v-model="currentTab" :tabs="tabs" />
      <BtnsSection v-if="currentTab === 'btns'" />
      <InputsSection v-if="currentTab === 'inputs'" />
      <TabsSection v-if="currentTab === 'tabs'" />
      <TogglesSection v-if="currentTab === 'toggles'" />
      <IconsSection v-if="currentTab === 'icons'" />
      <LoadersSection v-if="currentTab === 'loaders'" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { WTabs, WToggle } from '../components'
  import { useDark } from '@vueuse/core'
  import type { Tab } from '../types'
  import BtnsSection from './components/BtnsSection.vue'
  import IconsSection from './components/IconsSection.vue'
  import TabsSection from './components/TabsSection.vue'
  import TogglesSection from './components/TogglesSection.vue'
  import InputsSection from './components/InputsSection.vue'
  import LoadersSection from './components/LoadersSection.vue'

  const isDark = useDark()

  const currentTab = ref('btns')
  const tabs: Tab[] = [
    {
      label: 'Buttons section',
      value: 'btns',
    },
    {
      label: 'Inputs section',
      value: 'inputs',
    },
    {
      label: 'Tabs section',
      value: 'tabs',
    },
    {
      label: 'Toggles section',
      value: 'toggles',
    },
    {
      label: 'Icons section',
      value: 'icons',
    },
    {
      label: 'Loaders section',
      value: 'loaders',
    },
  ]
</script>

<style lang="scss">
  html,
  body,
  #app {
    @apply w-full h-full bg-gray-50 text-gray-900 dark:text-gray-200 dark:bg-gray-900;
  }

  main {
    @apply w-full bg-gray-50 text-gray-900 dark:text-gray-200 dark:bg-gray-900;
  }

  .header {
    @apply mb-8 py-4;

    &__title {
      @apply text-4xl font-bold mb-2 text-primary-500;
    }

    &__description {
      @apply text-sm text-gray-500 mb-2;
    }
  }

  .section {
    @apply p-4;

    &__item {
      @apply w-full flex flex-col mb-8 items-start;

      &:last-of-type {
        @apply mb-0;
      }
    }

    &__wrapper {
      @apply flex flex-col gap-y-2;
    }

    &__label {
      @apply text-lg font-bold mb-2;
    }

    &__empty-place {
      @apply flex-1 ml-auto;
    }
  }
</style>
