<template>
  <div class="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
    <div class="text-center">
      <!-- <h2
          class="text-base font-semibold tracking-wide uppercase text-indigo-600"
        >
          smallText
        </h2> -->
      <p
        class="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl,"
      >
        Our Track Records
      </p>
      <!-- <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">content</p> -->
    </div>
  </div>

  <div class="relative bg-white pt-4 pb-12 overflow-hidden">
    <div
      class="lg:mx-auto lg:max-w-7xl xl:max-w-none xl:w-full lg:pl-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
    >
      <div
        class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
      >
        <div>
          <div class="xl:pl-20">
            <span
              class="bg-yellow h-12 w-12 rounded-md flex items-center justify-center"
            >
              <!-- <InboxIcon class="h-6 w-6 text-white" aria-hidden="true" /> -->
            </span>
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                RO, DI Water System and Industrial Effluent Treatment System
                (IETS) for Industry
              </h2>
              <h3 class="font-medium text-lg text-gray-600 pt-4">
                We design, supply, install new(or upgrade existing) reverse
                osmosis water system and IETS system for size ranging from 5mᶟ
                to 52mᶟ applications.
              </h3>

              <div class="my-4">
                <div class="my-4">
                  <CheckIcon
                    class="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
                    Single / Two Pass RO Water System
                  </p>
                </div>
                <div class="my-4">
                  <CheckIcon
                    class="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p class="ml-9 text-lg leading-6 font-medium text-gray-900">
                    Biological & Chemical Treatment System
                  </p>
                </div>
              </div>
              <div class="mt-6">
                <router-link
                  :to="{ name: 'Project Gallery' }"
                  href="#"
                  class="transition-colors duration-500 ease-in-out inline-flex border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-dark px-4 py-2"
                >
                  View our gallery
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:mt-0">
        <div
          class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full lg:w-full"
        >
          <img
            class="w-full rounded-l-xl shadow-xl object-cover ring-1 ring-black ring-opacity-5 min-w-full imgHeightControl lg:absolute lg:left-0 lg:w-auto lg:max-w-none"
            src="../assets/images/iets-1.jpg"
            alt="IETS & RO Water System for Industries"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div class="mt-16 sm:mt-24">
      <div
        class="lg:mx-auto lg:mx-w-7xl xl:max-w-none xl:w-full lg:pr-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
      >
        <div
          class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2 2xl:pr-8"
        >
          <div class="xl:pr-20">
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                RO Water System for Hemodialysis (Hospitals and Dialysis
                Centres)
              </h2>
              <h3 class="font-medium text-lg text-gray-600 mt-4">
                Increase RO product flow from 4 LPM to 8 LPM as well as between
                8 bedded - 25 bedded applications
              </h3>

              <div class="mt-6 lg:flex flex-col items-start">
                <router-link
                  :to="{ name: 'Project Gallery' }"
                  class="transition-colors duration-500 ease-in-out inline-flex border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-dark px-4 py-2"
                >
                  View our gallery
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div
            class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:pr-0 lg:m-0 lg:relative lg:h-full"
          >
            <img
              class="w-full rounded-r-xl shadow-xl object-cover ring-1 ring-black ring-opacity-5 min-w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src="../assets/images/35-lpm-dialysis-2.jpg"
              alt="hemodialysis filter"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { CheckIcon } from "@heroicons/vue/outline";
</script>

<style scoped>
.imgRadiusLeft {
  border-bottom-left-radius: 100px;
}
.imgHeightControl {
  height: 410px;
}
@media (min-width: 1024px) {
  .imgHeightControl {
    height: full;
    min-height: 100%;
  }
}
.imgRadiusRight {
  border-bottom-right-radius: 100px;
}
</style>
