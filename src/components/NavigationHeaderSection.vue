<template>
  <Popover class="bg-white bg-opacity-95 sticky top-0 z-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link :to="{ name: 'Home' }">
            <span class="sr-only">Globex Reengineering</span>
            <img
              class="h-14 w-auto sm:h-20"
              src="../assets/logo/globex-reengineering-logo.png"
              alt=""
            />
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <router-link
            :to="{ name: 'Home' }"
            class="text-lg font-medium text-gray-500 hover:text-gray-900 pb-1 link-underline link-underline-black"
          >
            Home
          </router-link>
          <router-link
            :to="{ name: 'Home', hash: '#about' }"
            class="text-lg font-medium text-gray-500 hover:text-gray-900 pb-1 link-underline link-underline-black"
          >
            About
          </router-link>
          <router-link
            :to="{ name: 'Products and Services' }"
            class="text-lg font-medium text-gray-500 hover:text-gray-900 pb-1 link-underline link-underline-black"
          >
            Products and Services
          </router-link>
          <router-link
            :to="{ name: 'Project Gallery' }"
            class="text-lg font-medium text-gray-500 hover:text-gray-900 pb-1 link-underline link-underline-black"
          >
            Gallery
          </router-link>

          <router-link
            :to="{ name: 'Home', hash: '#contact' }"
            class="text-lg font-medium text-gray-500 hover:text-gray-900 pb-1 link-underline link-underline-black"
          >
            Contact
          </router-link>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <router-link
            :to="{ name: 'Home', hash: '#contact' }"
            class="transition-colors duration-500 ease-in-out ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary hover:bg-dark"
          >
            Get a Quote
          </router-link>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-14 w-auto"
                  src="../assets/logo/globex-reengineering-logo.png"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-1 gap-y-4 gap-x-8">
              <router-link
                :to="{ name: 'Home' }"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </router-link>
              <router-link
                :to="{ name: 'Home', hash: '#about' }"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </router-link>
              <router-link
                :to="{ name: 'Products and Services' }"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Products and Services
              </router-link>
              <router-link
                :to="{ name: 'Project Gallery' }"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Gallery
              </router-link>

              <router-link
                :to="{ name: 'Home', hash: '#contact' }"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </router-link>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
</script>

<style>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
  background-size: 0 3px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(indigo, indigo);
}

.link-underline:hover {
  background-size: 100% 3px;
  background-position: 0 100%;
}
</style>
