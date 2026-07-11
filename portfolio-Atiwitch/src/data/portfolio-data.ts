export const profile = {
    name: "Atiwitch Jitamornpak",
    nickname: "Up",
    role: "AI Engineer",
    tagline:
        "Bridging the gap between Applied Statistics and Enterprise AI Solutions.",
    location: "Bangkok, Thailand",
    email: "jitamornpak.up@gmail.com",
    phone: "(+66) 92-858-6565",
    github: "https://github.com/AtiwitchJ",
    linkedin: "https://www.linkedin.com/in/atiwitch-jitamornpak-b93571323/",
    about:
        "AI Engineer with a strong foundation in Applied Statistics and Machine Learning. Experienced in developing enterprise-level AI solutions at CP ALL, including RAG-based chatbots (Latta) and ASR integrations. Passionate about building scalable AI infrastructure and transitioning toward Full-Stack Data & AI Development.",
    imgSrc: "/cat-cats.png",
};

// Technical Proficiency - Organized by Category with Proficiency Levels
export const technicalSkills = {
    programmingLanguages: {
        category: "Programming Languages",
        skills: [
            { name: "Python", level: "Advanced", years: "3+" },
            { name: "TypeScript", level: "Intermediate", years: "1+" },
            { name: "SQL", level: "Advanced", years: "3+" },
            { name: "GO", level: "Intermediate", years: "<1" },
            { name: "R", level: "Intermediate", years: "2+" },
            { name: "Java", level: "Intermediate", years: "2+" },
            { name: "JavaScript", level: "Intermediate", years: "2+" },
            { name: "PHP", level: "Beginner", years: "<1" },
        ],
    },
    aiFrameworks: {
        category: "AI & LLM Frameworks",
        skills: [
            { name: "LangChain", level: "Advanced", years: "1+" },
            { name: "LlamaIndex", level: "Intermediate", years: "1+" },
            { name: "MCP", level: "Intermediate", years: "<1" },
            { name: "Ollama", level: "Intermediate", years: "<1" },
            { name: "TensorFlow / Keras", level: "Intermediate", years: "2+" },
            { name: "PyTorch", level: "Intermediate", years: "1+" },
            { name: "Scikit-learn", level: "Advanced", years: "3+" },
        ],
    },
    fullStack: {
        category: "Full-Stack & Backend",
        skills: [
            { name: "Next.js", level: "Intermediate", years: "1+" },
            { name: "Node.js", level: "Intermediate", years: "2+" },
            { name: "Gin (GO)", level: "Intermediate", years: "<1" },
            { name: "Fiber (GO)", level: "Intermediate", years: "<1" },
            { name: "Bun", level: "Beginner", years: "<1" },
            { name: "API Gateway / Kong", level: "Intermediate", years: "<1" },
            { name: "N8N", level: "Intermediate", years: "1+" },
        ],
    },
    databases: {
        category: "Databases & Caching",
        skills: [
            { name: "MongoDB", level: "Intermediate", years: "1+" },
            { name: "Redis", level: "Intermediate", years: "1+" },
            { name: "MySQL", level: "Advanced", years: "3+" },
            { name: "Supabase", level: "Intermediate", years: "1+" },
            { name: "Qdrant (Vector DB)", level: "Intermediate", years: "1+" },
            { name: "BullMQ", level: "Intermediate", years: "<1" },
            { name: "RabbitMQ", level: "Beginner", years: "<1" },
        ],
    },
    dataScience: {
        category: "Data Science & Analytics",
        skills: [
            { name: "Pandas", level: "Advanced", years: "3+" },
            { name: "NumPy", level: "Advanced", years: "3+" },
            { name: "Statmodels", level: "Intermediate", years: "2+" },
            { name: "Power BI", level: "Intermediate", years: "2+" },
            { name: "Tableau", level: "Intermediate", years: "1+" },
            { name: "SPSS", level: "Intermediate", years: "2+" },
            { name: "Minitab", level: "Intermediate", years: "2+" },
            { name: "Excel / VBA", level: "Advanced", years: "4+" },
        ],
    },
    devOps: {
        category: "DevOps & Infrastructure",
        skills: [
            { name: "Docker", level: "Intermediate", years: "2+" },
            { name: "Git / GitHub", level: "Advanced", years: "3+" },
            { name: "Nginx", level: "Intermediate", years: "<1" },
            { name: "Claude Code", level: "Intermediate", years: "<1" },
            { name: "UV (Python PM)", level: "Beginner", years: "<1" },
            { name: "Jupyter Notebook", level: "Advanced", years: "3+" },
        ],
    },
};

