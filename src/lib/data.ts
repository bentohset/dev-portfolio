import { ProjectType } from "@/features/projects";

export const experiencesData = [
    {
        role: "Software Engineer",
        company: "Google Developer Student Club NUS",
        period: "Aug 2023 - Present",
        skills: [
            "Next.js", "TypeScript", "Node.js", "Express"
        ],
        concise: "",
        points: [
            "Working in a team of 10 to build a volunteer management system for a Non-Profit Orgnaisation MINDS MYG Singapore catered towards special needs beneficiaries."
        ],

    },
    {
        role: "Undergraduate Teaching Assistant",
        company: "National University of Singapore",
        period: "Aug 2023 - Present",
        skills: [
            "Java", "OOP"
        ],
        concise: "",
        points: [
            "AY 2023/2024 Sem 1: CS2113 - Software Engineering and OOP (Java)"
        ],

    },
    {
        role: "Software Engineer Intern",
        company: "Trilogy Technologies",
        period: "May 2023 - Aug 2023",
        skills: [
            "React", "Python",
            "MS Azure", "Flask", "PostgreSQL", "Docker", "C/C++",
        ],
        concise: "Built monitoring system to ingest data from 1K+ IoT devices and transformed into an insightful dashboard. Prototyped with Ultra-Wideband upcoming technology to localize high precision coordinates.",
        points: [
        "Designed and built backend architecture with data piplines single-handedly with MQTT, Edge Gateway and Azure Functions to handle high volume data processing and scalability for an IoT monitoring system with 1K+ sensors.",
            "Developed a full-stack web application to visualise and analyse IoT data using React, Flask and PostgreSQL and adopted a Factory Method design pattern while achieving >95% unit test coverage.",
            "Prototyped a high precision indoor location coordinate system from scratch with Ultra-Wideband technology, ESP32 microcontrollers and a Python GUI."
        ],

    }
]

