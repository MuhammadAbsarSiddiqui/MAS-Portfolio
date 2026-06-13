export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  date: string;
  type: 'full-time' | 'internship' | 'contract';
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: "360xpert",
    role: "Software Engineer",
    company: "360Xpert Solution",
    location: "Karachi, Pakistan",
    date: "Oct 2025 – Present",
    type: "full-time",
    bullets: [
      "Leading end-to-end development of a Pharma CRM using Next.js and React",
      "Translating business requirements into technical user stories and managing product backlog",
      "Coordinating API integration and feature delivery while writing production frontend code"
    ]
  },
  {
    id: "sbp",
    role: "Intern",
    company: "State Bank of Pakistan (SBP)",
    location: "Karachi, Pakistan",
    date: "Jun 2025 – Aug 2025",
    type: "internship",
    bullets: [
      "Analyzed global third-party risk regulations to suggest improvements for local banking practices",
      "Applied analytical skills to understand financial regulator operations and national banking sector",
      "Collaborated with IT teams to align Pakistan's practices with international standards"
    ]
  },
  {
    id: "banoqabil",
    role: "Frontend Web Developer (Intern)",
    company: "Bano Qabil",
    location: "Karachi, Pakistan",
    date: "Dec 2024 – Mar 2025",
    type: "internship",
    bullets: [
      "Developed a responsive restaurant website using React.js with modern UI patterns",
      "Built modular React components for reusability and maintainable code architecture",
      "Implemented responsive design using HTML5, CSS3, and JavaScript (ES6+)"
    ]
  }
];
