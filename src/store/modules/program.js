const state = {
    programs: [
        {
            _id: 0,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1200px-GSoC-icon.svg.png',
            title: 'Google Summer of Code',
            start_date: 'January',
            end_date: 'August',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: true },
            description: 'The Google Summer of Code, often abbreviated to GSoC, is an international annual program in which Google awards stipends to students who successfully complete a free and open-source software coding project during the summer. The program is open to university students aged 18 or over.',
            timeline: 'https://summerofcode.withgoogle.com/how-it-works/#timeline',
            link: 'https://developers.google.com/open-source/gsoc/',
            color: '#CAF4F4',
        },
        {
            _id: 1,
            image: 'https://news.mlh.io/wp-content/uploads/2020/08/fellowship.jpg',
            title: 'MLH Open Source Fellowship',
            start_date: 'June, September',
            end_date: 'August, December',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: false, certificates: true, surprise_gifts: false },
            description: 'The MLH Fellowship is a 12 week internship alternative for aspiring software engineers. Instead of interning at a single company, on the Open Source Track you\'ll contribute to the type of Open Source projects that every company depends on.',
            timeline: 'https://fellowship.mlh.io/programs/open-source',
            link: 'https://fellowship.mlh.io/programs/open-source',
            color: '#FDE0D9',
        },
        {
            _id: 2,
            image: 'https://developers.google.com/season-of-docs/images/logo/SeasonofDocs_Icon_Grey_300ppi-whitespace-cropped.png',
            title: 'Season of Docs',
            start_date: 'February',
            end_date: 'November',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: false, certificates: true, surprise_gifts: false },
            description: 'Season of Docs provides support for open source projects to improve their documentation and gives professional technical writers an opportunity to gain experience in open source. Together we raise awareness of open source, of docs, and of technical writing.',
            timeline: 'https://developers.google.com/season-of-docs/docs/timeline',
            link: 'https://developers.google.com/season-of-docs/',
            color: '#CAEFD1',
        },
        {
            _id: 3,
            image: 'https://kde.org/stuff/clipart/logo/kde-logo-bluegradient-w-slug-vectorized.svg',
            title: 'Season of KDE',
            start_date: 'December',
            end_date: 'May',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: false, certificates: true, surprise_gifts: false },
            description: 'KDE Student Programs has been running Season of KDE as a program similar to, but not quite the same as Google Summer of Code, offering an opportunity to everyone (not just students) to participate in both code and non-code projects that benefits the KDE ecosystem',
            timeline: 'https://season.kde.org/',
            link: 'https://season.kde.org/',
            color: '#DCE5FD',
        },
        {
            _id: 4,
            image: 'https://cdn-media-1.freecodecamp.org/images/b-dH-s55d1HXEBiv3uiVe3RocpZ6LQylbhRV',
            title: 'Outreachy',
            start_date: '"February,	September"',
            end_date: 'August, March',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: false },
            description: 'Outreachy is a diversity initiative that provides paid, remote internships to people subject to systemic bias and impacted by underrepresentation in the technical industry where they are living.',
            timeline: 'https://www.outreachy.org/',
            link: 'https://www.outreachy.org/',
            color: '#aad0f6',
        },
        {
            _id: 5,
            image: 'https://miro.medium.com/max/750/0*HvRpFRJStlMDfZab',
            title: 'RGSOC',
            start_date: 'July',
            end_date: 'September',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: false },
            description: 'Rails Girls Summer of Code is a global fellowship program for women and non-binary coders. Students receive a three-month scholarship to work on existing Open Source projects and expand their skill set.',
            timeline: 'https://railsgirlssummerofcode.org/',
            link: 'https://railsgirlssummerofcode.org/',
            color: '#FFF2CC',
        },
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

    ],
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
