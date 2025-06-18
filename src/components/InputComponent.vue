<script setup>
const props = defineProps({
  classname: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'text',
  },
  nameInput: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <input
    :type="type"
    :class="['border-2 border-dark rounded-md', props.classname]"
    :placeholder="placeholder"
  />
</template>
