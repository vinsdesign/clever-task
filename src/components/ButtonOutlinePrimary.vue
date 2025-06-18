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
  <button
    :type="type"
    :class="[
      'border border-dark bg-transparent hover:bg-dark rounded-md ease-in duration-300 cursor-pointer',
      props.classname,
    ]"
  >
    <slot></slot>
  </button>
</template>
