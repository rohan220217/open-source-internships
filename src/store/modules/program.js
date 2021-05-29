const state = {
    programs: [
        {
            _id: 0,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1200px-GSoC-icon.svg.png',
            title: 'Google Summer of Code',
            start_date: 'March',
            end_date: 'April',
            perks: { swags: false, stipend: false, cash_price: false, internships_opportunity: false, certificates: false, surprise_gifts: false },
            description: 'The Google Summer of Code, often abbreviated to GSoC, is an international annual program in which Google awards stipends to students who successfully complete a free and open-source software coding project during the summer. The program is open to university students aged 18 or over.',
            timeline: 'https://summerofcode.withgoogle.com/how-it-works/#timeline',
            link: 'https://developers.google.com/open-source/gsoc/'
        },
    ],
    // singlePrograms: null
}

const getters = {
    allPrograms(state) {
        return state.programs
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