export const projectsData: ProjectType[] = [
    {
        title: 'trippin',
        type: "self",
        desc: 'A collaborative trip planner web app designed to help users plan location-based itineraries',
        image: '/trippin.jpg',
        url: 'https://trippin-web.vercel.app/',
        github: 'https://github.com/bentohset/trippin',
        summary: `A self-initiated project which came about the problem of planning a trip to Malaysia with my friends. \
            We wanted to plan our itinerary based on points of interest and found it troublesome to constantly switch between google maps and google sheets.\
            <br/>
            Trippin is a trip planner that solves the problem. It comes with real-time collaboration, autocomplete and suggestive locations.\
            Users can plan their itinerary side by side with a map for point-of-interest based planning.\
            <br/><br/>
            It follows modern conventions of JWT authentication and MVC pattern`,
        stack: ['Next.js', 'Express', 'Node.js', 'MongoDB', 'Google Maps API'],

    },
    {
        title: 'food recommender',
        type: "self",
        desc: 'A recommendation system which utilizes machine learning to generate restaurants based on user preferences',
        image: '/GoEats.jpg',
        url: 'https://t.me/goeats_bot',
        github: 'https://github.com/bentohset/go-eats',
        summary: `To solve the problem of indecisiveness when choosing a food place. It adopts a Microservice architecture deployed as a Kubernetes cluster on Azure Kubernetes Service with Terraform. \
            It consists of a telegram bot as a gRPC client, a content-based filtering machine learning model evaluated with TF-IDF as a gRPC server, a REST API web server and a frontend portal for user submissions and approvals.\
            PostgreSQL hosted on Azure Database is used. \
            <br/><br/>
            Users can select preferences of mealtime, budget, mood and cuisine-dont-wants using the telegram bot. It then generates a diverse list of restaurants satisfying the user preferences. \
            The user can then select specific restaurant for a more personalised recommendation which generates similar resturants based on reviews. Check out the documentation process in my GitHub!`,
        stack: ['Python', 'Go', 'gRPC', 'MS Azure', 'Kubernetes', , 'Docker', 'Next.js', 'PostgreSQL', 'Selenium', 'Scikit-learn'],
    },
    {
        title: 'officequest',
        type: "hack",
        sub: 'DSTA Code_EXP 2023 Finalist',
        desc: `A mobile app which gamifies the office worker experience with a gacha and reward tier system`,
        image: '/officeq.png',
        url: '',
        github: 'https://github.com/bentohset/dsta-officequest',
        summary: `In a small team of 5, my team developed a mobile app to solve the problem of a desk-bound office worker.\
            Taking inspiration from the popular Google Huat Pals and Battlepass system in common games, this app encourages social interaction amongst employees and transforms boring tasks into exciting quest.\
            Users can embark on customized quests to work towards an Pantry Pal ticket.\
            Once all pals are collected, users can redeem attractive prizes.\
            <br/><br/>
            RESTful API was implemented with a microservices and facade pattern. Features include JWT authentication and a unique OTP generation gimmick for quests. `,
        stack: ['React Native', 'Express', 'Node.js', 'MongoDB'],
    },
    {
        title: 'mykampung',
        type: "hack",
        sub: 'SUTD What the Hack 2022 Winner',
        desc: 'A mobile app designed to help residents within HDBs to connect with their neighbours',
        image: '/myKampungApp.png',
        url: '',
        github: 'https://github.com/bentohset/sutdwth-mykampung',
        summary: `With the advancement of technology, people are becoming increasinly isolated and stuck in their own world of devices. \
            Using this app, we can bring back the "kampung" spirit of togetherness as some things are done best with the people around you.\
            In a small team of 4 with a limited time constraint of 48hrs, my team worked hard to finish this hack to fruition and eventually won first place.\
            <br/><br/>
            This app is aimed towards residents of the same HDB block. It has features of an announcement board and, chat groups for carpooling and food sharing.\
            Firebase is integrated within the app and serves as our backend as a one-fits-all solution in this limited time constraint.
            `,
        stack: ['React Native', 'Google Cloud Platform'],
    },
    {
        title: 'developer portfolio',
        type: "self",
        desc: 'My personal portfolio site',
        image: '/devportfolio.jpg',
        url: '',
        github:  'https://github.com/bentohset/dev-portfolio',
        summary: `A personal portfolio website to showcase my technical skills, projects and experiences.\
            It also serves as my stint to learn ThreeJS, blender and 3d modelling to explore new technologies.`,
        stack: ['Next.js', 'ThreeJS', 'Blender', 'MagicaVoxel'],
    },
]

export const userData = {
    resumeUrl: "https://drive.google.com/file/d/1FHdhDG5VQEvKlY3sfuHknhDeBM0JL-c9/view?usp=sharing",
    contacts: {
        linkedin: "https://www.linkedin.com/in/benjamin-chr-toh",
        github: "https://github.com/bentohset",
        email: "mailto:toh.benjamin@u.nus.edu",
    },
    skills: {
        languages: ['C/C++', 'Python', 'Javascript', 'Java', 'HTML', 'CSS', 'Go', 'SQL'],
        frameworks: ['React', 'React Native', 'Next.js', 'Flask', 'TailwindCSS', 'Nodejs', 'Express', 'ThreeJS'],
        tools: ['Git/Github', 'Docker', 'Figma', 'Kubernetes', 'Terraform'],
        database:['MongoDB', 'PostgreSQL', 'Google Cloud', 'MS Azure'],
    },
    about: {
        title: 'Aspiring Software Engineer',
        bio: "I am a penultimate year <span style='color: #fa7970;'}>Computer Engineering</span> student at the National University of Singapore (NUS) with a minor in <span style='color: #fa7970;'}>Data Engineering</span>. I have a keen interest in software engineering, data pipelines, machine learning, databases and everything in between!",
        iLove: ["building things", "simplicity", "efficiency", "tech for good", "exploring new tech", "creating problems", "solving problems", "new experiences", "discussing tech"]
    },
};
