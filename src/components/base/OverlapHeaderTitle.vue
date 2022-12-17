<template>
    <section class="absolute -top-6 left-2/4 -translate-x-2/4 bg-sky-400 py-3 px-4 rounded-full text-center w-9/12 text-gray-100 font-semibold">
        <p data-aos="zoom-in-up" >{{ props.title }}</p>
    </section>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        default: 'Header Title',
        required: true
    }
})

</script>