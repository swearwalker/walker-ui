<template>
  <section class="section inputs-section">
    <div class="section__item">
      <span class="section__label">Default Input</span>
      <WInput v-model="value1" label="Default input" />
    </div>
    <div class="section__item">
      <span class="section__label">Label Input</span>
      <WInput v-model="value2" label="Label input" />
    </div>
    <div class="section__item">
      <span class="section__label">Disabled Input</span>
      <WInput v-model="value3" label="Disabled input" disabled />
    </div>
    <div class="section__item">
      <span class="section__label">Readonly Input</span>
      <WInput v-model="value4" label="Readonly input" readonly />
    </div>
    <div class="section__item">
      <span class="section__label">Placeholder Input</span>
      <WInput v-model="value5" label="Placeholder input" placeholder="Placeholder input" />
    </div>
    <div class="section__item">
      <span class="section__label">Clearable Input</span>
      <WInput v-model="value6" label="Clearable input" clearable suffix-icon="info-circle" />
    </div>
    <div class="section__item">
      <span class="section__label">Help Input</span>
      <WInput v-model="value7" label="Help input" help-text="Help text" />
    </div>
    <div class="section__item">
      <span class="section__label">Error Input</span>
      <WInput v-model="value8" label="Error input" errors="Error" suffix-icon="block" />
    </div>
    <div class="section__item">
      <span class="section__label">Errors Input</span>
      <WInput v-model="value9" label="Errors input" :errors="['Error1', 'Error2']" />
    </div>
    <div class="section__item">
      <span class="section__label">Icons Input</span>
      <WInput v-model="value10" label="Icons input" prefix-icon="search" suffix-icon="info-circle" />
    </div>
    <div class="section__item">
      <span class="section__label">Compact Input</span>
      <WInput v-model="value11" label="Compact input" compact />
    </div>
    <div class="section__item">
      <span class="section__label">Success Input</span>
      <WInput v-model="value12" label="Success input" success suffix-icon="check" />
    </div>
    <div class="section__item">
      <span class="section__label">Warning Input</span>
      <WInput v-model="value13" label="Warning input" warning suffix-icon="warning" />
    </div>
    <div class="section__item">
      <span class="section__label">Error Input</span>
      <WInput v-model="value14" label="Error input" error suffix-icon="error-circle" />
    </div>
    <div class="section__item">
      <span class="section__label">Slots Input</span>
      <WInput v-model="value15" label="Slots input">
        <template #prefix>
          <WToggle v-model="toggle1" class="mr-2" />
        </template>
        <template #suffix>
          <WToggle v-model="toggle2" class="ml-2" />
        </template>
      </WInput>
    </div>
    <div class="section__item">
      <span class="section__label">Password Input</span>
      <WInput v-model="value16" label="Password input" password />
    </div>
    <div class="section__item flex-1">
      <span class="section__label">Full Input</span>
      <WInput
        v-model="value16"
        label="Full input"
        placeholder="Full input"
        prefix-icon="add"
        suffix-icon="play"
        help-text="Full input text"
        errors="Full input error"
        clearable
      >
        <template #prefix>
          <WToggle v-model="toggle1" class="mr-2" />
        </template>
        <template #suffix>
          <WToggle v-model="toggle2" class="ml-2" />
        </template>
      </WInput>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { WInput, WToggle } from '../../components'
  import { ref } from 'vue'

  const value1 = ref('value1')
  const value2 = ref('value2')
  const value3 = ref('value3')
  const value4 = ref('value4')
  const value5 = ref('')
  const value6 = ref('value6')
  const value7 = ref('value7')
  const value8 = ref('value8')
  const value9 = ref('value9')
  const value10 = ref('value10')
  const value11 = ref('value11')
  const value12 = ref('value12')
  const value13 = ref('value13')
  const value14 = ref('value14')
  const value15 = ref('value15')
  const value16 = ref('value16')
  const toggle1 = ref(true)
  const toggle2 = ref(false)
</script>

<style scoped lang="scss">
  .inputs-section {
    @apply flex flex-row flex-wrap gap-y-4;

    .section__item {
      @apply w-1/6 p-4;
    }
  }
</style>
