<template lang="">
    <div  v-on:scroll.passive="test">
        <overlayLoading 
            v-show="false"  
        ></overlayLoading>
        <!-- table movie -->
        <div v-on:keyup.enter="test">Do something</div>   
        <button @click="test">123</button>
    </div>
</template>
<script>
import OverlayLoading from "./../OverlayLoading/OverlayLoading.vue";

export default {
  components: {
    OverlayLoading,
  },
  methods: {
    test() {
      console.log("enter press");
    },
  },
};
</script>
<style lang="">
</style>