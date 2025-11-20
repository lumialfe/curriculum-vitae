import { LocationIcon, PhoneIcon } from "@/src/assets";

export default function Home() {
  return (
   <div	className="">
     <header className="flex items-center justify-between w-full px-5 py-4 bg-red-500">
       <div className="flex items-center gap-8">
       <div className="w-30 h-30 min-w-30 min-h-30 rounded-[5000px] bg-background overflow-hidden cursor-pointer transition hover:scale-200 hover:translate-15">
       		<img src="/img/me.jpg" alt="Profile Picture" className="w-full h-full object-cover scale-250 translate-y-2 -translate-x-1" />
       </div>
       <span className="flex flex-col items-start justify-around gap-2">
         <h1>Luis Miguel Alonso</h1>
         <h2>Junior Software Engineer</h2>
       </span>
       </div>
       <span className="flex items-end gap-6">
         <span className="flex items-center gap-2"><LocationIcon />Gijón, Spain</span>
         <span className="flex items-center gap-2"><PhoneIcon />+34 633 332 848</span>
         <span className="flex items-center gap-2"><a href="mailto:lumialfe@hotmail.com">lumialfe@hotmail.com</a></span>
         <span className="flex items-center gap-2">LinkedIn</span>
         <span className="flex items-center gap-2">GitHub</span>
       </span>
     </header>
     
     <main className="flex items-center justify-center w-full h-full p-18 bg-yellow-500">
       <article className="flex flex-col w-[61.8%] bg-background">
       Software Engineer with industry experience and a Master’s in Computer Engineering. Proficient in modern web technologies and Agile methodologies, with growing expertise in backend development and distributed systems. Dedicated to designing clean, maintainable solutions that enhance user experience and system reliability.
         <section>
           <h3>Experience</h3>
           <h4>Associate Frontend Software Engineer, Empathy.co 	| February 2023 - Present</h4>
           <ul>
             <li>Designed, developed, tested, and maintained a large-scale Vue.js web application for a major US retail company.</li>
             <li>Performed a successful, full-scale framework migration from Vue.js to React.js.</li>
             <li>Collaborated within a SCRUM environment, delivering incremental releases through CI/CD pipelines.</li>
             <li><b>Tech stack</b>: TypeScript, Vue.js, React, Vite, Next.js, TailwindCSS, SASS, GitHub.</li>
           </ul>
         </section>
									<section>
											<h3>Studies</h3>
											<h4>Master&#39;s Degree in Computer Engineering (90 ECTS), University of Oviedo | 2023-2025</h4>
											<ul>
											<li>Focus: C++, .NET, Microservices, Project Direction and Management.</li>
											<li>Final Thesis: Three-Dimensional Laser Reconstruction Using Ultra-High-Definition Images.</li>
											</ul>
											<h4>Bachelor&#39;s Degree in Software Engineering (240 ECTS), University of Oviedo | 2018-2023</h4>
											<ul>
											<li>Focus: Java, Object-Oriented Programming, Project Management.</li>
											<li>Final Degree Project: Vehicle Detection with Convolutional Networks. Data Augmentation with 3D Renders.</li>
											</ul>
									</section>
									<section>
											<h3>Languages</h3>
											<ul>
											<li>Spanish – Native.</li>
											<li>English – C2 Proficiency (Cambridge English).</li>
											<li>French – B1-B2.</li>
											</ul>
									</section>
									<section>
											<h3>Skills</h3>
											<h4>Technical Skills</h4>
											<ul>
											<li>Languages: TypeScript, JavaScript, C++, Java.</li>
											<li>Frameworks: Vue.js, React.js, Next.js, .NET.</li>
											<li>Tools: Vite, Next, TailwindCSS, SASS, GitHub.</li>
											<li>Methodologies: Agile (SCRUM), CI/CD, Code Review.</li>
											</ul>
											<h4>Soft Skills</h4>
											<ul>
											<li>Team collaboration, adaptability, and continuous improvement mindset.</li>
											</ul>
									</section>
       </article>
     </main>
     
     <footer className="flex items-center justify-center w-full bg-purple-500">
       I'm the footer
     </footer>
   </div>
  );
}
