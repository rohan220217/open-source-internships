const state = {
    competition: [
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
    // singlecompetition: null
}

const getters = {
    allCompetitions(state) {
        return state.competition
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
