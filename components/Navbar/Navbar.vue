<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'

const navigation = [
  { name: 'Breakfast', to: '/menu/breakfast' },
  { name: 'Lunch', to: '/menu/lunch' },
  { name: 'Chinese', to: '/menu/chinese' },
  { name: 'Mexican', to: '/menu/mexican' },
  { name: 'Extras', to: '/menu/extras' },
  { name: 'Map', to: '/map' },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 bg-slate-300 shadow shadow-lg">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <nuxt-link
          to="/"
          class="___ -m-1.5 flex flex-row items-center p-1.5 text-slate-900 no-underline hover:text-rose-800"
        >
          <span class="sr-only">Fair Oaks Burger</span>
          <img
            class="pointer-events-none h-12 w-auto lg:h-16"
            src="~/assets/img/logo.png"
            alt="Fair Oaks Burger"
          />
          <span class="pl-2 text-2xl font-bold leading-none"
            >Fairoaks<br />
            Burger</span
          >
        </nuxt-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-800"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Icon
            name="charm:menu-hamburger"
            class="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <nuxt-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          class="text-sm font-bold leading-6 text-slate-800 no-underline hover:text-slate-600 lg:text-lg"
        >
          {{ item.name }}
        </nuxt-link>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <nuxt-link
          to="/menu"
          class="text-sm font-bold leading-6 text-slate-800 no-underline hover:text-slate-600 lg:text-lg"
          >Full Menu <span aria-hidden="true">&rarr;</span>
        </nuxt-link>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      :open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 z-50 w-full overflow-y-auto bg-slate-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between sm:justify-end">
          <nuxt-link to="/" class="-m-1.5 p-1.5 sm:hidden">
            <span class="sr-only">Fair Oaks Burger</span>
            <img
              class="pointer-events-none h-8 w-auto"
              src="~/assets/img/logo.png"
              alt="Fair Oaks Burger"
            />
          </nuxt-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-rose-800"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <Icon name="charm:cross" class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root sm:-mt-5">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <nuxt-link
                key="home"
                to="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50 hover:text-slate-600"
                >Home</nuxt-link
              >
              <nuxt-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50 hover:text-slate-600"
                >{{ item.name }}</nuxt-link
              >
            </div>
            <div class="py-6">
              <nuxt-link
                to="/menu"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50 hover:text-slate-600"
                >Full Menu</nuxt-link
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style lang="css">
header {
  background-color: #cbd5e1;
  background-image: url('https://www.transparenttextures.com/patterns/textured-stripes.png');
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}
</style>
