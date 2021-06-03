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
            image: 'https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2016/10/codeheat-logo-big.png?w=1200',
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
        {
                _id: 3,
                image: 'https://pbs.twimg.com/profile_images/1295732034279813123/ykLQzTnJ.png',
                title: 'Hacktoberfest',
                start_date: 'October',
                end_date: 'November',
                perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: false, certificates: true, surprise_gifts: true },
                description: 'Hacktoberfest is a month-long celebration of open source software run by DigitalOcean in partnership with GitHub and Twilio. Hacktoberfest is open to everyone in our global community!',
                timeline: 'https://hacktoberfest.digitalocean.com/details/',
                link: 'https://hacktoberfest.digitalocean.com/',
                color: '#FDE0D9',
            },
             {
        _id: 4,
        image: 'https://24pullrequests.com/assets/logo-8a77737f86fec8def19a1c9a605c9841dbd44e59f243ed3bf64bbdf3214d6fa1.png',
        title: '24 Pull Requests',
        start_date: 'December',
        end_date: '',
        perks: { swags: false, stipend: false, cash_price: false, internships_opportunity: false, certificates: false, surprise_gifts: false },
        description: '24 Pull Requests goal is to encourage contribution to open source projects during December. The site suggests open projects, highlights tickets that are good for new contributors, provides guides for contributing and promotes good contributions submitted each day.',
        timeline: 'https://24pullrequests.com/about',
        link: 'https://24pullrequests.com/',
        color: '#aad0f6',
    },
    {
            _id: 5,
            image: 'https://halite.io/assets/images/full_logo.svg',
            title: 'Halite AI Bot Challenge',
            start_date: 'NA',
            end_date: 'NA',
            perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: false, certificates: true, surprise_gifts: false },
            description: 'Halite is an artificial intelligence challenge, created by Two Sigma. Participants write bots using the programming language of their choice to compete in an original online multiplayer game.',
            timeline: '',
            link: 'https://halite.io/',
            color: '#DCE5FD',
        },
        {
                _id: 6,
                image: 'https://www.oss.kr/plugins/oss/components/Themes/OSS/assets/images/logo_oss.gif',
                title: 'OSS World Challenge',
                start_date: 'May',
                end_date: 'Septemner',
                perks: { swags: false, stipend: false, cash_price: false, internships_opportunity: false, certificates: true, surprise_gifts: false },
                description: 'Open Source Software Competency Plaza (OSSCP)is a group managed by the National IT-Industry PromotionAgency (NIPA),supporting the Open Source Software PromotionThe group is dedicated to cultivate open sourcedemands of local and international market,as well as to build virtuous cycle of industrial ecology.',
                timeline: 'https://www.oss.kr/en_oss_world_challenage',
                link: 'https://www.oss.kr/en_main',
                color: '#FFF2CC',
            },
            {
                    _id: 7,
                    image: 'http://sigmm.org/sites/all/images/acmlogo.gif',
                    title: 'ACM MM Open Source Software Competition',
                    start_date: 'NA',
                    end_date: 'NA',
                    perks: { swags: false, stipend: false, cash_price: false, internships_opportunity: false, certificates: true, surprise_gifts: false },
                    description: 'ACM Multimedia is the premier international conference in the area of multimedia within the field of computer science.The Open Source Software Competition is an important part of the ACM Multimedia program. The competition, now in its 17th edition, is intended to celebrate, encourage and promote the contribution of researchers, software developers and educators to advance the field by providing the community with implementations of codecs, middleware, frameworks, toolkits, libraries, multimedia players, applications, authoring tools, and other multimedia software.',
                    timeline: 'NA',
                    link: 'http://sigmm.org/Resources/software/ossc',
                    color:'#DCE5FD'
            },
            {
                    _id: 8,
                    image: 'https://gssoc.girlscript.tech/images/type.png',
                    title: 'Girlscript Summer of Code',
                    start_date: 'March',
                    end_date: 'June',
                    perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: false },
                    description: 'GirlScript Summer of Code is the 3 month long Open Source program during summers conducted by GirlScript Foundation, started in 2018, with an aim to help beginners get started with Open Source Development while encouraging diversity.',
                    timeline: 'https://gssoc.girlscript.tech/schedule.html',
                    link: 'https://gssoc.girlscript.tech/',
                    color: '#CAEFD1',
                },
                {
                        _id: 9,
                        image: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGuByHM_j-aQA/company-logo_200_200/0/1594278147309?e=2159024400&v=beta&t=3mRaf9gtDgodJ98CYbYQA8sHUvmvTyfVK6RURxeKbqs',
                        title: 'HackinCodes Contributors Hack',
                        start_date: 'June',
                        end_date: 'October',
                        perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: false, certificates: true, surprise_gifts: false },
                        description: 'HakinCodes is established in 2020 with a mission to empower youth i.e. students, developers, engineers, and innovators irrespective of any differences by giving them equal opportunities to grow and learn.',
                        timeline: 'https://hakincodes.tech/ch20.html',
                        link: 'https://hakincodes.tech/',
                        color: '#FDE0D9',
                    },
                
                    {
                            _id: 10,
                            image: 'https://swoc.tech/img/logo-2.png',
                            title: 'Script Winter of Code SWOC',
                            start_date: 'November',
                            end_date: 'March',
                            perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: false, certificates: false, surprise_gifts: false },
                            description: 'Script Winter of Code is an open-source program envisioned by the Script Foundation. It aims to bring students into the world of open source development and see the power of unified problem-solving in real time. The projects that we will host have been carefully hand-picked to invigorate creative thinking and encourage collaboration among all participants',
                            timeline: 'https://swoc.tech/',
                            link: 'https://swoc.tech/',
                            color: '#CAF4F4',
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
