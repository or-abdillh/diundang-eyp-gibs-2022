<template>
    <section class="px-5 py-16">
        <Card class="bg-white" header-title="CATATAN">
            <section>
                <template v-for="(note, x) in props.lists" :key="x">
                    <div data-aos="zoom-in-up" class="flex items-start gap-5 mb-4 border-b border-gray-200 pb-3">
                        <span class="text-xl font-medium leading-7">{{ x + 1 }}.</span>
                        <p class="text-left">{{ note.name }}</p>
                    </div>
                </template>
            </section>
        </Card>
    </section>
</template>

<script setup>

import Card from '@/components/base/Card.vue'

const props = defineProps({
    lists: Array
})

</script>