<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title">Walker UI</h1>
      <p class="header__description">This is a UI Components library.</p>
    </div>
  </header>
  <main class="main">
    <div class="container">
      <WTabs v-model="currentTab" :tabs="tabs" />
      <TabsSection v-if="currentTab === 'tabs'" />
      <TogglesSection v-else-if="currentTab === 'toggles'" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { WTabs } from '@/components'
  import TabsSection from '@/playground/components/TabsSection.vue'
  import TogglesSection from '@/playground/components/TogglesSection.vue'

  const currentTab = ref('toggles')
  const tabs = [
    {
      label: 'Tabs section',
      value: 'tabs',
    },
    {
      label: 'Toggles section',
      value: 'toggles',
    },
  ]
</script>

<style lang="scss">
  .header {
    @apply mb-8 py-4;

    &__title {
      @apply text-4xl font-bold mb-2 text-primary-500;
    }

    &__description {
      @apply text-sm text-gray-500;
    }
  }

  .section {
    @apply p-4;

    &__item {
      @apply w-full flex flex-col mb-8;

      &:last-of-type {
        @apply mb-0;
      }
    }

    &__label {
      @apply text-lg font-bold mb-2;
    }
  }
</style>
