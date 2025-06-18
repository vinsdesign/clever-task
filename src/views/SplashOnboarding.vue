<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import SplashStep1 from '@/components/SplashStep1.vue'
import LoginView from '@/views/LoginView.vue'
import SplashStep2 from '@/components/SplashStep2.vue'

const windowWidth = ref(window.innerWidth)
const step = ref(1)

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
  <template v-if="isMobile">
    <SplashStep1 v-if="step === 1" @next="step = 2" />
    <SplashStep2 v-else-if="step === 2" />
  </template>
  <LoginView v-else />
</template>
