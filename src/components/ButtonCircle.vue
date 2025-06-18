<script setup>
const props = defineProps({
  classname: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'button',
  },
})
</script>

<template>
  <button :type="type" :class="['border border-dark rounded-full cursor-pointer', props.classname]">
    <slot></slot>
  </button>
</template>
