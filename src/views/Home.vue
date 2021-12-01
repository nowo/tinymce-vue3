<template>
  <div class="home">
    <p class="tipx">
      组件版，将tinymce封装成一个组件来调用(位于/src/components/Tinymce.vue)
    </p>
    <Tinymce v-model:value="val" />

    <button @click="isText = !isText" style="margin: 10px">html切换</button>
    <div v-if="isText">{{ val }}</div>
    <div v-else v-html="val"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Tinymce from "@/components/Tinymce.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "Home",
  components: {
    Tinymce,
  },
  setup() {
    const val = ref("Welcome to Your Vue.js App");
    const isText = ref(true);
    return {
      val,
      isText,
    };
  },
};
</script>
