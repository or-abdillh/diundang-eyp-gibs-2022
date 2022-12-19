<template>
    <main class="bg-falling-triangles" style="background-color: #222061;">
        <section class="min-h-screen wrapper">
            <!-- Hasnur and GIBS logo -->
            <section class="flex  justify-center gap-1">
                <section class="animate__animated animate__bounceInDown w-7/12 p-4 bg-white shadow rounded-b-2xl flex justify-between outline outline-offset-4 outline-gray-300">
                    <div class="w-6/12">
                        <img src="/img/hasnur-centre-logo.png" alt="Hasnur Centre Logo">
                    </div>
                    <div class="w-[47%]">
                        <img src="/img/gibs-logo.png" alt="Hasnur Centre Logo">
                    </div>
                </section>
            </section>
            <!-- End of Hasnur and GIBS logo -->
            <!-- EYP GIBS Logo -->
            <section class="px-5 w-9/12 mt-12 mb-3 mx-auto">
                <EYP class="outline-4 w-10/12 mx-auto"></EYP>
                <flagsParty class="animate__animated animate__bounceInUp fill-gray-300 w-11/12 mx-auto"></flagsParty>
            </section>
            <!-- End of EYP GIBS Logo -->
            <!-- CTA -->
            <section class="animate__animated animate__bounceInUp text-center mb-6">
                <p class="text-gray-50 font-semibold uppercase">Kepada Yth.</p>
                <h1 class="text-2xl text-white font-semibold">{{ $route.query.to || "Fulan bin Fulan" }}</h1>
                <OpenInvitation @invitation:opened="emits('page:closed', 'mainCover')" class="mt-5"></OpenInvitation>
            </section>
            <!-- End of CTA -->
            <!-- Footer -->
            <footer class="animate__animated animate__bounceInUp text-center text-gray-50">
                <small>Mohon maaf jika terjadi kesalahan dalam penulisan nama</small>
                <Diundang class="mt-6"></Diundang>
            </footer>
            <!-- End of Footer -->
        </section>
    </main>
</template>

<script setup>

import OpenInvitation from '@/components/front/OpenInvitation.vue'
import EYP from '@/components/base/EYP.vue'
import Diundang from '@/components/base/Diundang.vue'
import flagsParty from '@/assets/svg/flags-party.svg'

const emits = defineEmits(['page:closed'])

</script>