const userData = {
    resumeUrl: "",
    contacts: {
        linkedin: "https://www.linkedin.com/in/benjamin-chr-toh",
        github: "https://github.com/bentohset",
        email: "mailto:toh.benjamin@u.nus.edu",
    },
    skills: {
        languages: ['C/C++', 'Python', 'Javascript', 'Java', 'HTML', 'CSS', 'Swift'],
        frameworks: ['React', 'React Native', 'Next.js', 'Flask', 'TailwindCSS', 'Nodejs', 'Express', 'SwiftUI'],
        tools: ['Git/Github', 'Docker', 'Figma'],
        database:['MongoDB', 'PostgreSQL', 'Google Cloud', 'MS Azure'],
    },
    experiences: [
        {
            role: "Software Engineer Intern",
            company: "Trilogy Technologies",
            period: "May 2023 - Aug 2023",
            skills: {
                Frontend: ["React", "Pygame"],
                Backend: ["MS Azure", "Flask", "PostgreSQL", "Docker", "C/C++"],

            },
            concise: "",
            points: [
                "Designed and built backend architecture single-handedly with MS Azure IoTEdge and Functions to handle high volume data processing and scalability for IoT monitoring.",
                "Developed a full-stack web application for an MNC to monitor and analyse IoT sensors using React, Flask and PostgreSQL with analytical tools.",
                "Prototyped a coordinate tracker from scratch using Ultra-Wideband technology and ESP32 for high precision location calculations with a Pygame GUI"
            ],

        }
    ],
    about: {
        title: 'Aspiring Software Engineer',
        bio: "I am a penultimate year <span style='color: #fa7970;'}>Computer Engineering</span> student at the National University of Singapore (NUS) with a minor in <span style='color: #fa7970;'}>Data Engineering</span>. I have a keen interest in fullstack development, machine learning, databases and everything in between!",
        iLove: ["building things", "simplicity", "basketball", "being efficient", "software for good", "exploring new tech", "creating problems", "solving problems"]
    },
    projects: [
        {
            title: 'trippin',
            desc: 'A collaborative trip planner web app designed to help users plan location-based itineraries',
            image: '/trippin.jpg',
            url: 'https://trippin-web.vercel.app/'
        },
        {
            title: 'officequest',
            sub: 'DSTA Code_EXP 2023',
            desc: `A mobile app which gamifies the office worker experience with a gacha and reward tier system`,
            image: '/officeq.png',
            url: 'https://github.com/bentohset/dsta-officequest'
        },
        {
            title: 'mykampung',
            sub: 'SUTD What the Hack 2022 Winner',
            desc: 'A mobile app designed to help residents within HDBs to connect with their neighbours',
            image: '/myKampungApp.png',
            url: 'https://github.com/bentohset/sutdwth-mykampung'
        },
        {
            title: 'developer portfolio',
            desc: 'My personal portfolio site to learn threeJS',
            image: '',
            url: ''
        },
        {
            title: 'food recommender',
            desc: 'Work in progress!',
            image: ''
        },
    ]

}

export default userData;