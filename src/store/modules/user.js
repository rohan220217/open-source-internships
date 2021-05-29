const state = {

    isDark: localStorage.getItem('isDark') ? localStorage.getItem('isDark') : 'light',
}

const getters = {
    isDark(state) {
        return state.isDark
    },

}

const actions = {
    toggleDark(context) {
        context.commit('TOGGLE_DARK')
    },
}

const mutations = {
    TOGGLE_DARK(state) {
        localStorage.removeItem('isDark')
        if (state.isDark == 'light') {
            state.isDark = 'dark'
        } else {
            state.isDark = 'light'
        }
        localStorage.setItem('isDark', state.isDark)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}
