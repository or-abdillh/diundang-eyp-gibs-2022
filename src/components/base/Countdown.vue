<template>
    <section class="z-30 translate-y-5 bg-gray-200 bg-opacity-50 border border-gray-100 backdrop-blur-sm rounded-xl px-8 pb-6 pt-12">
        <OverlapHeaderTitle title="COUNTDOWN ACARA"></OverlapHeaderTitle>
        <section data-aos="zoom-in-up" class="flex justify-center gap-2 text-gray-600">
            <template v-for="(value, key) in countdown" :key="key">
                <div class="text-center border border-gray-200 p-4 rounded-xl bg-opacity-50">
                    <h1 class="text-2xl leading-3 mb-2 font-bold">{{ value }}</h1>
                    <small class="uppercase">{{ key }}</small>
                </div>
            </template>
        </section>
    </section>
</template>

<script setup>

import { reactive, onMounted } from 'vue'
import axios from 'axios'
import moment from 'moment'
import OverlapHeaderTitle from '@/components/base/OverlapHeaderTitle.vue'

const countdown = reactive({
    hari: 2, jam: 12, menit: 45, detik: 23
})

onMounted( async () => {

    const URL = import.meta.env.VITE_BASE_URL + 'event/end-of-year-performance-gibs-2022'
    const headers = {
        token: import.meta.env.VITE_API_TOKEN
    }

    const res = await axios.get(URL, { headers })

    const now = new Date().getTime()
    let diff = new Date( res?.data?.results?.event?.detail?.start ).getTime() - now
    let duration = moment.duration( diff, 'millisecond' )
    
    setInterval(() => {
        duration = moment.duration( diff, 'millisecond' )
        countdown.hari = duration.days()
        countdown.jam = duration.hours()
        countdown.menit = duration.minutes()
        countdown.detik = duration.seconds()
        diff -= 1000
    }, 1000);
})

</script>