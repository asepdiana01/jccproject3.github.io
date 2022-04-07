export default {
    namespaced: true,
    state: {
        status: false,
    },
    mutations: {
        setStatus: (state, status) => {
            state.status = status
        },
    },
    actions: {
        setStatus: ({commit}, status) => {
            commit('setStatus', status)
        },
    },
    getters: {
        status: state => state.status,
    },
}