// Legacy skills array for backward compatibility
export const skills = [
    {
        category: "Core Programming",
        items: ["Python (Advanced)", "TypeScript", "GO", "SQL", "R", "Java", "JavaScript", "PHP"],
        iconName: "Code" as const,
    },
    {
        category: "AI & Frameworks",
        items: [
            "LLM Integration",
            "LangChain",
            "LlamaIndex",
            "MCP (Model Context Protocol)",
            "Vector Embeddings",
            "ASR (Speech-to-Text)",
            "Ollama",
        ],
        iconName: "Brain" as const,
    },
    {
        category: "Full-Stack & Backend",
        items: ["Next.js", "Node.js", "Bun", "Gin", "Fiber", "N8N", "API Gateway", "Kong"],
        iconName: "Code" as const,
    },
    {
        category: "Data & Databases",
        items: ["MongoDB", "Redis", "Supabase", "MySQL", "Qdrant (Vector DB)", "BullMQ", "RabbitMQ"],
        iconName: "Database" as const,
    },
    {
        category: "ML & Data Science",
        items: [
            "Machine Learning (Scikit-learn)",
            "Deep Learning (TensorFlow/Keras)",
            "PyTorch",
            "Pandas",
            "Numpy",
            "Statmodels",
        ],
        iconName: "BarChart" as const,
    },
    {
        category: "DevOps & Infrastructure",
        items: [
            "Docker",
            "Nginx",
            "Git/GitHub",
            "UV (Python Package Manager)",
            "Claude Code",
        ],
        iconName: "Terminal" as const,
    },
];

export const experience = [
    {
        company: "CP ALL Public Company Limited",
        role: "AI Engineer (Internship)",
        period: "Nov 2025 – Jun 2026",
        details: [
            "Developed 'Latta' - Enterprise AI Chatbot using RAG architecture for KM retrieval and automated password resets via natural language.",
            "Built Speech-to-Text pipeline using OpenAI Whisper (ASR) to generate high-accuracy scripts and captions for learning platforms.",
            "Implemented full-stack solutions with Next.js, TypeScript, GO (Gin/Fiber), MongoDB, Redis, and LangChain/LlamaIndex.",
            "Integrated message queue systems (BullMQ, RabbitMQ) and API Gateway (Kong) for scalable microservices architecture.",
        ],
    },
    {
        company: "Freelance",
        role: "Developer (Freelance)",
        period: "Nov 2025 – Mar 2026",
        details: [
            "Spearheading the development of a Unified Omnichannel Chat Platform to streamline customer service operations.",
            "Integrating APIs from various communication channels (Email, LINE, Facebook) into a centralized system for real-time monitoring and management.",
        ],
    },
    {
        company: "School of Science, KMITL",
        role: "Student Research Assistant (Department of Statistics)",
        period: "July 2025 – Oct 2025",
        details: [
            "Assisted Associate Professor in conducting statistical analysis and data preprocessing for academic research.",
            "Implemented data cleaning pipelines using Python to handle large datasets, ensuring data integrity for both statistical modeling and model training.",
        ],
    },
    {
        company: "Freelance",
        role: "Statistical Analyst",
        period: "Jan 2025 – Mar 2025",
        details: [
            "Performed advanced statistical analysis for a Master's degree thesis using SPSS.",
            "Provided consultation on research methodology, hypothesis testing, and regression model interpretation.",
        ],
    },
];

