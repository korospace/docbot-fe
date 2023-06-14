import axios     from 'axios';
import router    from "@/router";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    namespaced: true,
    state: {
      data: {
      },
    },
    getters: {
    },
    actions: {
      DO_REGISTER: function ({ commit,rootState },form) {

        commit("loading/SET_DATA_LOADING",{show:true,text:'please wait...'},{ root: true });

        axios
          .post(`${rootState.apiurl}/auth/register`,form)
          .then(( ) => {
            toast.success("registrasi berhasil !!", {
                position: toast.POSITION.TOP_RIGHT,
            });

            setTimeout(() => {
              router.push("/login");
            }, 1500);
          })
          .catch(( error ) => {

            if (error.response.status == 400) {
              error.response.data.message.forEach(row => {
                toast.warn(row.error, {
                  position: toast.POSITION.TOP_RIGHT,
                });
              });
            }
            else {
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