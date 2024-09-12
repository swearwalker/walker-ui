<template>
  <div :class="direction" class="w-radio-group">
    <WRadio
      v-for="option in computedOptions"
      :id="option.id"
      :key="option.id"
      v-model="model"
      :value="option.value"
      :compact="compact"
      :color="color"
      :label="option.label"
    />
  </div>
</template>

<script setup lang="ts">
  import { WRadio } from '@/components'
  import { Direction, type RadioGroupProps, type RadioOption } from '../../types'
  import { computed } from 'vue'

  const { options, value = 'value', label = 'label', direction = Direction.VERTICAL } = defineProps<RadioGroupProps>()

  const model = defineModel<string | number>({ default: '' })

  const computedOptions = computed(() => {
    return options.map((option: Record<string, RadioOption>) => {
      return {
        id: option.id ? option.id.toString() : generateId(),
        value: value ? option[value].toString() : option.toString(),
        label: label ? option[label].toString() : option.toString(),
        disabled: !!option.disabled,
      }
    })
  })

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9)
  }
</script>

<style scoped lang="scss">
  .w-radio-group {
    @apply flex flex-col gap-y-2;
  }

  .horizontal {
    @apply flex-row gap-x-2;
  }
</style>
