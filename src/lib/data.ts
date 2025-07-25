import { BlogType } from "@/features/blogs";
import { AchievementType } from "@/features/experience";
import { ProjectType } from "@/features/projects";
import { BrainCog, Cat, GaugeCircleIcon, TerminalSquare } from "lucide-react";

export const experiencesData = [
    {
        role: "Software Engineer",
        company: "ByteDance, Singapore",
        logo: "/icons/exp/bytedance.png",
        period: "Jan 2025 - Present",
        skills: [
            "Java", "C++", "Go", "HDFS"
        ],
        concise: "",
        points: [
        ],

    },
    {
        role: "Software Engineer Intern",
        company: "SAP, Singapore",
        logo: "/icons/exp/sap.png",
        period: "Jul 2024 - Present",
        skills: [
            "Kubernetes", "Python", "Go", "Flask"
        ],
        concise: "Developed and optimized features for a highly available and scalable distributed infrastructure for training and serving machine learning models",
        points: [
            "Developed and optimized features for a highly available and scalable distributed infrastructure for training and serving machine learning models using Kubernetes, Docker, Python and Go.",
            "Enhanced the availability of a high-volume Python proxy server by implementing load balancing and retry strategies, resulting in improved performance and reliability under high traffic conditions.",
            "Made open-source contributions to KServe in Python and Go, enhancing system flexibility to product needs.",
            "Implemented circuit breaker pattern for microservices within a distributed system using Kubernetes, Istio and Python to enhance resiliency of a proxy server."
        ],

    },
    {
        role: "Software Engineer Intern",
        company: "GovTech Singapore",
        logo: "/icons/exp/govtech.png",
        period: "Jan 2024 - Jun 2024",
        skills: [
            "Node.js", "Azure Functions", "React", "GitLab"
        ],
        concise: "Optimized and developed new features for a Cloud Operations Management Platform for 55+ Singapore government agencies",
        points: [
            "Optimized and developed new features for a scalable cloud-native Cloud Operations platform that provides info-comm security and compliance services across 55+ public service agencies with React, Node.js and Azure Functions",
            "Reduced Azure DevOps CI/CD pipeline execution time by 45% by upgrading and migrating to a modern framework",
            "Optimized backend REST API loading time by 35% through effective optimization strategies",
            "Implemented an end-to-end testing framework in Playwright leading to a significant decrease in production bugs"
        ],

    },
    {
        role: "Software Engineer",
        company: "Google Developer Student Club NUS",
        logo: "/icons/exp/gdsc.png",
        period: "Aug 2023 - Apr 2024",
        skills: [
            "Next.js", "TypeScript", "Node.js", "Express"
        ],
        concise: "Developed a volunteer management system for a Non-Profit Orgnaisation to manage 10,000+ volunteers",
        points: [
            "Developed a full-stack volunteer management system in a cross-functional team for a Non-Profit Orgnaisation to manage 10,000+ volunteers using Next.js, TypeScript, Express, Node.js, Docker and PostgreSQL.",
            "Implemented integration with AWS S3 for seamless and efficient data storage of secure files."
        ],

    },
    {
        role: "Undergraduate Teaching Assistant",
        company: "National University of Singapore",
        logo: "/icons/exp/nus.png",
        period: "Aug 2023 - Present",
        skills: [
            "Java", "OOP"
        ],
        concise: "AY 2023/2024 Sem 1: CS2113 - Software Engineering and OOP (Java)",
        points: [
            "AY 2023/2024 Sem 1: CS2113 - Software Engineering and OOP (Java)"
        ],

    },
    {
        role: "Software Engineer Intern",
        company: "Trilogy Technologies",
        logo: "/icons/exp/trilogy.png",
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

export const achievementsData: AchievementType[] = [
    {
        title: "NUS Hack and Roll",
        award: "Winner",
        period: "Jan 2024",
        image: "/icons/exp/nus.png",
        desc: "Won out of 244 projects",
    },
    {
        title: "PSA Code Sprint",
        award: "Finalist",
        period: "Jan 2024",
        image: "/icons/exp/psa.png",
        desc: "Won out of 244 projects",
    },
    {
        title: "DSTA Code_Exp",
        award: "Finalist",
        period: "Jan 2024",
        image: "/icons/exp/dsta.png",
        desc: "Won out of 244 projects",
    },
    {
        title: "SUTD What the Hack",
        award: "Winner",
        period: "Dec 2022",
        image: "/icons/exp/sutd-logo.png",
        desc: "Won out of 244 projects",
    },
]

export const projectsData: ProjectType[] = [
    {
        title: 'Cents',
        type: "self",
        desc: 'Finance Tracker iOS App',
        image: '/cents.png',
        url: 'https://apps.apple.com/app/id6747306900',
        summary: `Cents is a  <span style='color: #CEA5FB;'}>finance tracking iOS app</span> meant to be 100% free with no ads and paywalls. \
            It has a minimal iOS-centric design with powerful features that help you manage your finances and budgets with ease. \
            <br/><br/> \
            It is built with <span style='color: #CEA5FB;'}>SwiftUI</span> for native performance.`,
        stack: ['Swift', 'SwiftUI'],

    },
    {
        title: 'WhatTimeMeet',
        type: "self",
        desc: 'Modern Meeting Scheduler',
        image: '/whattimemeet.png',
        url: 'https://whattimemeet.com',
        github: 'https://github.com/bentohset/whattimemeet',
        summary: `Whattimemeet is a lightweight and <span style='color: #CEA5FB;'}>modern meeting scheduler</span> for quick meetings on the go. \
            It is an <span style='color: #CEA5FB;'}>improvement</span> from the well-known When2meet scheduler by improving its <span style='color: #CEA5FB;'}>responsiveness and load times</span>. \
            <br/><br/> \
            It is built with <span style='color: #CEA5FB;'}>performance</span> in mind and utilizes an efficient backend server written in <span style='color: #CEA5FB;'}>Go</span>`,
        stack: ['Next.js', 'React', 'TypeScript', 'Go', 'Fiber', 'PostgreSQL', 'AWS EC2', 'Docker'],

    },
    {
        title: 'Luna AI',
        type: "hack",
        desc: 'AI Call Agent for Government Services',
        sub: "NUS Hack & Roll 2024 - Winner",
        image: '/lunaai.png',
        url: '',
        github: 'https://github.com/bentohset/hnr24-lunaAI',
        summary: `LunaAI is a <span style='color: #CEA5FB;'}>Multi-Lingual Voice Agent</span> for government services (CPF in particular) \
            in addition to a <span style='color: #CEA5FB;'}>customer service platform</span> that provides real-time call logs, an editable central knowledge base for the AI, and a dashboard enabling human agents to monitor for pending actions .\
            <br/><br/>
            It utilizes <span style='color: #CEA5FB;'}>TwiML conversational model</span> and <span style='color: #CEA5FB;'}>AWS Polly nerual voices</span> from embedded data generated from <span style='color: #CEA5FB;'}>OpenAI's text-embedding-ada-002 model</span> through <span style='color: #CEA5FB;'}>Retrieval Augmented Generation</span>.`,
        stack: ['Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'Twilio', 'PineconeDB', 'OpenAI', 'AWS Polly Neural Voices'],

    },
    {
        title: 'Startr',
        type: "self",
        desc: 'Networking Platform',
        image: '/startr.jpeg',
        url: 'https://startr.me/',
        summary: `Startr is a platform for people to network at events. We employed our solution at <span style='color: #CEA5FB;'}>Unicon 2024</span>, hosted by NUS, and garnered a <span style='color: #CEA5FB;'}>100+ users</span>. \
            Our platform allows users to explore other users, connect with them and chat with each other. On top of this, we pair users up with each other to increase interaction.\
            <br/><br/>
            Personally, I worked on the <span style='color: #CEA5FB;'}>pairing algorithm</span>, implementing the <span style='color: #CEA5FB;'}>Stable Roommate Problem by Irving 1985</span>, and also the <span style='color: #CEA5FB;'}>recommendation system utilizing BERT embedding models from Huggingface</span>.\
            I leveraged <span style='color: #CEA5FB;'}>Redis Message Queue</span> to allow asynchronous processing and model training for compute-intensive tasks too.`,
        stack: ['Next.js', 'React', 'TypeScript', 'Socket.IO', 'Python', 'Flask', 'MongoDB', 'Redis', 'Tensorflow', 'Huggingface'],

    },
    {
        title: 'TikiWallet',
        type: "hack",
        desc: 'E-wallet with offline capabilities',
        sub: "TikTok Hackathon 2023 - Participant",
        image: '/tikiwallet.png',
        url: '',
        github: 'https://github.com/bentohset/tiktok-tikiwallet',
        summary: `TikiWallet is an e-wallet with offline transaction support. It partitions your wallet into 2 - online and offline. \
            In addition to your typical online transactions between users, users are able to send and receive transactions offline by <span style='color: #CEA5FB;'}>being in contact with the receiver</span>.\
            TikiWallet is aimed at regions with no consistent stable internet or mobile data on the go.\
            <br/><br/>
            We leveraged <span style='color: #CEA5FB;'}>Stripe API</span> for online payments and <span style='color: #CEA5FB;'}>WiFi-Direct</span>, the first of its kind payment method, for offline transactions.`,
        stack: ['Flutter', 'Express', 'Node.js', 'PostgreSQL', 'Google Cloud', 'Stripe', 'Twilio'],
    },
    {
        title: 'Logiflow',
        type: "hack",
        desc: 'Supply Optimization Platform',
        sub: "PSA Codesprint 2023 - Finalist",
        image: '/logiflow.png',
        url: 'https://logiflowpsa.vercel.app/',
        github: 'https://github.com/bentohset/psa-logiflow',
        summary: `Logiflow is a cutting-edge solution for optimizing demand and supply in the container logistics ecosystem. It addresses the critical challenge of efficient demand-supply management, ensuring a seamless flow of cargo. \
            Logiflow provides the following features: an <span style='color: #CEA5FB;'}>interactive dashboard, time-series forecasting of demand and supply, optimization simulations and realtime sentiment analysis</span>.\
            <br/><br/>
            Machine learning techniques used were <span style='color: #CEA5FB;'}>Seasonal Decomposition of Time Series using Loess, ARIMA models, non-linear least squares optimization and sentiment analysis</span>.`,
        stack: ['React', 'JavaScript', 'Flask', 'Scikit-learn'],

    },
    {
        title: 'Go Eats',
        type: "self",
        desc: 'Food Recommendation System',
        image: '/goeats.png',
        url: 'https://t.me/goeats_bot',
        github: 'https://github.com/bentohset/go-eats',
        summary: `To solve the problem of indecisiveness when choosing a food place. It adopts a <span style='color: #CEA5FB;'}>Microservice architecture</span> deployed as a <span style='color: #CEA5FB;'}>Kubernetes cluster on Azure Kubernetes Service with Terraform</span>. \
            It consists of a telegram bot as a <span style='color: #CEA5FB;'}>gRPC client</span>, a <span style='color: #CEA5FB;'}>content-based filtering machine learning model</span> with TF-IDF as a <span style='color: #CEA5FB;'}>gRPC server</span>, a <span style='color: #CEA5FB;'}>REST API web server</span> and a <span style='color: #CEA5FB;'}>frontend portal</span> for user submissions and approvals.\
            PostgreSQL hosted on Azure Database is used. \
            <br/><br/>
            Users can select preferences using the telegram bot which then generates a diverse list of restaurants. \
            The user can then select specific restaurant for a more personalised recommendation which generates similar resturants based on reviews. Check out the documentation process in my GitHub!`,
        stack: ['Python', 'Go', 'gRPC', 'MS Azure', 'Kubernetes', 'Docker', 'Next.js', 'PostgreSQL', 'Selenium', 'Scikit-learn'],
    },
    {
        title: 'Trippin',
        type: "self",
        desc: 'Collaborative Trip Planner web app for location-based planning',
        image: '/trippin.png',
        url: 'https://trippin-web.vercel.app/',
        github: 'https://github.com/bentohset/trippin',
        summary: `A self-initiated project which came about the problem of planning a trip to Malaysia with my friends. \
            We wanted to plan our itinerary based on points of interest and found it troublesome to constantly switch between google maps and google sheets.\
            <br/><br/>
            Trippin is a trip planner that solves the problem. It comes with <span style='color: #CEA5FB;'}>real-time collaboration, autocomplete and suggestive locations</span>.\
            Users can plan their itinerary side by side with a map for <span style='color: #CEA5FB;'}>point-of-interest based planning</span>.\
            <br/><br/>
            It follows modern conventions of JWT authentication and MVC pattern`,
        stack: ['Next.js', 'JavaScript', 'Express', 'Node.js', 'MongoDB', 'Google Maps API'],

    },
    {
        title: 'OfficeQuest',
        type: "hack",
        sub: 'DSTA Code_EXP 2023 - Finalist',
        desc: `Office Gamification Mobile App with a gacha and reward tier system`,
        image: '/oq.png',
        url: '',
        github: 'https://github.com/bentohset/dsta-officequest',
        summary: `In a small team of 5, my team developed a mobile app to solve the problem of a desk-bound office worker.\
            Taking inspiration from the popular Google Huat Pals and Battlepass system in common games, this app encourages social interaction amongst employees and transforms boring tasks into exciting quest.\
            Users can embark on customized quests to work towards an Pantry Pal ticket.\
            Once all pals are collected, users can redeem attractive prizes.\
            <br/><br/>
            Implemented RESTful API with a microservices and facade pattern. Features include JWT authentication and a unique OTP generation gimmick for quests. `,
        stack: ['React Native', 'Express', 'Node.js', 'MongoDB'],
    },
    {
        title: 'myKampung',
        type: "hack",
        sub: 'SUTD What the Hack 2022 - Winner',
        desc: 'Social Media Mobile App to connect HDB residents',
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
        stack: ['React Native', 'Firebase'],
    },
    {
        title: 'Developer Portfolio',
        type: "self",
        desc: 'Personal Website',
        image: '/devportfolio.jpg',
        url: '',
        github:  'https://github.com/bentohset/dev-portfolio',
        summary: `A personal portfolio website to showcase my technical skills, projects and experiences.\
            It also serves as my stint to learn ThreeJS, blender and 3d modelling to explore new technologies.`,
        stack: ['Next.js', 'TypeScript', 'ThreeJS', 'Blender', 'MagicaVoxel'],
    },
]

export const blogsData: BlogType[] = [
  {
    title: "Concurrency in C++, Go and Rust",
    subtitle: "A deep dive into common concurrency features offered in C++, Go and Rust. \
      The different concurrency paradigms - Locking, Channels and Asynchronous - will be discussed along with how one should design software with respect to concurrency and parallelism.",
    url: "https://medium.com/@bentohset",
    platform: "Medium",
    topics: ["tech", "theory"],
    date: "Dec 12 2024",
    image: "concurrency.png"
  },
  {
    title: "Learning Vim and Neovim",
    subtitle: "Venturing into the depths of Vim, a word which strikes fear in the hearts of many. \
      How I started picking up Vim and subsequently Neovim for my development environment, and why you should too.",
    url: "https://medium.com/@bentohset",
    platform: "Medium",
    topics: ["tech", "lifestyle"],
    date: "Dec 12 2024",
    image: "vim-neovim.jpg"
  }
]

export const userData = {
    resumeUrl: "https://www.overleaf.com/project/64d1febe616ce90ea4d190f1",
    contacts: {
        linkedin: "https://www.linkedin.com/in/ben-toh",
        github: "https://github.com/bentohset",
        email: "mailto:toh.benjamin123@gmail.com",
    },
    interests: [
        {
            title: "Software Engineering",
            desc: "Me love to build big systems. Me love to code",
            icon: TerminalSquare,
        },
        {
            title: "Machine Learning",
            desc: "Big computer brain",
            icon: BrainCog,
        },
        {
            title: "Distributed Systems",
            desc: "I can count to 1000 fast",
            icon: GaugeCircleIcon,
        },
        {
            title: "Cats",
            desc: "Who doesn't love cats",
            icon: Cat,
        }
    ],
    skills: {
        languages: ['C', 'C++', 'Java', 'Go', 'Python', 'Rust', 'Javascript', 'SQL', 'Swift'],
        frameworks: ['SpringBoot', 'Nodejs', 'Fiber', 'Express', 'Flask', 'FastAPI', 'React', 'Next.js', 'SwiftUI'],
        tools: ['Git/Github', 'GitLab', 'Docker', 'Figma', 'Kubernetes', 'Terraform', 'Hadoop'],
        database:['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'Google Cloud', 'Microsoft Azure', 'Amazon Web Service'],
    },
    about: {
        title: 'Software Engineer',
        bio: "I am a Software Engineer at ByteDance and a <span style='color: #CEA5FB;'}>Computer Engineering</span> graduate from the National University of Singapore (NUS) with a minor in <span style='color: #CEA5FB;'}>Data Engineering</span>. I have a keen interest in software engineering, distributed systems, machine learning, databases and everything in between!",
        iLove: ["building things", "simplicity", "efficiency", "tech for good", "exploring new tech", "creating problems", "solving problems", "new experiences", "discussing tech"]
    },
};

export const navigation = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Blog", href: "/blog" },
];