export const achievements = [
    {
        year: "2025",
        title: "Empowering Thai Businesses for Global Change",
        desc: "AI Workforce Development with 42 Bangkok Platform",
        iconName: "Trophy" as const,
    },
    {
        year: "2022-2025",
        title: "Team Manager, KMITL Esports Club",
        desc: "Utilized data analytics to evaluate player performance & manage team strategy.",
        iconName: "Users" as const,
    },
    {
        year: "2024",
        title: "Top 25 Finalist, J-MAT Award No.32",
        desc: "Marketing Plan Competition (Data Analyst Role)",
        iconName: "Trophy" as const,
    },
    {
        year: "2024",
        title: "Participant, Bolt.new Hackathon",
        desc: "World's Largest Hackathon (LLM Innovation Track)",
        iconName: "Code" as const,
    },
    {
        year: "2023",
        title: "Participant, SAS x KMITL Hackathon",
        desc: "Analytics Simulation Game",
        iconName: "BarChart" as const,
    },
    {
        year: "2023",
        title: "Ranked 13.57/13.57, 42 Bangkok",
        desc: "KMITL Discovery Piscine - Intensive Coding Bootcamp",
        iconName: "Terminal" as const,
    },
    {
        year: "2021",
        title: "Top 8 National Finalist",
        desc: "DBD Business Idea Competition (Applied Data for Innovation)",
        iconName: "Trophy" as const,
    },
];

export const projects = [
    {
        title: '"Latta" Enterprise AI Bot',
        role: "AI Engineer @ CP ALL",
        desc: "Enterprise AI chatbot using RAG architecture for CP ALL. Enables instant KM retrieval, automated password resets, and IT support via natural language. Built with microservices architecture.",
        stack: ["Next.js", "TypeScript", "GO", "MongoDB", "Redis", "LangChain", "LlamaIndex", "BullMQ"],
        categories: ["Enterprise", "AI & RAG", "Web & Backend"],
        image:
            "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Unified Omnichannel Chat",
        role: "Software Engineer",
        desc: "Centralized Chat Aggregation System integrating Email (SMTP/IMAP), LINE, and Facebook APIs into a single dashboard.",
        stack: ["API Integration", "Webhooks", "Backend"],
        categories: ["Enterprise", "Web & Backend"],
        image:
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Auto Script Generation",
        role: "AI Engineer @ CP ALL",
        desc: "Speech-to-Text pipeline using OpenAI Whisper (ASR) to generate high-accuracy text scripts and captions from video content for CP ALL's learning platform. Includes queue management with BullMQ.",
        stack: ["Python", "OpenAI Whisper", "ASR", "TypeScript", "BullMQ", "Redis"],
        categories: ["Enterprise", "AI & RAG", "Automation"],
        image:
            "https://images.unsplash.com/photo-1589254065878-42c9da9e2bc6?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Research Assistant AI",
        role: "AI Developer",
        desc: "Intelligent document assistant utilizing RAG and Vector Embeddings to help query and summarize complex research documents efficiently.",
        stack: ["Next.js", "RAG", "Supabase", "LLM"],
        categories: ["Research", "AI & RAG", "Web & Backend"],
        image:
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Mdscholar",
        role: "Backend Developer",
        desc: "Bolt.new Hackathon Project. Microservice architecture to convert PDFs into structured Markdown for RAG systems using CUDA/GPU acceleration.",
        stack: ["FastAPI", "Redis", "Docker", "CUDA"],
        categories: ["Hackathon", "Web & Backend", "AI & RAG"],
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Stock Market Analysis with LLM",
        role: "AI Researcher",
        desc: "Hybrid system leveraging LLMs to analyze news sentiment combined with quantitative models for better stock prediction.",
        stack: ["Python", "LLM APIs", "Scikit-learn", "Web Scraping"],
        categories: ["Research", "AI & RAG", "Data Science & ML"],
        image:
            "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Stroke Risk Prediction",
        role: "Data Scientist",
        desc: "Comparative study between Deep Learning and Machine Learning models to find the most accurate predictor for early stroke diagnosis.",
        stack: ["TensorFlow", "Keras", "Data Mining"],
        categories: ["Data Science & ML", "Research"],
        image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Campus Recruitment Classification",
        role: "ML Engineer",
        desc: "Implemented a Logistic Regression classifier to automate candidate screening based on historical hiring data.",
        stack: ["Python", "Scikit-learn"],
        categories: ["Data Science & ML"],
        image:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Gas Store DB & Product System",
        role: "Full-Stack Developer",
        desc: "Designed a Relational Database and web app to digitize inventory flow, ensuring real-time data accuracy.",
        stack: ["PHP", "MySQL", "HTML"],
        categories: ["Web & Backend", "Database"],
        image:
            "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Stock Analysis Automation",
        role: "Developer",
        desc: "Automated pipeline using Python (yfinance) and VBA Macros to process historical market data and calculate compound interest scenarios.",
        stack: ["Python", "Excel", "VBA"],
        categories: ["Automation", "Data Science & ML"],
        image:
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "NYC Airbnb Market Analysis",
        role: "Data Analyst",
        desc: "Data pipeline to clean and merge disparate datasets (.csv, .tsv, .xlsx) to analyze NYC Airbnb market trends.",
        stack: ["Python", "Pandas", "Data Cleaning"],
        categories: ["Data Engineering", "Data Science & ML"],
        image:
            "https://images.unsplash.com/photo-1496417263034-38ec4f0d6b21?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Job Change Prediction Pipeline",
        role: "Data Engineer",
        desc: "Optimized data storage and processing for a large customer dataset by implementing efficient data typing and filtering strategies.",
        stack: ["Python", "Pandas", "Data Engineering"],
        categories: ["Data Engineering"],
        image:
            "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Sports Data Hypothesis Testing",
        role: "Statistical Analyst",
        desc: "Verified hypothesis regarding goal averages in women's vs men's FIFA World Cup matches using Wilcoxon-Mann-Whitney U test.",
        stack: ["Python", "SciPy", "Hypothesis Testing"],
        categories: ["Statistics", "Data Science & ML"],
        image:
            "https://images.unsplash.com/photo-1579952363873-27f3bde9be51?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Global Temp Forecasting",
        role: "Statistical Analyst",
        desc: "Applied Time Series Analysis (ARIMA) to accurately forecast future global temperature changes, identifying long-term trends.",
        stack: ["Minitab", "Excel", "ARIMA"],
        categories: ["Statistics", "Data Science & ML"],
        image:
            "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Blood Pressure Factors",
        role: "Data Analyst",
        desc: "Utilized Multiple Linear Regression in R to isolate variables and validate relationships affecting upper blood pressure.",
        stack: ["R Studio", "Excel", "Regression"],
        categories: ["Statistics"],
        image:
            "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=600",
    },
    {
        title: "Suki Teenoi Customer Insight",
        role: "BI Analyst",
        desc: "Consolidated feedback data and created interactive dashboards in Looker Studio to visualize customer sentiment.",
        stack: ["Looker Studio", "Google Sheets"],
        categories: ["BI & Visualization"],
        image:
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
    },
];

