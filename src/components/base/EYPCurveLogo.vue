<template>
    <section class="relative font-sans tracking-wider -translate-y-2 text-yellow-300 text-3xl font-bold">
        <h1 class="leading-3" data-role="headline">END-OF-YEAR</h1>
        <h1 data-role="headline" class="-translate-y-10 z-10">PERFORMANCE 2022</h1>
        <section class="-translate-y-12">
            <p data-role="headline" class="font-semibold text-gray-100 text-lg -translate-y-8">INTERNATIONAL DIVERSITY FESTIVAL</p>
            <p data-role="headline" class="font-semibold text-gray-100 text-lg -translate-y-20">DIVERSITY BEYOND IMAGINATION</p>
        </section>
        <img src="/img/sparkles.gif" class="absolute -top-6 left-2/4 -translate-x-2/4 z-[-99]">
    </section>
</template>

<script setup>

import { onMounted } from 'vue'
import CircleType from 'circletype'

onMounted(() => {
    const headlineElements = document.querySelectorAll('[data-role=headline]')
    headlineElements.forEach(headline => {
        const circletype = new CircleType(headline)
        circletype.dir(-1).radius(300)
    })
})

</script>