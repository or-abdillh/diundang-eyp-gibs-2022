<template>
    <section class="px-5 py-16 bg-four-point-stars text-center text-sapphire bg-gray-50">
        <h2 class="text-xl font-bold mb-4">
            <i class="fa-solid fa-map"></i>
            <br>
            LOKASI ACARA
        </h2>
        <p class="text-sm">
            Gedung Indoor, Kampus SMP - SMA Global Islamic Boarding School
            <br>
            Jl. Trans Kalimantan, Sungai Lumbah, Alalak, Kab. Barito Kuala
        </p>
        <!-- iframe -->
        <div class="mt-8 mapouter">
            <div class="gmap_canvas">
                <iframe class="w-full rounded-lg" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=GIBS&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://www.embedgooglemap.net"></a>
            </div>
        </div>
    </section>
</template>

<style scoped>

.mapouter {
    position: relative;
    text-align: right;
}

.gmap_canvas {
    overflow: hidden;
    background: none!important;
}

</style>