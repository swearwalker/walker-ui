<template>
  <ul :class="[{ reverse: newestOnTop }, position]" class="toasts">
    <li v-for="(toast, index) in toasts" :key="index" :class="[toast.color, size]" class="toasts__toast">
      {{ toast.message }}
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { type Toast, type ToastProps, ToastSize } from '@/types'
  import { ref } from 'vue'

  const { newestOnTop = true, size = ToastSize.MD, timeout = 3000, position } = defineProps<ToastProps>()

  const toasts = ref<Toast[]>([])

  const addToast = (toast: Toast) => {
    toasts.value.push(toast)
    setTimeout(() => {
      if (newestOnTop) {
        toasts.value.shift()
      } else {
        toasts.value.pop()
      }
    }, timeout)
  }

  defineExpose({ addToast })
</script>

<style scoped lang="scss"></style>