export const education = [
    {
        school: "King Mongkut's Institute of Technology Ladkrabang",
        degree: "B.Sc. Applied Statistics and Data Analytics",
        period: "Exp. Mar 2026",
        gpa: "3.06",
        logo: "/kmitl.png",
    },
    {
        school: "Ramkhamhaeng University",
        degree: "B.B.A. Logistics Management",
        period: "2023 – 2024",
        gpa: "Completed",
        logo: "/ru.png",
    },
];

export const filterCategories = [
    "All",
    "Enterprise",
    "AI & RAG",
    "Data Science & ML",
    "Web & Backend",
    "Statistics",
];

export const softSkills = [
    "การพูดคุยและการนำเสนออย่างเป็นธรรมชาติ",
    "มารยาทในที่ทำงานและการวางตัว",
    "ทักษะในการตัดสินใจและนำเสนอแนวทาง",
    "การทำงานในขอบเขตที่จำกัด",
    "การวิเคราะห์ระบบและความเสี่ยงของโครงการ",
];

export const careerGoals = [
    {
        title: "Full-Stack Data",
        description: "Data Science + Data Engineering",
        status: "In Progress",
    },
    {
        title: "Full-Stack Developer",
        description: "Specializing in Backend Development",
        status: "Active",
    },
    {
        title: "AI Engineer",
        description: "Continuous learning in AI/ML",
        status: "Active",
    },
    {
        title: "Master's Degree",
        description: "Planning for graduate studies",
        status: "Planned",
    },
];
