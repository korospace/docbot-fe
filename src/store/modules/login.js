import { saveLocalStorage } from '@/services/localstorage.service';
import axios                from 'axios';
import router               from "@/router";
import { toast }            from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    namespaced: true,
    state: {
    },
    getters: {
    },
    actions: {
        DO_LOGIN: function ({ commit,rootState },form) {
            commit("loading/SET_DATA_LOADING",{show:true,text:'login'},{ root: true });

            axios
                .post(`${rootState.apiurl}/auth/login`,form)
                .then(( response ) => {
                    saveLocalStorage('user_token',response.data.data.token);

                    toast.success("login berhasil !", {
                        position: toast.POSITION.TOP_RIGHT,
                    });

                    setTimeout(() => {
                        router.push("/");
                    }, 1500);
                })
                .catch(( error ) => {
                    
                    if (error.response.status == 400) {
                        toast.warn("username atau password salah !", {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    }
                    else if (error.response.status >= 500) {
                        toast.error("terjadi kesalahan pada server !", {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    }
                
                })
                .finally(() => {
                    commit("loading/SET_DATA_LOADING",{show:false,text:''},{ root: true });
                })

        },
    },
    mutations: {
        
    }
}