export const experiencesData = [
  {
    id: 1,
    title: "B.S. Computer Science (GPA: 4.0)",
    organization: "California State University, Long Beach",
    dateRange: "2024 – Present",
    description: [
      "Completed coursework in software engineering, algorithms, system programming, Operating Systems, Computer Architecture,and data structures.",
      "Focus on full-stack development and collaborative team projects.",
    ],
    type: "education",
  },
  {
    id: 3,
    title: "Undergraduate Researcher",
    organization: "CSULB College of Engineering Dr. Jelena Trajkovic Lab",
    dateRange: "December 2025 – Present",
    description: [
      "Researching gait authentication using machine learning models and previous experiment data on active sensors in shoes to determine gait variance to create automated testing framework for gait authentication",
      "Utilizing PyTorch, Pandas, and NumPy for data preprocessing and model training",
    ],
    type: "work",
  },
  {
    id: 2,
    title: "Open Source Micro-Internship",
    organization: "CodeDay Labs",
    dateRange: "January 2026 – Present",
    description: [
      "Working on a team of 4 to implement a notify me when run is complete feature for the workflow management platform, Dagster.",
      "Implemented the feature using React, TypeScript, GraphQL through Graphene, and Python.",
    ],
    type: "work",
  },
  // Add more entries; list oldest to newest within each type.
  // Component displays Education first (newest first), then Work (newest first).
];
