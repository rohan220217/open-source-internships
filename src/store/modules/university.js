const state = {
    university: [
        {
            image: '',
            title: '',
            start_date: '',
            end_date: '',
            perks: { swags: false, stipend: false, cash_price: false, internships_opportunity: false, certificates: false, surprise_gifts: false },
            description: '',
            timeline: '',
            link: ''
        }
    ],
    // singleuniversity: null
}

const getters = {
    allUniversity(state) {
        return state.university
    },

}

const actions = {
}

const mutations = {
}

export default {
    state,
    getters,
    mutations,
    actions
}
