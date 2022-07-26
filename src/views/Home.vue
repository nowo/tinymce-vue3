<template>
    <div class="home">
        <p class="tips">
            组件版，将tinymce封装成一个组件来调用(位于/src/components/Tinymce.vue)
        </p>
        <Tinymce v-model="val" />

        <button @click="isText = !isText" style="margin: 10px">html切换</button>
        <div v-if="isText">{{ val }}</div>
        <div v-else v-html="val"></div>
    </div>
</template>

<script lang="ts" setup>
// @ is an alias to /src
import Tinymce from "@/components/Tinymce.vue";
import { ref } from "@vue/reactivity";

const val = ref("Welcome to Your Vue.js App");
const isText = ref(true);


</script>
