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
            image: 'https://railsgirlssummerofcode.org/img/sprites/logo_subnavi.png',
            title: 'RGSOC',
            start_date: 'July',
            end_date: 'September',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: false },
            description: 'Rails Girls Summer of Code is a global fellowship program for women and non-binary coders. Students receive a three-month scholarship to work on existing Open Source projects and expand their skill set.',
            timeline: 'https://railsgirlssummerofcode.org/',
            link: 'https://railsgirlssummerofcode.org/',
            color: '#FFA07A',
        },
        {
            _id: 6,
            image: 'https://wiki.lfnetworking.org/s/-xuk22b/8401/c06149f9b8308a0beb580e4deed399f7fb2d372d/8.3.5/_/download/resources/com.atlassian.auiplugin:split_aui.splitchunk.vendors--f5244b0828/assets/confluence-white.svg',
            title: 'LFN Mentorship Program',
            start_date: 'January',
            end_date: 'June',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: false, certificates: true, surprise_gifts: false },
            description: 'The LF Networking (LFN) intern/mentorship program is aimed at creating a structured hands-on learning opportunity for new developers who may otherwise lack the opportunity to gain exposure to open source software development and entry to the LFN projects\' technical communities',
            timeline: 'https://wiki.lfnetworking.org/display/LN/LFN+Mentorship+Program#LFNMentorshipProgram-2020ProgramTimeline*',
            link: 'https://wiki.lfnetworking.org/display/LN/LFN+Mentorship+Program',
            color: '#B3EE3A',
        },
        {
            _id: 7,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/X.Org_Logo.svg/250px-X.Org_Logo.svg.png',
            title: 'The X.Org - EVoC',
            start_date: 'January ',
            end_date: 'August',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: false },
            description: 'The X.Org project provides an open source implementation of the X Window System. The development work is being done in conjunction with the freedesktop.org community. The X.Org Foundation is the educational non-profit corporation whose Board serves this effort, and whose Members lead this work.',
            timeline: 'https://summerofcode.withgoogle.com/how-it-works/#timeline',
            link: 'https://www.x.org/wiki/',
            color: '#FFF2CC',
        },
        {
            _id: 8,
            image: 'https://julialang.org/assets/infra/logo.svg',
            title: 'Julia Summer of Code',
            start_date: 'NA',
            end_date: 'NA',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: false },
            description: 'The Julia Seasons of Contributions (JSoC) are the seasonal programs for funding and/or mentoring students and other developers to contribute to the open source ecosystem. Below are the current programs that the Julia Language is participating in.',
            timeline: 'https://julialang.org/jsoc/',
            link: 'https://julialang.org/jsoc/',
            color: '#FFFF7E',
        },
        {
            _id: 9,
            image: 'http://static.fsf.org/nosvn/stickers/fsf.svg',
            title: 'Free Software Foundation Internship',
            start_date: 'NA',
            end_date: 'NA',
            perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: false },
            description: 'This is an educational opportunity to work with the organization that sponsors the GNU Project, publishes the GNU General Public License (GPL), and fights for software freedom.',
            timeline: 'https://www.fsf.org/volunteer/internships',
            link: 'https://www.fsf.org/volunteer/internships',
            color: '#CAF4F4',
        },
        {
            _id: 10,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Radare2.svg/398px-Radare2.svg.png',
            title: 'Radare Summer of Code',
            start_date: 'March',
            end_date: 'September',
            perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: false },
            description: 'The radare project started in February 2006 aiming to provide a free and simple command line interface for an hexadecimal editor supporting 64 bit offsets to search within and recover data from hard-disks.',
            timeline: 'https://rada.re/gsoc/2020/',
            link: 'https://rada.re/gsoc/2020/',
            color: '#aad0f6',
        },
        {
            _id: 11,
            image: 'https://summer.haskell.org/images/haskell-logo.png',
            title: 'Summer of Haskell',
            start_date: 'NA',
            end_date: 'NA',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: true, certificates: false, surprise_gifts: false },
            description: 'The Summer of Haskell is an effort by Haskell.Org to reach out to students and encourage them to contribute to the Haskell community with the aid of experienced mentors. This program is open to college students, 18 or older, in most countries.',
            timeline: 'https://developers.google.com/open-source/gsoc/timeline',
            link: 'https://summer.haskell.org/',
            color: '#aad0f6',
        },
        {
            _id: 12,
            image: 'https://avatars.githubusercontent.com/u/16903873?s=200&v=4',
            title: 'Open Mainframe Project',
            start_date: 'NA',
            end_date: 'NA',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: false },
            description: ' The Open Mainframe Project (OMP), an open source initiative that enables collaboration across the mainframe community to develop shared tool sets and resources',
            timeline: 'https://www.openmainframeproject.org/',
            link: 'https://www.openmainframeproject.org/',
            color: '#DCE5FD',
        },
        {
            _id: 13,
            image: 'https://processingfoundation.org/content/1-home/processing-social.jpg',
            title: 'Processing Foundation Fellowship',
            start_date: 'NA',
            end_date: 'NA',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: false },
            description: 'The Processing Foundation Fellowship program sponsors artists, designers, activists, educators, engineers, researchers, coders, and collectives—and many combinations of these—in projects that conceive a new direction for what our software and community can do',
            timeline: 'https://processingfoundation.org/fellowships',
            link: 'https://processingfoundation.org/fellowships',
            color: '#FDE0D9',
        },

        {
            _id: 14,
            image: 'https://rare-technologies.com/wp-content/uploads/2016/02/rare_image_only.png',
            title: 'RARE Technologies Student Incubator Programme',
            start_date: 'NA',
            end_date: 'NA',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: false },
            description: 'Our student Incubator offers a unique mix of academic mentorship, hand-on project work and technical training. It is a highly selective program where you will be mentored by an industry expert as you develop a pragmatic solution to a real-world problem using machine learning.',
            timeline: 'https://rare-technologies.com/incubator/#details',
            link: 'https://rare-technologies.com/incubator/',
            color: '#FFFF7E',
        },
        {
            _id: 15,
            image: 'https://fossasia.org/img/fossasia-squarewhite-path.png',
            title: 'FOSSASIA Internship Programme',
            start_date: 'Whole Year',
            end_date: '',
            perks: { swags: true, stipend: true, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: false },
            description: 'We create Open Source software and open hardware from science apps like the Pocket Science Lab (PSLab), event management systems (Eventyay), big "open" data analytics software (loklak), Open Source personal assistants (SUSI.AI), tools for development (Scrum Helper), to Android apps like the imaging app Phimp.me.',
            timeline: 'https://docs.google.com/forms/d/e/1FAIpQLScp8h5SIPVK5G2SAm5vtrv7KLKeOeYTxlZBkDRE6I7Toybt0A/viewform',
            link: 'https://fossasia.org/',
            color: '#aad0f6',
        },
        {
            _id: 16,
            image: 'https://www.hyperledger.org/wp-content/uploads/2021/01/Hyperledger_Logo_NoTag_Color.svg',
            title: 'Hyperledger Mentorship Program',
            start_date: 'Whole Year',
            end_date: '',
            perks: { swags: true, stipend: false, cash_price: false, internships_opportunity: true, certificates: true, surprise_gifts: false },
            description: 'Hyperledger is an open source collaborative effort created to advance cross-industry blockchain technologies. It is a global collaboration, hosted by The Linux Foundation, including leaders in finance, banking, IoT, supply chain, manufacturing and technology',
            timeline: 'https://wiki.hyperledger.org/display/INTERN/How+to+Apply',
            link: 'https://www.hyperledger.org/category/hyperledger-summer-mentorship-program',
            color: '#FFA07A',
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
        // 6 FFA07A
        // 7 FFF2CC 
        // 8 B3EE3A
        // 9 FFFF7E

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
