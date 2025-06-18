<script setup>
const props = defineProps({
  classname: {
    type: String,
    default: null,
  },
  classLabel: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'checkbox',
  },
  nameInput: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="flex items-center gap-2">
    <input
      :id="id"
      :type="type"
      :class="['border-2 scale-110 border-dark rounded-md', props.classname]"
    />
    <label :class="[props.classLabel]" :for="id"><slot></slot></label>
  </div>
</template>
