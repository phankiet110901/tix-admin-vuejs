<template lang="">
    <div>
        <overlayLoading 
            v-show="false"  
            :absolute="true"
            :opacity="1"
            :value="false"
        ></overlayLoading>
        <!-- table movie -->
        123   
    </div>
</template>
<script>
import OverlayLoading from "./../OverlayLoading/OverlayLoading.vue";

export default {
  components: {
    OverlayLoading,
  },
};
</script>
<style lang="">
</style>