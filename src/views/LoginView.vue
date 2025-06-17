<script setup>
import LogoIcons from '@/components/icons/LogoIcon.vue'
import IllustrationLogin from '@/components/icons/IllustrationLogin.vue'
import ButtonCircle from '@/components/ButtonCircle.vue'
import InputComponent from '@/components/InputComponent.vue'
import CheckboxComponent from '@/components/CheckboxComponent.vue'
import ButtonPrimary from '@/components/ButtonPrimary.vue'
</script>

<template>
  <div class="grid grid-cols-2">
    <section class="bg-light-gray h-screen grid grid-rows-[0.1fr_1fr_0.1fr]">
      <header class="flex items-center justify-center mt-5">
        <LogoIcons />
      </header>
      <section class="flex flex-col items-center justify-center">
        <div class="grid gap-3 place-content-center">
          <IllustrationLogin color="#363636" :width="480" :height="480" />
          <div class="w-[480px]">
            <h1 class="font-jakartaSans-bold text-3xl text-dark">Work Smarter, Together.</h1>
            <p class="text-dark-gray">
              Organize your team’s potential into real progress — one clever task at a time.
            </p>
          </div>
        </div>
      </section>
      <div class="flex items-center justify-center gap-2 mb-5">
        <ButtonCircle classname="bg-dark w-4 h-4"></ButtonCircle>
        <ButtonCircle classname="bg-white w-4 h-4"></ButtonCircle>
      </div>
    </section>

    <section class="grid grid-rows-1">
      <section class="flex flex-col items-center justify-center">
        <div class="grid gap-3 place-content-center">
          <div class="w-[32rem] flex flex-col gap-2">
            <div>
              <h1 class="font-jakartaSans-bold text-3xl text-dark">Welcome Back.</h1>
              <p class="text-dark-gray">
                Sign in to manage your tasks, lead your projects, and stay in sync with your team.
              </p>
            </div>
            <InputComponent
              id="email"
              type="text"
              classname="text-sm text-dark-gray px-5 py-3 w-full font"
              placeholder="Email"
            />
            <InputComponent
              id="pass"
              type="password"
              classname="text-sm text-dark-gray px-5 py-3 w-full"
              placeholder="Password"
            />
            <div class="flex justify-between text-sm text-dark">
              <CheckboxComponent
                id="remember-me"
                classLabel="text-dark-gray text-sm"
                classname="text-lg text-dark-gray"
                >Remember me</CheckboxComponent
              >
              <a href="#" class="underline">Forget Password</a>
            </div>
            <ButtonPrimary classname="py-2 text-white text-sm mt-5"> Login </ButtonPrimary>
            <p class="text-sm text-dark flex justify-center gap-1">
              New to Clevertask? <a href="#" class="underline">Register</a>
            </p>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
