<template>
    <section data-aos="zoom-in-up" class="relative bg-white px-5 pb-5 pt-12 rounded-xl text-gray-600 text-center">
        <OverlapHeaderTitle :title="props.headerTitle"></OverlapHeaderTitle>
        <slot></slot>
    </section>
</template>

<script setup>

import OverlapHeaderTitle from '@/components/base/OverlapHeaderTitle.vue'

const props = defineProps({
    headerTitle: {
        type: String,
        default: 'Header Title'
    }
})

</script>