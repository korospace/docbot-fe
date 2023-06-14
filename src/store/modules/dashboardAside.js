export default {
    namespaced: true,
    state: {
      show: false,
    },
    getters: {
    },
    actions: {
    },
    mutations: {
        SET_SHOW_ASIDE: function(state, show) {
            state.show = show;
        },
    }
}