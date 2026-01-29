export const myProjects = [
  {
    id: 1,
    title: "Club Management Platform",
    description:
      "A web-based application to manage club activities, members, events, and announcements efficiently. Provides role-based access for admins and members, with streamlined event scheduling and participation tracking.",
    subDescription: [
      "Built a full-stack MERN application for managing clubs, members, and events, featuring secure JWT authentication, bcrypt password hashing, and OTP-based email verification with 10-minute expiration using Nodemailer.",
      "Developed a role-based club dashboard enabling member management, event creation/deletion, profile updates, and Google Form integration for event registrations.",
      "Created public-facing modules to browse clubs, view detailed club profiles, discover upcoming events, and register via external forms with seamless navigation.",
      "Designed a responsive, mobile-first UI using React 18, Vite, and Tailwind CSS, with RESTful APIs, input validation, protected routes, and a scalable backend architecture.",
    ],
    href: "https://club-management-vitap.netlify.app/",
    githubRepo: "https://github.com/SpoorthiMadala/club-management-vitap.git",
    liveLink: "https://club-management-vitap.netlify.app/",
    techStack: "MongoDB, Express.js, React, Node.js, JWT, Nodemailer, Tailwind CSS",
    logo: "",
    image: "/assets/projects/management.png",
  },
  {
    id: 2,
    title: "Todo List Application",
    description:
      "Developed a full-stack task management application using MongoDB, Express.js, React, and Node.js with secure email OTP authentication and JWT-based authorization. Implemented task CRUD operations, deadline-based sorting, and a responsive, modern UI with protected routes.",
    subDescription: [
      "Built a full-stack task management app with email OTP authentication and JWT-based secure login.",
      "Implemented CRUD operations for tasks with deadline-based sorting and completion tracking.",
      "Integrated email services using Nodemailer for OTP verification with expiry and resend support.",
      "Designed a responsive, modern UI with animations, color-coded deadlines, and protected routes.",
    ],
    href: "https://todo-list-by-spoorthi.netlify.app/",
    githubRepo: "https://github.com/SpoorthiMadala/Todo-List-App.git",
    liveLink: "https://todo-list-by-spoorthi.netlify.app/",
    techStack: "MongoDB, Express.js, React, Node.js, JWT, Nodemailer",
    logo: "",
    image: "/assets/projects/Todo-List-App.png",
  },
  {
    id: 3,
    title: "Sentiment Analysis using LSTM",
    description:
      "Built a deep learning–based sentiment analysis system to classify movie reviews as positive or negative using LSTM networks. Implemented complete NLP preprocessing and evaluated model performance using multiple classification metrics and visualizations.",
    subDescription: [
      "Preprocessed raw text data using NLTK, including tokenization, stopword removal, and sequence padding for model input.",

      "Designed and trained an LSTM neural network using TensorFlow/Keras with word embeddings for sentiment classification.",

      "Evaluated model performance using Accuracy, Precision, Recall, F1-Score, and Confusion Matrix visualization.",

      "Improved model reliability by analyzing misclassifications and outlining enhancements such as pre-trained embeddings and hyperparameter tuning.",
    ],

    githubRepo: "https://github.com/SpoorthiMadala/Sentiment-Analysis-LSTM.git",

    techStack: "Python, TensorFlow, Keras, NLTK, Pandas, NumPy, Scikit-learn",
    logo: "",
    image: "/assets/projects/LSTM.png",
  },
  {
    id: 4,
    title: "Story-Generator-Transformers",
    description:
      "Developed an AI-powered story generation web application that creates creative short stories from user prompts using a large language model. Built an interactive UI with Streamlit and integrated Hugging Face Transformers for real-time text generation.",
    subDescription: [
      "Implemented prompt-based story generation using Falcon-7B-Instruct via Hugging Face Transformers.",

      "Built an interactive Streamlit UI with adjustable token length for controlling output size.",

      "Integrated PyTorch-backed inference pipeline for efficient text generation.",

      "Designed the application with modular code structure, enabling easy model replacement and future deployment.",
    ],

    githubRepo: "https://github.com/SpoorthiMadala/Story-Generator-Transformers.git",

    techStack: "Python, Streamlit, Hugging Face Transformers, PyTorch, Falcon-7B-Instruct",
    logo: "",
    image: "/assets/projects/story-generator-transformer.png",
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/SpoorthiMadala",
    icon: "/assets/logos/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/spoorthi-madala/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/917815802271",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/spoorthi_madala/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const contactInfo = [
  {
    name: "Email",
    value: "spoorthimadala@gmail.com",
    href: "mailto:spoorthimadala@gmail.com",
    icon: "/assets/email.svg",
  },
  {
    name: "Phone",
    value: "+91 8143222032",
    href: "tel:+8143222032",
    icon: "/assets/socials/whatsApp.svg", // Reusing for now
  },
  {
    name: "LinkedIn",
    value: "spoorthi-madala",
    href: "https://www.linkedin.com/in/madalaspoorthi/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    value: "SpoorthiMadala",
    href: "https://github.com/SpoorthiMadala",
    icon: "/assets/logos/github.svg",
  },
  {
    name: "Website",
    value: "spoorthi-madala.netlify.app",
    href: "https://spoorthi-madala.netlify.app/",
    icon: "/assets/arrow-up.svg",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "C/C++", "Java", "JavaScript"]
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "MERN Stack (MongoDB, Express.js, React, Node.js)", "TailwindCSS"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"]
  },
  {
    category: "Core Competencies",
    items: ["Data Structures & Algorithms (DSA)", "CS Core Concepts"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git & GitHub", "Postman", "Docker"]
  },
  {
    category: "Artificial Intelligence & Machine Learning",
    items: ["AI/ML", "Deep Learning", "Natural Language Processing", "Data Science"]
  }
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    job: "Lapra Tech",
    date: "Dec 2025 - Ongoing",
    contents: [
      "Developed and deployed a subscription-based website with automated request handling, free access for the first 200 users, and rate limiting to control usage.",
      "Implemented secure subscription logic and scalable deployment with a responsive, production-ready UI.",
    ],
  },

];
