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
        {
            _id: 2,
            image: 'https://njackwinterofcode.github.io/images/nwoc-logo.png',
            title: 'NJACK Winter of Code',
            start_date: 'October',
            end_date: 'January',
            perks: { swags: false, stipend: false, cash_price: false, internships_opportunity: false, certificates: true, surprise_gifts: true },
            description: 'NWoC (NJACK Winter of Code) is a program by NJACK (The Official Computer Science Club of IIT Patna) that helps students understand the paradigm of Open Source contribution and gives them real world software development experience.',
            timeline: 'https://njackwinterofcode.github.io/timeline.html',
            link: 'https://njackwinterofcode.github.io',
            color: '#DCE5FD',
        },
        {
         _id: 3,
         image: 'https://kwoc.kossiitkgp.org/images/logo-light-gradient.svg',
         title: 'Kharagpur Winter Of Code',
         start_date: 'November ',
         end_date: 'january',
         perks: { swags: true , stipend: false, cash_price: false, internships_opportunity: false, certificates: true , surprise_gifts: true  },
         description: '',
        timeline: '',
         link: 'https://kwoc.kossiitkgp.org/',
         color: '#CAF4F4',
        },
        {
         _id: 4,
         image: 'https://raw.githubusercontent.com/opencodeiiita/Opencode-Collaborative-19/master/assets/img/opencode-banner.jpg',
         title: 'Opencode IIITA',
         start_date: 'January',
         end_date: 'NA',
         perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: false, certificates: false, surprise_gifts: true },
         description: 'OpenCode is a month-long open source program organized by GeekHaven IIIT Allahabad. OpenCode attracts talent from all over the world. People contribute to various open-source projects.',
         timeline: 'https://kwoc.kossiitkgp.org/',
         link: 'https://opencodeiiita.github.io/',
            color: '#CAEFD1',
        },
       {
         _id: 5,
         image: 'https://fossee.in/sites/all/themes/software_responsive_theme/img/logo.png',
         title: 'FOSSEE Summer Fellowship ',
         start_date: 'April',
         end_date: 'June',
         perks: { swags: false, stipend: false, cash_price: false, internships_opportunity: false, certificates: false, surprise_gifts: false },
         description: 'FOSSEE (Free/Libre and Open Source Software for Education) project promotes the use of FLOSS tools in academia and research. The FOSSEE project is part of the National Mission on Education through Information and Communication Technology (ICT), Ministry of Education (MoE), Government of India.',
         timeline: 'https://fossee.in/fellowship/2021',
         link: 'https://fossee.in/',
         color: '#FFFF7E',
        },
        {
        _id: 6,
        image: 'https://winterofcode.com/static/media/org-logo.935d7f48.png',
        title: 'Winter of Code by NSEC',
        start_date: 'November',
        end_date: 'january',
        perks: { swags: false, stipend: false, cash_price: false, internships_opportunity: false, certificates: true , surprise_gifts: true },
        description: 'Winter of Code is a program aimed to increase participation for the Google Summer of Code program among students in colleges and universities.',
        timeline: 'https://winterofcode.com/#js-organisations',
        link: 'https://winterofcode.com/#js-organisations', 
        color: '#FFA07A',
        },
        {
         _id: 7,
         image: 'https://slop.dscdaiict.in/static/media/logo.efdd8a78.png',
         title: 'Semester Long Project (SLoP by DA-IICT)',
         start_date: 'September',
         end_date: 'November',
         perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: true },
         description: 'Semester Long Projects or SLoP is an initiative by the Developer Student Club (DA-IICT), exclusively for students who are new to open source software development to get started with open source contributions.',
         timeline: 'https://winterofcode.com/#js-organisations',
         link: 'https://winterofcode.com/#js-organisations',   
         color: '#FFF2CC',
        },
        {
        _id: 8,
         image: 'https://dwoc.io/static/media/dwocfull-transparentW.b567c059.b567c059.png',
         title: 'Delta Winner Code(DWoC) ',
         start_date: 'October',
         end_date: 'January',
         perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: false, certificates: true, surprise_gifts: false },
         description: 'DWoC is a winter-long program organized by Delta Force, the coding club of NIT Trichy.',
         timeline: 'https://dwoc.io/',
         link: 'https://dwoc.io/',
         color: '#DCE5FD',
        },
        {
         _id: 9,
         image: 'https://devscript.tech/woc/img/WOC-logo.png',
         title: 'DevScript Winter of Code (DWoC)',
         start_date: 'November',
         end_date: 'March',
         perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: true },
         description: 'Winter of Code is an open-source program envisioned by DevScript that helps understand the paradigm of Open Source contribution. It aims to bring students into the world of open source development and see the power of unified problem-solving in real-time.',
         timeline: 'https://devscript.tech/woc/',
         link: 'https://devscript.tech/woc/',    
         color: '#aad0f6',
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
