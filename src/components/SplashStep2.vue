<script setup>
import { useRouter } from 'vue-router'
import LogoIconVertical from '@/components/icons/LogoIconVertical.vue'
import IllustrationSplashStep2 from '@/components/icons/IllustrationSplashStep2.vue'
import ButtonCircle from '@/components/ButtonCircle.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
import ButtonOutlinePrimary from './ButtonOutlinePrimary.vue'

const router = useRouter()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-light-gray">
    <!-- Logo -->
    <header class="flex justify-center pt-8">
      <LogoIconVertical />
    </header>
    <!-- Konten utama -->
    <main class="flex-1 flex items-center justify-center">
      <div class="w-full max-w-xs flex flex-col gap-10 px-4">
        <section class="flex flex-col justify-center items-center">
          <IllustrationSplashStep2 :width="290" :height="290" />
          <div class="w-full">
            <h1 class="font-jakartaSans-bold text-xl text-dark">Assign. Track. Win.</h1>
            <p class="text-dark-gray text-xs">
              From role-based tasking to seamless collaboration - manage every project with clarity
              and control.
            </p>
          </div>
        </section>
        <section class="flex flex-col items-center justify-center gap-2">
          <ButtonPrimary
            @click="router.push({ name: 'LoginView' })"
            classname="w-full py-2 font-jakartaSans-medium text-white text-sm"
            >Login</ButtonPrimary
          >
          <span class="text-dark text-sm font-jakartaSans-medium">or</span>
          <ButtonOutlinePrimary
            classname="w-full py-2 font-jakartaSans-medium text-dark hover:text-white text-sm"
            >Register</ButtonOutlinePrimary
          >
        </section>
      </div>
    </main>
    <!-- Dot indicator -->
    <footer class="flex items-center justify-center gap-1 mb-6">
      <ButtonCircle classname="bg-white w-2.5 h-2.5"></ButtonCircle>
      <ButtonCircle classname="bg-dark w-2.5 h-2.5"></ButtonCircle>
    </footer>
  </div>
</template>
