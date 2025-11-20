import {CurriculumVitae} from "@/src/types";

export const curriculumVitae: CurriculumVitae = {
intro: "Software Engineer with industry experience and a Master’s in Computer Engineering. Proficient in modern web technologies and Agile methodologies, with growing expertise in backend development and distributed systems. Dedicated to designing clean, maintainable solutions that enhance user experience and system reliability.",
experience: [
{
title: "Associate Frontend Software Engineer",
company: "Empathy.co",
timePeriod: {
startDate: new Date("2023-01-01"),
endDate: undefined,
},
responsibilities: [
"Designed, developed, tested, and maintained a large-scale Vue.js web application for a major US retail company.",
"Performed a successful, full-scale framework migration from Vue.js to React.js.",
"Collaborated within a SCRUM environment, delivering incremental releases through CI/CD pipelines.",
],
techStack: ["TypeScript", "Vue.js", "React", "Vite", "Next.js", "TailwindCSS", "SASS", "GitHub"],
}],
studies: [
{
degree: "Master's Degree in Computer Engineering",
credits: 90,
institution: "University of Oviedo",
timePeriod: {
startDate: new Date("2023-01-01"),
endDate: new Date("2025-12-31"),
},
focus: ["C++", ".NET", "Microservices", "Project Direction and Management"],
finalProject: "Three-Dimensional Laser Reconstruction Using Ultra-High-Definition Images",
},
{
degree: "Bachelor's Degree in Software Engineering",
credits: 240,
institution: "University of Oviedo",
timePeriod: {
startDate: new Date("2018-01-01"),
endDate: new Date("2023-12-31"),
},
focus: ["Java", "Object-Oriented Programming", "Project Management"],
finalProject: "Vehicle Detection with Convolutional Networks. Data Augmentation with 3D Renders",
}
],
languages: [
{language: "Spanish", level: "Native"},
{language: "English", level: "C2 Proficiency (Cambridge English)"},
{language: "French", level: "B1-B2"}
],
skills: {
technical: [
"Languages: TypeScript, JavaScript, C++, Java",
"Frameworks: Vue.js, React.js, Next.js, .NET",
"Tools: Vite, Next, TailwindCSS, SASS, GitHub",
"Methodologies: Agile (SCRUM), CI/CD, Code Review"
],
soft: [
"Team collaboration, adaptability, and continuous improvement mindset"
]
}
}
