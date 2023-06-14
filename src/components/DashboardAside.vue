<template>
  
  <aside :class="{'w-0 lg:w-full':isShowAside==false,'w-full px-3':isShowAside==true}" class="container_aside">

        <div :class="{'-translate-x-full lg:-translate-x-0':isShowAside==false,'-translate-x-0':isShowAside==true}" class="aside_wraper">

            <!-- <header class="aside_header">
                DASHBOARD 
            </header> -->

            <main class="aside_body">
                
            </main>

            <footer @click="doLogout" class="aside_logout">
                <svg viewBox="0 0 24 24" width="20" height="20" class="ml-5 inline-block"><path fill="currentColor" d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"></path></svg>
                <div class="ml-5 capitalize">Keluar</div> 
            </footer>
        </div>
  
  </aside>

</template>

<script>

import { removeLocalStorage } from '@/services/localstorage.service'
import { useRouter }          from 'vue-router';
import { useStore }           from "vuex"
import Swal from 'sweetalert2';
import { computed } from '@vue/runtime-core';

export default {
  name: 'DashboardAside',
  components: {

  },
  setup() {
    const route = useRouter();
    const store = useStore();

    const isShowAside = computed(() => {
        return store.state.dashboardAside.show;
    });

    const showAside = (value) => {
        store.commit("dashboardAside/SET_SHOW_ASIDE",value);
    }

    const doLogout = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Anda yakin ingin keluar?',
            showDenyButton: true,
            confirmButtonText: 'iya',
            denyButtonText: `tidak`,
            confirmButtonColor: '#88DBC7',
            denyButtonColor: 'grey',
        }).then((result) => {
            Swal.close()

            if (result.isConfirmed) {
                removeLocalStorage('user_token');
                route.push('/login');
            } 
        })
    }

    return {
        isShowAside,
        showAside,
        doLogout,
    }
  }
}
</script>

<style scoped>
    .container_aside {
        @apply absolute lg:relative top-0 bottom-0 z-30 max-w-xs min-h-full py-3 lg:px-3 duration-300;
    }
    
    .aside_wraper {
        @apply w-72 h-full min-h-fit flex flex-col bg-docbot-green-300 rounded-2xl duration-300;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    }

    .aside_header {
        @apply relative w-full h-auto flex justify-between lg:justify-center items-center px-6 py-8 bg-docbot-green-400 text-xl text-neutral-200 font-bold tracking-widest rounded-t-2xl;
        font-family: 'Poppins', sans-serif;
    }

    .aside_body {
        @apply flex-1 overflow-hidden text-lg;
    }

    .aside_logout {
        @apply w-full h-auto flex justify-start items-center py-4 bg-red-500 hover:bg-red-600 text-neutral-200 text-lg cursor-pointer rounded-b-2xl;
        font-family: 'Poppins', sans-serif;
    }
    .router-link-exact-active {
        @apply text-neutral-100
    }
</style>