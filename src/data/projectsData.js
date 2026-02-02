import triageFlowImage from '../assets/triage.jpg';
import beachMapImage from '../assets/beachmap.png';
import recycleOrNotImage from '../assets/recycleornot.jpg';
import ecoMapImage from '../assets/ecomap.png';

export const projectsData = [
  {
    id: 1,
    title: "EcoMap",
    description: "EcoMap is an open source interactive map created in collaboration with the non profit Cultivating Self to help people find integrative healing resources near them. It is grounded in Cultivating Self’s five pillars: Ecological Medicine, Cultural Medicine, Food and Farming as Medicine, Ecorestoration, and Spirituality as Medicine. Users can explore all resources in an open, inclusive General Mode or use a Personalized Mode that tailors results through an onboarding survey, allowing them to see relevant clinics and track appointments. Community members can also suggest new resources, which are reviewed by administrators to support long term sustainability.",
    github: "https://github.com/mawerb/EcoMAP",
    link: "https://eco-map-mauve.vercel.app",
    technologies: ["React","JavaScript", "MapboxGL", "Python", "Flask" ,"PostgreSQL"],
    image: ecoMapImage
  },
  {
    id: 2,
    title: "TriageFlow",
    description: "AI-powered clinical triage system that provides nurses with instant, expert-level decision support for ESI assessments. The platform uses Fetch.ai agents to orchestrate Claude and ChromaDB for a RAG-based workflow, ensuring high-acuity patients are prioritized without delay. Developed with synthetic HL7 FHIR–compliant patient data, the system features a mobile-responsive UI and real-time notifications to reduce nurse burnout and improve patient flow. ",
    link: "https://calhacks2025-nine.vercel.app/",
    github: "https://github.com/ethan-ngo/calhacks2025",
    technologies: ["React", "JavaScript", "Flask", "Python", "Claude API", "ChromaDB", "Docker", "Twillio"],
    image: triageFlowImage // Add image path here, e.g., "/path/to/image.jpg" or import from assets
  },
  {
    id: 3,
    title: "BeachMap",
    description: "A campus discovery platform that helps CSULB students find their community through real-time event mapping and location-based services. BeachMap integrates with Google Calendar for seamless scheduling and displays nearby campus activities, helping students discover events while enabling clubs to expand their reach. The platform supports 200+ concurrent users at peak times and includes real-time event tracking, landmark information, and a JWT-protected admin dashboard for content management.",
    link : "https://beachmap.org",
    github: "https://github.com/mawerb/BeachMap",
    technologies: ["React", "JavaScript", "Django","Python","PostgreSQL","Leaflet.js","RestAPI","Docker"],
    image: beachMapImage
  },
  {
    id: 4,
    title: "Recycle Or Not",
    description: "Developed a real-time web application that detects recyclable objects using a camera to address low household recycling rates and contamination. Built in a team of four, the AI-powered solution uses TensorFlow and YOLOv8 for object detection, OpenCV for real-time computer vision, and React for the web interface to help users correctly identify recyclable items at the point of disposal.",
    github: "https://github.com/joshmre/computer-vision-webapp",
    link: "https://www.youtube.com/watch?v=oJyRTPOPXxo",
    technologies: ["React","JavaScript", "Flask","Python", "Django", "OpenCV", "TensorFlow", "YOLOv8"],
    image: recycleOrNotImage
  },
];


// Template for future projects
// {
//     id: 4,
//     title: "Project Title 4",
//     description: "Your fourth project description. Focus on impact and technical challenges.",
//     link: "https://github.com/yourusername/project4",
//     technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
//     image: null
//   }