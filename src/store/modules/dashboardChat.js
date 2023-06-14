import { getLocalStorage } from '@/services/localstorage.service';
// import axios                from 'axios';
// import router               from "@/router";
// import { toast }            from 'vue3-toastify';
// import 'vue3-toastify/dist/index.css';

export default {
    namespaced: true,
    state: {
      messages: [],
    },
    getters: {
    },
    actions: {
        GET_MESSAGES: function ({ commit,dispatch,rootState }) {
            commit("SET_MESSAGES",[]);
            commit("loading/SET_DATA_LOADING",{show:true,text:'please wait...'},{ root: true });

            let headersList = {
                "token": getLocalStorage('user_token')
            }
            
            fetch(`${rootState.apiMiddleware}/getmessage?target_url=${rootState.apiurl}/botmessage/message`, { 
                method: "GET",
                headers: headersList
            })
            .then(response => response.json())
            .then(response => {
                if (response.data.length == 0) {
                    commit("SET_MESSAGES",{
                        position: 'left',
                        text: "silahkan ketik gejala yang anda rasakan"
                    });
                } else {
                    response.data.forEach(row => {
                        commit("SET_MESSAGES",{
                            position: 'right',
                            text: row.question
                        });
                        commit("SET_MESSAGES",{
                            position: 'left',
                            text: row.answer
                        });
                    });
                }

                dispatch('SCROLL_DOWN_MESSAGES');
                commit("loading/SET_DATA_LOADING",{show:false,text:''},{ root: true });
            })
        },
        SEND_MESSAGES: function ({ commit,dispatch,rootState }, form) {
            commit("SET_MESSAGES", {
                position: 'right',
                text: form.get('message')
            })

            dispatch('SCROLL_DOWN_MESSAGES');

            let headersList = {
                "token": getLocalStorage('user_token')
            }
            
            fetch(`${rootState.apiMiddleware}/sendmessage?target_url=${rootState.apiurl}/botmessage/message`, { 
                body: form,
                method: "POST",
                headers: headersList
            })
            .then(response => response.json())
            .then(response => {
                commit("SET_MESSAGES",{
                    position: 'left',
                    text: response.data.answer
                });

                dispatch('SCROLL_DOWN_MESSAGES');
            })
        },
        SCROLL_DOWN_MESSAGES: function () {
            setTimeout(() => {
                const container = document.querySelector(".body_chat_messages");
                container.scrollTop = container.scrollHeight;
            }, 50);
        }
    },
    mutations: {
        SET_MESSAGES: function(state, data) {
            state.messages.push(data);
        },
    }
}