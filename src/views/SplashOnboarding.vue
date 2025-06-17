<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import SplashStep1 from '@/components/SplashStep1.vue'
import LoginView from '@/views/LoginView.vue'

const windowWidth = ref(window.innerWidth)

function handleResize() {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const isMobile = computed(() => windowWidth.value < 468) // < 768px = mobile
</script>

<template>
  <SplashStep1 v-if="isMobile" />
  <LoginView v-else />
</template>
