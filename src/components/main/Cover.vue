<template>
    <main class="bg-four-point-stars">
        <main class="animate__animated animate__bounceInUp wrapper min-h-screen">
            <!-- main frame -->
            <section class="relative w-full min-h-screen translate-y-20 rounded-t-[15rem] bg-sapphire bg-texture border-t-[1rem] border-gray-200">
                <section class="p-8">
                    <EYP data-aos="flip-up" class="w-3/12 mx-auto rounded mb-10"></EYP>
                    <!-- Copywriters -->
                    <section class="text-center mb-5">
                        <p class="text-gray-100 text-lg">
                            <strong>Bismillahirrahmanirrahim</strong>
                            <br><br>
                            <strong>Assalamu'alaikum wr.wb</strong>
                            <br>
                            {{ event?.detail?.greet }}
                        </p>
                        
                        <EYPCurveLogo class="mt-16"></EYPCurveLogo>
                        <section class="-translate-y-10">
                            <festiveStar class="w-4/12 mx-auto fill-gray-100 mb-5"></festiveStar>
                            <p class="text-gray-100">
                                Yang diselenggarakan oleh
                                <br> 
                                <strong>Global Islamic Boarding School,</strong>
                                maka dengan ini kami mengundang Bapak/Ibu untuk dapat hadir pada:
                            </p>
                        </section>
                    </section>
                    <!-- End of Copywriters -->
                    <!-- Information -->
                    <section class="flex justify-center gap-4">
                        <!-- Date -->
                        <section class="relative flex items-center gap-2 text-gray-100 font-sans w-fit px-4 pt-6 pb-4 rounded-lg bg-sapphire bg-opacity-50 backdrop-blur border">
                            <!-- icon -->
                            <span class="absolute -top-4 left-2/4 -translate-x-2/4 shadow-lg bg-gray-100 text-sapphire h-8 w-8 ring-4 ring-sapphire rounded-full grid place-items-center"><i class="fa-solid fa-calendar"></i></span>
                            <span>
                                <h1 class="text-4xl font-bold">{{ moment(event?.detail?.start).date() }}</h1>
                            </span>
                            <span>
                                <small>{{ moment(event?.detail?.start).format('dddd').toUpperCase() }}</small>
                                <p class="leading-3 font-semibold">{{ moment(event?.detail?.start).format('MMMM').toUpperCase() }}</p>
                                <p class="tracking-widest">{{ moment(event?.detail?.start).year() }}</p>
                            </span>
                        </section>
                        <!-- Time -->
                        <section class="relative text-center text-gray-100 font-sans w-fit px-4 pt-6 pb-4 rounded-lg bg-sapphire bg-opacity-50 backdrop-blur border">
                            <!-- icon -->
                            <span class="absolute -top-4 left-2/4 -translate-x-2/4 shadow-lg bg-gray-100 ring-4 ring-sapphire text-sapphire h-8 w-8 rounded-full grid place-items-center"><i class="fa-solid fa-clock"></i></span>
                            <span>
                                <p class="font-semibold">{{ moment(event?.detail?.start).format('HH:mm') }} WITA - SELESAI</p>
                            </span>
                        </section>
                    </section>
                    <!-- end of Information -->
                </section>
                <!-- decoration -->
                <section data-aos="zoom-in-up"  class="relative">
                    <WaveAnimated class="bg-sapphire bg-texture"></WaveAnimated>
                    <Countdown :target="new Date(event?.detail?.start).getTime()" class="absolute top-20 left-2/4 w-10/12 -translate-x-2/4"></Countdown>
                    <WaveAnimated class="bg-sapphire bg-texture rotate-180"></WaveAnimated>
                </section>
                <!-- end of decoration -->
                <!-- All section -->
                <section class="flex flex-col gap-8">
                    <Location :name="event?.detail?.location_name" :map="event?.detail?.location_map"></Location>
                    <HealthProtocol></HealthProtocol>
                    <Rundown :lists="event?.rundowns"></Rundown>
                    <Note :lists="event?.rules"></Note>
                    <Streaming></Streaming>
                    <Confirmation v-if="$route.query.vip !== null"></Confirmation>
                </section>
                <!-- End of All section -->
                <footer class="p-5 text-center text-white">
                    <p data-aos="zoom-in-up" class="mb-10">
                        Suatu kehormatan bagi kami, apabila Bapak/Ibu berkenan hadir untuk mendukung acara ini. Atas perhatian dan kehadirannya kami ucapkan terima kasih. 
                        <br>
                        Wassalamu'alaikum Wr. Wb
                    </p>
                    <p data-aos="zoom-in-up" class="mb-12">
                        Salam Hormat,
                        <br>
                        KETUA PANITIA
                    </p>
                    <EYPCurveLogo></EYPCurveLogo>
                    <Diundang data-aos="zoom-in-up"></Diundang>
                </footer>
            </section>
            <!-- end of main frame -->
        </main>
    </main>
</template>

<script setup>

import axios from 'axios'
import { onMounted, ref } from 'vue'
import moment from 'moment'
import EYP from '@/components/base/EYP.vue'
import EYPCurveLogo from '@/components/base/EYPCurveLogo.vue'
import Countdown from '@/components/base/Countdown.vue'
import Location from '@/components/main/section/Location.vue'
import HealthProtocol from '@/components/main/section/HealthProtocol.vue'
import Rundown from '@/components/main/section/Rundown.vue'
import Note from '@/components/main/section/Note.vue'
import Streaming from '@/components/main/section/Streaming.vue'
import Confirmation from '@/components/main/section/Confirmation.vue'
import WaveAnimated from '@/components/animated/WaveAnimated.vue'
import Diundang from '@/components/base/Diundang.vue'
import festiveStar from '@/assets/svg/festive-star.svg'

moment().locale('id')

const event = ref()

onMounted( async () => {

    const URL = import.meta.env.VITE_BASE_URL + 'event/end-of-year-performance-gibs-2022'
    const headers = {
        token: import.meta.env.VITE_API_TOKEN
    }

    const res = await axios.get(URL, { headers })
    event.value = res.data.results.event
})

</script>