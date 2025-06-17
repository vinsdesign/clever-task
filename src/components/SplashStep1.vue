<script setup>
import LogoIconVertical from '@/components/icons/LogoIconVertical.vue'
import IllustrationLogin from '@/components/icons/IllustrationLogin.vue'
import ButtonCircle from '@/components/ButtonCircle.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-light-gray">
    <div class="w-full max-w-xs flex flex-col gap-14 px-4">
      <section class="flex justify-center">
        <LogoIconVertical />
      </section>
      <section class="flex flex-col justify-center items-center">
        <IllustrationLogin :width="290" :height="290" />
        <div class="w-full">
          <h1 class="font-jakartaSans-bold text-lg text-dark">Work Smarter, Together.</h1>
          <p class="text-dark-gray text-xs">
            Organize your team’s potential into real progress — one clever task at a time.
          </p>
        </div>
      </section>
      <section class="flex items-center justify-center">
        <ButtonPrimary
          classname="w-full py-3 flex items-center justify-center font-jakartaSans-medium text-white text-sm "
          >Next <i class="bx bx-caret-right text-lg"></i
        ></ButtonPrimary>
      </section>
      <section class="flex items-center justify-center gap-1">
        <ButtonCircle classname="bg-dark w-2.5 h-2.5"></ButtonCircle>
        <ButtonCircle classname="bg-white w-2.5 h-2.5"></ButtonCircle>
      </section>
    </div>
  </div>
</template>
