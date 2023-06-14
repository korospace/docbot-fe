<template>

    <!-- Container -->
    <section class="container_dashboard">
        
        <div class="wraper_dashboard">
        
          <!-- aside bar -->
          <dashboard-aside />

          <router-view/>

        </div>

    </section>

</template>

<script>

import DashboardAside from '@/components/DashboardAside.vue'

export default {
  name: 'DashboardView',
  components: {
    DashboardAside
  },
  setup() {

  }
}
</script>

<style scoped>
.container_dashboard {
  @apply bg-docbot-green-200 min-h-screen max-h-screen w-full overflow-hidden;
}

.wraper_dashboard {
  @apply min-h-screen max-h-screen w-full max-w-9xl flex m-auto overflow-hidden;
}
</style>