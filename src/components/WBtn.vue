<template>
  <button class="w-btn">
    <div class="w-btn__prefix-icon"></div>
    <slot name="prefix"></slot>
    <slot name="default"></slot>
    <slot name="suffix"></slot>
    <div class="w-btn__suffix-icon"></div>
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
