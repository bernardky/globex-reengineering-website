<template></template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
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
