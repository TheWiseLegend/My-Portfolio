const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Volunteer Work",
        link: "#volunteer",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 3.75, suffix: "/4.0", label: "CGPA in Computer Science" },
    { value: 61, suffix: "+", label: "Hours of Full-Stack Training" },
    { value: 7, suffix: "+", label: "Completed Projects" },
    { value: 10, suffix: "+", label: "Technical Certifications Earned" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Continuous Learning",
        desc: "Backed by 10+ technical certifications across back-end, front-end, databases, AI, and version control. Continuously expanding technical depth through hands-on projects and formal training programs.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Cross-Cultural Communication",
        desc: "Collaborating in diverse teams and leading community events with clarity and empathy.",
    },
    {
        imgPath: "/images/codeLogo1.png",
        title: "Full-Stack Development",
        desc: "Capable of building end-to-end applications using modern stacks like React Native, Node.js, and PostgreSQL. Experienced in deploying scalable systems on AWS and creating responsive, user-focused interfaces.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Git",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Git",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Working at the GCC Games was a fast-paced, high-pressure challenge that sharpened my organizational, technical, and communication skills across cultures and roles.",
        imgPath: "/images/OCAImage.png",
        logoPath: "/images/OCALogo.png",
        title: "Event Coordinator & Data Entry – GCC Games 2022",
        date: "November 2021 – May 2022",
        responsibilities: [
            "Registered athletes, coaches, referees, and VIPs into the GCC Games 2022 system.",
            "Coordinated logistical and catering needs across teams, referees, and venues.",
            "Recorded live volleyball match statistics with Bornan Sports Technology and ensured real-time data accuracy.",
        ],
    },
    {
        review: "This role built my confidence in communication and teamwork. I learned how to listen, adapt quickly, and deliver value to customers in a fast-paced environment.",
        imgPath: "/images/xciteImage.png",
        logoPath: "/images/xciteLogo.png",
        title: "Sales Associate – Xcite Alghanim Electronics",
        date: "January 2022 – September 2022",
        responsibilities: [
            "Learned to understand customer needs and tailor product recommendations effectively.",
            "Developed persuasion and negotiation skills to close high-value sales.",
            "Improved communication and adaptability in a fast-paced retail environment.",
        ],
    },
    {
        review: "University has been my foundation — not only in core CS knowledge but also in building discipline and team collaboration through academic and extracurricular projects.",
        imgPath: "/images/unimyLogo.png",
        logoPath: "/images/unimyLogo1.png",
        title: "Bachelor of Computer Science – UNIMY",
        date: "September 2022 – Present",
        responsibilities: [
            "Maintaining a 3.75 CGPA while balancing projects and certifications.",
            "Participated in student organizations and volunteered in campus events.",
            "Completed coursework in algorithms, databases, and web development.",
        ],
    },
    {
        review: "My first full-stack project. It gave me hands-on experience in authentication, backend logic, and frontend design. A huge step in becoming a real-world developer.",
        imgPath: "/images/krafty.jpg",
        logoPath: "/images/kraftsyLogo.jpg",
        title: "Kraftsy – Artisan E-Commerce Platform",
        date: "Early 2023",
        responsibilities: [
            "Built a secure full-stack platform using Django, JavaScript, and SQLite.",
            "Implemented multi-role user authentication and product order flow.",
            "Designed and structured the product/order database from scratch.",
        ],
    },
    {
        review: "This was my most complete app. I tackled real deployment, complex scheduling logic, and user-focused mobile features. It felt like building a real startup MVP.",
        imgPath: "/images/fieldmateImage.png",
        logoPath: "/images/fieldmateLogo.png",
        title: "FieldMate – Futsal Booking App",
        date: "Mid 2023",
        responsibilities: [
            "Developed a full-stack mobile app using React Native and Node.js.",
            "Built a backend with Express and PostgreSQL, deployed on AWS.",
            "Integrated a 'Looking for Game' system for real-time team discovery.",
        ],
    },
    {
        review: "This project challenged me with 3D logic, AI prompt handling, and UI optimization. It pushed my frontend skills into new territory and taught me how to debug deeply.",
        imgPath: "/images/3dtshirtImage.png",
        logoPath: "/images/3dtshirtLogo.png",
        title: "3D T-Shirt Customizer – AI-Powered SaaS Tool",
        date: "Late 2023 – Early 2024",
        responsibilities: [
            "Developed a 3D t-shirt editor using React, Three.js, and Vite.",
            "Integrated AI-driven texture generation with prompt-based logic.",
            "Enabled design export and built a backend with Node.js and Express.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const volunteers = [
    {
        role: "Program Coordinator & Supervisor",
        organization: "WAMY's Program 'Qarar'",
        period: "Oct 2024",
        description: [
            "Supervised volunteer teams and facilitated community-building events",
            "Developed organizational systems to improve program efficiency",
            "Coordinated logistics and resources for program activities",
        ],
    },
    {
        role: "MC & Event Coordinator",
        organization: "Islamic Public Figure Event (Dr. Haitham Talat)",
        period: "Aug 2024",
        description: [
            "Hosted a 3-hour talk for over 100 attendees as the main event MC",
            "Coordinated behind-the-scenes logistics for smooth event execution",
            "Facilitated Q&A sessions and audience engagement activities",
        ],
    },
    {
        role: "High Committee Member",
        organization: "Usrah International Bureau – University Club",
        period: "2024",
        description: [
            "Planned and executed university events promoting community engagement",
            "Developed strategies to increase student participation in campus activities",
            "Collaborated with diverse teams to create meaningful cultural programs",
        ],
    },
    {
        role: "Volunteer Personal Gym Coach",
        organization: "Self-Initiated",
        period: " Active",
        description: [
            "Provided personalized fitness guidance to fellow students",
            "Created workout programs tailored to individual goals and fitness levels",
            "Promoted health discipline and consistent training habits",
        ],
    },
    {
        role: "Cultural Representative",
        organization: "iEXPO – International Cultural Festival",
        period: "June 2024",
        description: [
            "Represented Palestine through research-based educational materials",
            "Facilitated live discussions about cultural heritage and traditions",
            "Created engaging displays showcasing Palestinian history and culture",
        ],
    },
    {
        role: "Researcher & Content Writer",
        organization: "Telposhow – Largest Arab YouTuber in Malaysia",
        period: "Active",
        description: [
            "Created research-based scripts covering social awareness topics",
            "Wrote detailed scripts for educational video content",
            "Contributed to content planning and thematic development",
        ],
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    volunteers,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
