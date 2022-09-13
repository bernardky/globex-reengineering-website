<template>
    <div class="bg-white h-screen">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-48 lg:px-8">
            <div class="max-w-4xl mx-auto text-center pb-12">
                <h2 data-aos="fade-up" class="text-5xl font-extrabold text-gray-900">
                    Your one stop solution provider for water treatment and filtration system.
                </h2>
                <!-- <p class="mt-4 text-lg text-gray-500">some description goes here</p> -->
            </div>

            <div
                class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
            >
                <div class="mt-12">
                    <div
                        data-aos="fade-up"
                        class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        <div v-for="feature in featureList" :key="feature.name" class="pt-6">
                            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                <div class="-mt-6">
                                    <div>
                                        <span
                                            :class="`
                      inline-flex
                      items-center
                      justify-center
                      p-3
                      bg-primary
                      rounded-md
                      shadow-lg`"
                                        >
                                            <component
                                                :is="feature.icon"
                                                class="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </div>
                                    <h3
                                        class="mt-8 text-lg font-medium text-gray-900 tracking-tight"
                                    >
                                        {{ feature.name }}
                                    </h3>
                                    <p class="mt-5 text-base text-gray-500">
                                        {{ feature.description }}
                                    </p>
                                </div>
                                <div id="about"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    CheckIcon,
    LightningBoltIcon,
    UserGroupIcon,
    SwitchHorizontalIcon,
} from "@heroicons/vue/outline";

const featureList = [
    {
        name: "Well trained & competent personnel",
        description:
            "Our technical and field support services are well trained and competent to handle and diagnose any problem related to water treatment and filtration activities.",
        icon: UserGroupIcon,
    },
    {
        name: "Reliable and fast response time",
        description:
            "The technical and field support service is our credibility with fast respond to any related problems.",
        icon: LightningBoltIcon,
    },
    {
        name: "Close proximity to project site",
        description:
            "We are located close to our clients which, allow us to respond fast to our client. We are also a one stop solution to above activities.",
        icon: SwitchHorizontalIcon,
    },
];
</script>
