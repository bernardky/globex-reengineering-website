<template>
    <div class="h-screen pb-24 px-12">
        <div class="container mx-auto flex flex-wrap items-center">
            <div data-aos="fade-up" class="w-full md:w-1/2 md:pr-4 flex flex-wrap mb-12 md:mb-0">
                <div class="p-2 w-1/2">
                    <img src="../assets/images/picture-6.png" class="w-full h-64 object-cover" />
                </div>
                <div class="p-2 w-1/2">
                    <img src="../assets/images/picture-7.png" class="w-full h-64 object-cover" />
                </div>
                <div class="p-2 w-full">
                    <img src="../assets/images/picture-1.png" class="w-full h-64 object-cover" />
                </div>
            </div>
            <div data-aos="fade-up" class="w-full md:w-1/2 md:pl-4">
                <h2 class="text-5xl mb-10">About Us</h2>
                <p class="text-xl mb-6">
                    We have extensive experience in providing a great variety of products and
                    services which caters to your water treatment needs:
                </p>
                <div class="max-w-lg">
                    <div class="flex">
                        <div>
                            <div class="py-2">
                                <CheckIcon
                                    class="absolute h-6 w-6 text-green-500"
                                    aria-hidden="true"
                                />
                                <p class="ml-9 text-lg font-medium text-gray-900">
                                    Engineering Water Treatment System
                                </p>
                            </div>
                            <div class="py-2">
                                <CheckIcon
                                    class="absolute h-6 w-6 text-green-500"
                                    aria-hidden="true"
                                />
                                <p class="ml-9 text-lg font-medium text-gray-900">
                                    RO Water System
                                </p>
                            </div>
                            <div class="py-2">
                                <CheckIcon
                                    class="absolute h-6 w-6 text-green-500"
                                    aria-hidden="true"
                                />
                                <p class="ml-9 text-lg font-medium text-gray-900">
                                    DI Water System
                                </p>
                            </div>
                            <div class="py-2">
                                <CheckIcon
                                    class="absolute h-6 w-6 text-green-500"
                                    aria-hidden="true"
                                />
                                <p class="ml-9 text-lg font-medium text-gray-900">
                                    RODI Water System
                                </p>
                            </div>
                        </div>

                        <div>
                            <div class="py-2">
                                <CheckIcon
                                    class="absolute h-6 w-6 text-green-500"
                                    aria-hidden="true"
                                />
                                <p class="ml-9 text-lg font-medium text-gray-900">
                                    Waste Water System (IETS)
                                </p>
                            </div>
                            <div class="py-2">
                                <CheckIcon
                                    class="absolute h-6 w-6 text-green-500"
                                    aria-hidden="true"
                                />
                                <p class="ml-9 text-lg font-medium text-gray-900">
                                    Portable Mixed Bed Column Regeneration Service
                                </p>
                            </div>
                            <div class="py-2">
                                <CheckIcon
                                    class="absolute h-6 w-6 text-green-500"
                                    aria-hidden="true"
                                />
                                <p class="ml-9 text-lg font-medium text-gray-900">Filter Product</p>
                            </div>
                            <div class="py-2">
                                <CheckIcon
                                    class="absolute h-6 w-6 text-green-500"
                                    aria-hidden="true"
                                />
                                <p class="ml-9 text-lg font-medium text-gray-900">Piping Work</p>
                            </div>
                        </div>
                    </div>

                    <router-link
                        :to="{ name: 'Products and Services' }"
                        class="transition-colors duration-500 ease-in-out bg-primary hover:bg-dark flex w-fit items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 mt-12"
                    >
                        View Our Products and Services
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { CheckIcon } from "@heroicons/vue/outline";
</script>
