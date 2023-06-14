<template>  
  <LoadingComponent />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
  import LoadingComponent from "@/components/loading.vue";

  export default {
    components: {
      LoadingComponent
    },
    setup() {
      
    },
  }
</script>

<style>
  .fade-enter-active {
    transition: opacity 1.5s linear;
  }
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    position: absolute;
    opacity: 0;
  }
</style>
