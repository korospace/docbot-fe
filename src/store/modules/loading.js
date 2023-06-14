export default {
    namespaced: true,
    state: {
      data: {
        show: false,
        text: ''
      },
    },
    getters: {
    },
    actions: {
    },
    mutations: {
        SET_DATA_LOADING: function(state, data) {
            state.data.show = data.show;
            state.data.text = data.text;
        },
    }
}