<template>
    <div class="relative bg-white">
        <!-- <div class="mx-auto">
            <div
                class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:py-14 xl:py-16"
            >
                <svg
                    class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <main
                    class="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
                >
                    <div class="sm:text-center lg:text-left">
                        <h1
                            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                        >
                            <span class="block xl:inline uppercase"
                                >Globex Reengineering (M) Sdn. Bhd.</span
                            >
                        </h1>
                        <p
                            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                        >
                            Water Treatment Supplier and Service Provider
                        </p>
                        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div class="rounded-md shadow">
                                <a
                                    href="#about"
                                    class="transition-colors duration-500 ease-in-out bg-primary hover:bg-dark w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10"
                                >
                                    More Info
                                </a>
                            </div>
                            <div class="mt-3 sm:mt-0 sm:ml-3">
                                <a
                                    href="#direction"
                                    class="transition-colors duration-500 ease-in-out text-primary bg-white hover:bg-gray-100 focus:outline-none focus:border-2 focus:border-gray-500 w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div> -->
        <!-- <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"> -->
        <Popover class="relative bg-white bg-opacity-95 sticky top-0 z-20">
            <div class="absolute w-full mx-auto px-4 sm:px-6">
                <div
                    data-aos="fade-up"
                    class="text-white flex justify-between items-center border-gray-100 pb-6 md:justify-start md:space-x-10"
                >
                    <div class="flex justify-start lg:w-0 lg:flex-1">
                        <router-link :to="{ name: 'Home' }">
                            <span class="sr-only">Globex Reengineering</span>
                            <img
                                class="h-12 mt-3 w-auto sm:h-24"
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
                            class="text-lg hover:text-primary pb-1 link-underline"
                        >
                            <p>Home</p>
                        </router-link>
                        <router-link
                            :to="{ name: 'Home', hash: '#about' }"
                            class="text-lg hover:text-primary pb-1 link-underline"
                        >
                            About
                        </router-link>
                        <router-link
                            :to="{ name: 'Products and Services' }"
                            class="text-lg hover:text-primary pb-1 link-underline"
                        >
                            Products and Services
                        </router-link>
                        <router-link
                            :to="{ name: 'Project Gallery' }"
                            class="text-lg hover:text-primary pb-1 link-underline"
                        >
                            Gallery
                        </router-link>

                        <router-link
                            :to="{ name: 'Home', hash: '#contact' }"
                            class="text-lg hover:text-primary pb-1 link-underline"
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
                    class="top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
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
                                    class="text-base text-white font-medium hover:text-gray-900"
                                >
                                    Home
                                </router-link>
                                <router-link
                                    :to="{ name: 'Home', hash: '#about' }"
                                    class="text-base text-white font-medium hover:text-gray-900"
                                >
                                    About
                                </router-link>
                                <router-link
                                    :to="{ name: 'Products and Services' }"
                                    class="text-base text-white font-medium hover:text-gray-900"
                                >
                                    Products and Services
                                </router-link>
                                <router-link
                                    :to="{ name: 'Project Gallery' }"
                                    class="text-base text-white font-medium hover:text-gray-900"
                                >
                                    Gallery
                                </router-link>

                                <router-link
                                    :to="{ name: 'Home', hash: '#contact' }"
                                    class="text-base text-white font-medium hover:text-gray-900"
                                >
                                    Contact
                                </router-link>
                            </div>
                        </div>
                    </div>
                </PopoverPanel>
            </transition>
            <div class="absolute center-title sm:text-center lg:text-center">
                <h1
                    data-aos="fade-up"
                    class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
                >
                    <span class="block xl:inline uppercase"
                        >Globex Reengineering <br />(M) Sdn. Bhd.</span
                    >
                </h1>
                <p
                    data-aos="fade-up"
                    class="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
                >
                    Water Treatment Supplier and Service Provider
                </p>
                <div
                    data-aos="fade-up"
                    class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center"
                >
                    <div class="rounded-md shadow">
                        <a
                            href="#about"
                            class="transition-colors duration-500 ease-in-out bg-primary hover:bg-dark w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10"
                        >
                            More Info
                        </a>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                        <a
                            href="#direction"
                            class="transition-colors duration-500 ease-in-out text-primary bg-white hover:bg-gray-100 focus:outline-none focus:border-2 focus:border-gray-500 w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </Popover>

        <img
            class="w-full brightness-50 object-cover sm:h-72 md:h-96 lg:w-full lg:h-screen"
            src="../assets/images/16m2-twopass-1.jpg"
            alt=""
        />

        <!-- </div> -->
    </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import "../main.css";
import { onMounted } from "vue";
import AOS from "aos";
import VueFullPage from "vue-fullpage.js";

onMounted(() => {
    AOS.init();
});
</script>

<style>
.link-underline {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
    background-size: 0 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s ease-in-out;
}

.link-underline-black {
    background-image: linear-gradient(transparent, transparent), linear-gradient(indigo, indigo);
}

.link-underline:hover {
    background-size: 100% 3px;
    background-position: 0 100%;
}
</style>
