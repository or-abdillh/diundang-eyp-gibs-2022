<template>
    <main>
        <KeepAlive>
            <Transition
            enter-active-class="animate__animated animate__bounceInUp"
            leave-active-class="animate__animated animate__flipOutX">
                <Component @page:closed="pageMoverHandler" :is="components[componentActive]"></Component>
            </Transition>
        </KeepAlive>
        <AudioButton :audioPlay="audioPlayed"></AudioButton>
    </main>
</template>

<script setup>

import { ref, reactive } from 'vue'
import FrontCover from '@/components/front/Cover.vue'
import MainCover from '@/components/main/Cover.vue'
import AudioButton from '@/components/base/AudioButton.vue'

const audioPlayed = ref(false)

const components = reactive({
    'frontCover': FrontCover,
    'mainCover': MainCover
})

const componentActive = ref('frontCover')
const pageMoverHandler = val => {
    componentActive.value = val
    audioPlayed.value = true
}


</script>