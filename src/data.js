// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Souvik Konar",
  email: "souvikkonar2005@gmail.com",
  phone: "+91 8927172288",
  phoneHref: "tel:+918927172288",
  linkedin: "https://linkedin.com/in/souvikkonar99",
  github: "https://github.com/SOUVIKKONAR",
  location: "Chennai, Tamil Nadu, India",
  resumes: [
    { label: "Resume: AI/ML", href: "/resumes/Souvik_Konar_Resume_AIML.pdf" },
    { label: "Resume: Software", href: "/resumes/Souvik_Konar_Resume_SDE.pdf" },
  ],
};

export const quickFacts = [
  { k: "Studying", v: "B.Tech CSE (Information Technology), SRM Institute of Science and Technology" },
  { k: "Graduating", v: "May 2027" },
  { k: "GPA", v: "8.86 / 10" },
  { k: "Based in", v: "Chennai, India" },
];

export const about = [
  "I'm a final-year Computer Science and Engineering (Information Technology) student at SRM Institute of Science and Technology. I train and evaluate machine learning models, then build the software around them so they run in real applications.",
  "My computer vision work includes a custom YOLOv8 model running on edge hardware and vision work on the AUV (autonomous underwater vehicle) team at SRMIST. On the software side I build REST APIs and React front ends with Django, Express and Flask.",
  "I also co-authored an IEEE conference paper on an IoT home automation system, so I'm comfortable taking a project from sensor to dashboard.",
];

export const skills = [
  { group: "Machine learning", items: "Model training, tuning and evaluation, computer vision (YOLOv8), data preprocessing, feature engineering" },
  { group: "ML libraries", items: "PyTorch, TensorFlow, OpenCV, NumPy, Pandas" },
  { group: "Languages", items: "Python, Java, JavaScript, C, C++, SQL" },
  { group: "Web and APIs", items: "React, Node.js, Express.js, Django REST Framework, Flask-SocketIO, Spring Boot, JWT, OpenAI API" },
  { group: "Cloud and data", items: "AWS Lambda, Render, MySQL, MongoDB, SQLite" },
  { group: "IoT", items: "ESP32, Arduino IDE, MQTT, real-time sensor streams" },
  { group: "Tools", items: "Git, GitHub, object-oriented design, technical documentation" },
];

export const projects = [
  {
    title: "RoadSense",
    kind: "Real-time pothole and waste detection",
    featured: true,
    stack: "YOLOv8, ESP32-CAM, Arduino, Flask-SocketIO, React, Leaflet",
    points: [
      "Prepared and labeled a custom image dataset, then trained and evaluated a YOLOv8 model that detects two classes: potholes and waste.",
      "Deployed the system on ESP32-CAM and Arduino edge hardware.",
      "Tuned confidence thresholds and added server-side input validation to filter low-confidence predictions and reduce false positives.",
      "Built a Flask-SocketIO backend that streams live inference results to a React and Leaflet map dashboard.",
    ],
    github: "https://github.com/SOUVIKKONAR/Pothole-and-Garbage-Detection-System-",
  },
  {
    title: "Cadence",
    kind: "Employee management platform",
    stack: "Django REST Framework, React, JWT, Render",
    points: [
      "Built during my Revolite Infotech internship with JWT authentication and role-based access control.",
      "Attendance, leave and payroll tracking modules backed by REST APIs and a relational database.",
      "Deployed on Render with environment-based configuration.",
    ],
    github: "https://github.com/SOUVIKKONAR/employee-management",
  },
  {
    title: "IntelliCode",
    kind: "AI-assisted code editor",
    stack: "React, Monaco Editor, Express.js, OpenAI API",
    points: [
      "Code editor that debugs, explains and optimizes code through the OpenAI API.",
      "REST endpoints and prompt flows that return structured JSON.",
      "Request validation and configurable API routing between client and server.",
    ],
    github: "https://github.com/SOUVIKKONAR/CodeEditor",
  },
  {
    title: "OutBox",
    kind: "Production-ready bulk email scheduler",
    stack: "React, TypeScript, Vite, Node.js, Express, Prisma, PostgreSQL, Redis, Elasticsearch, BullMQ, Docker",
    points: [
      "Built a full-stack email scheduling platform supporting bulk scheduling via CSV/text with a React + TypeScript frontend.",
      "Implemented distributed rate limiting atomically via Redis Lua scripts, enforcing both global and per-sender hourly limits with automatic re-scheduling when limits reset.",
      "Enforced minimum send delays across concurrent BullMQ workers using a Redis-backed atomic spacer for true parallel processing without timing violations.",
      "Added restart persistence by storing all jobs in PostgreSQL and re-queuing pending jobs on startup — no OS cron, BullMQ native delayed queues handle precision scheduling.",
      "Generated deterministic idempotency keys per email to prevent duplicate enqueuing; integrated Elasticsearch for fuzzy full-text search isolated per user.",
      "Wired Google OAuth and Slack OAuth notifications; surfaced queue monitoring via Bull Board at /admin/queues.",
    ],
    github: "https://github.com/SOUVIKKONAR/OutBox_Email_Scheduler",
  },
  {
    title: "RADAR",
    kind: "AI-powered IT infrastructure anomaly detection & incident response",
    stack: "Python, Kafka, Redis, PostgreSQL, React, RAG, LLM, Docker, CI/CD, AWS, Power BI",
    points: [
      "Designed a five-layer production platform: Pattern Recognition → Kafka Streaming → Microservices (Redis + PostgreSQL) → RAG + Vector DB + LLM → React Dashboard.",
      "Ingested IT telemetry (CPU, memory, network, latency, error rates) through Kafka; applied ML-based anomaly detection with preprocessing and feature engineering.",
      "Used Redis for real-time state management and PostgreSQL for historical incident records with a shared incident management layer on top.",
      "Integrated Retrieval-Augmented Generation (RAG) with a vector database and LLM to auto-explain detected anomalies and recommend troubleshooting actions.",
      "Delivered insights through a React dashboard, Power BI reports, and Excel exports; packaged the entire system with Docker Compose and a CI/CD pipeline targeting AWS.",
    ],
    github: "https://github.com/SOUVIKKONAR/RADAR",
  },
  {
    title: "Underwater Debris Detector",
    kind: "Real-time marine debris detection system",
    stack: "Python, YOLOv8, OpenCV, Tkinter, NumPy, Matplotlib",
    points: [
      "Built two detection implementations (basic and advanced) using YOLOv8 nano for real-time multi-threaded video stream processing at 30 FPS.",
      "Mapped 70+ COCO object categories to debris types with a five-tier severity classification: CRITICAL (e-waste, large furniture) down to SAFE (organic matter).",
      "Implemented underwater image enhancement and overlaid live performance metrics (FPS, inference time, confidence) directly on the video feed.",
      "Designed a dark-theme GUI with real-time analytics graphs: processing speed, objects-per-frame, and inference latency trends.",
    ],
    github: "https://github.com/SOUVIKKONAR/Autonomus_underwater_vehicle",
  },
  {
    title: "Semantic Document Retrieval",
    kind: "NLP semantic search with SBERT",
    stack: "Python, Sentence Transformers (all-MiniLM-L6-v2), Scikit-learn, NumPy",
    points: [
      "Encoded a document corpus and user queries into dense vector embeddings using Sentence-BERT (SBERT) for context-aware retrieval beyond keyword matching.",
      "Ranked documents by cosine similarity and evaluated retrieval quality using Precision, Recall, F1 Score, and Mean Reciprocal Rank (MRR).",
      "Designed the pipeline to be easily extendable with FAISS/ChromaDB vector stores, BM25 hybrid search, and a Streamlit web interface.",
    ],
    github: "https://github.com/SOUVIKKONAR/Natural_Language_Processing_Project",
  },
];

