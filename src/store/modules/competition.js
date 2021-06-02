const state = {
    competition: [
        {
            _id: 0,
            image: 'https://lab.codingblocks.com/assets/img/avatar.png',
            title: 'BOSS',
            start_date: 'May',
            end_date: 'August',
            perks: { swags: false, stipend: false, cash_price: true, internships_opportunity: false, certificates: true, surprise_gifts: false },
            description: 'At Coding Blocks, most of us come from a vibrant Open Source Community, and that makes us strongly believe in free and open source software. Each year we teach hundreds of students coding, programming and software development. Over the past five years (we started off in April 2014), we have helped more than 3000 students gain expertise in Android, Web, Data Science and more.',
            timeline: 'https://lab.codingblocks.com/boss',
            link: 'https://lab.codingblocks.com/boss',
            color: '#CAEFD1',
        },
        {
            _id: 1,
            image: 'https://codeheat.org/img/logo-dark.png',
            title: 'FOSSASIA Codeheat',
            start_date: 'October',
            end_date: 'June',
            perks: { swags: false, stipend: false, cash_price: false, internships_opportunity: false, certificates: true, surprise_gifts: true },
            description: 'FOSSASIA and OpnTec run the Codeheat coding contest from October 1, 2020 to June 1, 2021. Codeheat is separated into two month periods. After each period we announce winners of the period. Participants contributing at least five pull requests can get a digital certificate and with more than ten pull requests developers can win awesome prizes. Eligible issues for the contest have',
            timeline: 'https://codeheat.org/#timeline',
            link: 'https://codeheat.org',
            color: '#aad0f6',
        },
        {
            _id: 2,
            image: 'https://s3.amazonaws.com/heroku-www-files/customers/logos/drivendata.png',
            title: 'DrivenData',
            start_date: 'Whole Year',
            end_date: 'NA',
            perks: { swags: true, stipend: true, cash_price: true, internships_opportunity: true, certificates: true, surprise_gifts: true },
            description: 'DrivenData works on projects at the intersection of data science and social impact, in areas like international development, health, education, research and conservation, and public services. We want to give more organizations access to the capabilities of data science, and engage more data scientists with social challenges where their skills can make a difference.',
            timeline: 'https://www.drivendata.org/competitions/',
            link: 'https://www.drivendata.org/',
            color: '#FFF2CC',
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
