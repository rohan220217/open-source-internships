const state = {
    university: [
        {
            _id: 0,
            image: 'https://jwoc2k20.tech/assets/img/team/logo.png',
            title: 'JGEC WINTER OF CODE',
            start_date: 'December',
            end_date: 'February',
            perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: false, certificates: true, surprise_gifts: true },
            description: 'JWoC ( JGEC Winter of Code) is a coding event organised by Developers JGEC which helps students to plunge into Open Source contribution and get the realm of Software Development.',
            timeline: 'https://jwoc2k20.tech/#timeline',
            link: 'https://jwoc2k20.tech/',
            color: '#aad0f6',
        },
        {
            _id: 1,
            image: 'https://oss2019.github.io/images/oss_logo.png',
            title: 'OSS ',
            start_date: 'May',
            end_date: 'July',
            perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: false, certificates: false, surprise_gifts: true },
            description: 'OSS is an open Society for students. We encourage equal participation from all branches and years in college to grow together as a community.',
            timeline: 'https://oss2019.github.io/events.html',
            link: 'https://oss2019.github.io',
            color: '#FDE0D9',
        },
    ],
    // Template 
    // {
    //     _id: 0,
    //     image: '',
    //     title: '',
    //     start_date: '',
    //     end_date: '',
    //     perks: { swags: false, stipend: false, cash_price: false, internships_opportunity: false, certificates: false, surprise_gifts: false },
    //     description: '',
    //     timeline: '',
    //     link: '',
    //     color: '#DCE5FD',
    // },

    // Color combination
    // 1 CAF4F4
    // 2 FDE0D9
    // 3 CAEFD1
    // 4 DCE5FD
    // 5 aad0f6
    // 6 FFF2CC
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
