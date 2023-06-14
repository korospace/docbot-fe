<template>

    <!-- Container -->
    <section class="container_chat">

      <section class="header_chat">
          <div class="header_chat_wraper">
              <div class="bot_foto_profile">
                <div class="foto_profile">
                  <img :src="botPng">
                </div>

                <div class="text_profile">
                  <h1>DocBot</h1>
                  <p>online</p>
                </div>
              </div>
              
              <div @click="showAside(!isShowAside)" :class="{'rotate-0':isShowAside==false,'rotate-180':isShowAside==true}" class="header_chat_burger">
                  <svg viewBox="0 0 24 24" width="24" height="24" class="inline-block"><path fill="currentColor" d="M19,13H3V11H19L15,7L16.4,5.6L22.8,12L16.4,18.4L15,17L19,13M3,6H13V8H3V6M13,16V18H3V16H13Z"></path></svg>
              </div>
          </div>
      </section>

      <section class="body_chat">
        <div class="body_chat_wraper">
          <div class="body_chat_messages">

            <div v-for="x in messages" :key="x" :class="{'message_left':x.position == 'left', 'message_right':x.position == 'right'}">
              <div class="message_buble">
                {{ x.text }}
              </div>
            </div>

          </div>

          <div class="body_chat_typing">
            <input class="chat_place" placeholder="Kirim pesan" @keyup.enter="sendMsg"/>
            <div class="chat_btn" @click="sendMsg">
              <font-awesome-icon class="chat_btn_icon" :icon="faPaperPlane"/>
            </div>
          </div>
        </div>
      </section>

    </section>

</template>

<script>
import { FontAwesomeIcon }   from '@fortawesome/vue-fontawesome'
import { faPaperPlane }     from '@fortawesome/free-solid-svg-icons'
import { useStore } from "vuex"
import { computed, onMounted } from '@vue/runtime-core';

export default {
  name: 'DashboardChatView',
  components: {
    FontAwesomeIcon
  },
  setup() {
    const store  = useStore();
    const botPng = require('@/assets/images/bot.png');

    /**
     * Buger Header
     */
    const isShowAside = computed(() => {
      return store.state.dashboardAside.show;
    });

    const showAside = (value) => {
      store.commit("dashboardAside/SET_SHOW_ASIDE",value);
    }

    /**
     * Get Messages
     */
    const messages = computed(() => {
        return store.state.dashboardChat.messages;
    });

    store.dispatch("dashboardChat/GET_MESSAGES");

    /**
     * Send Messages
     */
    const sendMsg = () => {
      // create form
      let form = new FormData();
      form.set("message", document.querySelector('.chat_place').value);

      // send to api
      store.dispatch("dashboardChat/SEND_MESSAGES", form);
      document.querySelector('.chat_place').value = "";
    }

    onMounted(() => {
      
    })

    return {
      botPng,
      isShowAside,
      showAside,
      faPaperPlane,
      messages,
      sendMsg,
    }
  }
}
</script>

<style scoped>
.container_chat {
  @apply min-h-full max-h-full w-full flex flex-col;
}

/* 
  Header
*/
.header_chat {
  @apply w-full p-3;
}

.header_chat_wraper {
  @apply relative py-5 px-8 flex items-center bg-docbot-green-300 rounded-xl;
}

.header_chat .bot_foto_profile {
  @apply flex items-center;
  font-family: 'Poppins', sans-serif;
}

.header_chat .bot_foto_profile .foto_profile {
  @apply bg-white w-14 p-2 rounded-full;
}

.header_chat .bot_foto_profile .foto_profile img {
  @apply w-full rounded-full;
}

.header_chat .bot_foto_profile .text_profile {
  @apply pl-4;
}

.header_chat .bot_foto_profile .text_profile h1 {
  @apply text-gray-100 text-xl font-semibold;
}

.header_chat .bot_foto_profile .text_profile p {
  @apply text-docbot-green-100;
}

.header_chat .header_chat_burger {
  @apply absolute right-8 z-10 lg:hidden max-w-fit px-1 pb-1 bg-docbot-green-400/30 text-neutral-300 hover:text-neutral-100 cursor-pointer duration-500 rounded-sm;
}

/* 
  Body
*/
.body_chat {
  @apply flex-1 p-3 overflow-hidden;
}

.body_chat_wraper {
  @apply w-full min-h-full max-h-full bg-docbot-green-300 rounded-xl flex flex-col justify-end pt-6 items-center overflow-hidden;
}

.body_chat_messages {
  @apply w-full flex-1 px-8 py-8 mb-12 overflow-auto;
  max-width: 100%;
}

.message_left {
  @apply flex justify-start;
}

.message_left .message_buble{
  @apply bg-docbot-green-200 text-docbot-green-400 px-4 py-2 rounded-b-md rounded-tr-md mb-4;
  max-width: 450px;
}

.message_right {
  @apply flex justify-end;
}

.message_right .message_buble{
  @apply bg-docbot-green-200 text-docbot-green-400 px-4 py-2 rounded-b-md rounded-tl-md mb-4;
  max-width: 450px;
}

.body_chat_typing {
  @apply w-full flex justify-center items-end px-8 flex pb-10;
}

.body_chat_typing .chat_place {
  @apply w-full flex-1 bg-gray-200 text-gray-600 px-4 py-4 text-lg rounded-xl outline-none overflow-x-auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  max-height: 100px;
}

.body_chat_typing .chat_btn {
  @apply text-gray-200 flex items-center ml-4 px-6 py-5 text-xl rounded-xl bg-docbot-green-400 hover:opacity-80 cursor-pointer;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
</style>