export const experience = [
  {
    role: "Python Full Stack Intern",
    org: "Revolite Infotech Pvt. Ltd.",
    place: "Chennai, India",
    when: "Jun 2026 to Jul 2026",
    points: [
      "Built Cadence, a full-stack employee management platform, as the main internship project using Django REST Framework and React.",
      "Designed REST APIs, relational database models and JWT-based authentication under mentorship.",
    ],
    cert: "https://drive.google.com/file/d/1UIGLRJAEAVs8WVFZLL0jgzdkJctRukhC/view?usp=sharing",
  },
  {
    role: "Vocational Trainee",
    org: "Steel Authority of India Limited (SAIL)",
    place: "Durgapur Steel Plant, West Bengal",
    when: "Dec 2025",
    points: [
      "11-day training across the Blast Furnace, Coke Ovens, RMHP, Sinter Plant and SMS departments.",
      "Hands-on exposure to industrial manufacturing operations and plant-level engineering workflows.",
    ],
    cert: "https://drive.google.com/file/d/1zn5RcqVKS1R0afkS6xxuWlEbkrU0-E6j/view?usp=sharing",
  },
];

export const publication = {
  title: "Intelligent Home Automation System With Weather Forecasting and Alert Integration",
  venue: "13th IEEE International Conference, published on IEEE Xplore",
  when: "Feb 2025 to Dec 2025",
  points: [
    "Developed NexHome, an IoT home automation system on ESP32 with multiple environmental sensors and rule-based decision logic.",
    "Implemented automation and real-time alerts with Spring Boot and the Telegram Bot API.",
    "Achieved a 30% improvement in energy efficiency through optimized IoT communication protocols.",
  ],
  href: "https://ieeexplore.ieee.org/document/11404845",
};

export const certificates = [
  { name: "SAP Generative AI Developer", when: "Mar 2026 to Mar 2027", note: "Built generative AI applications on SAP BTP" },
  { name: "Intel Unnati AIoT Program", when: "May 2025", note: "AIoT systems combining AI and IoT" },
  { name: "NPTEL certifications", when: "2024 to 2025", note: "Programming in Java, Design and Analysis of Algorithms, Database Management Systems" },
  { name: "Hackathons", when: "2024", note: "Bitathon 2024 (qualified 3 of 4 rounds), Smart India Hackathon 2024 (internal edition)" },
];

export const certificatesFolder =
  "https://drive.google.com/drive/folders/1G4vo4BqABIrJoCG3Y_RovWlpayYbw52L?usp=sharing";
