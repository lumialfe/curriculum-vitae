import {TestComponent} from "@/src";
import { LocationIcon, PhoneIcon } from "@/src/assets";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center w-full max-w-screen">
     <header className="flex items-center justify-between w-full h-40 ps-6 pe-6 bg-red-500">
       <div className="flex items-center gap-8">
       <div className="w-30 h-30 rounded-full bg-background overflow-hidden cursor-pointer transition hover:scale-200 hover:translate-15">
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
     
     <main className="flex items-center justify-center w-full min-h-screen bg-yellow-500">
       <article className="flex flex-col w-[61.8%] min-h-screen bg-background">
         <section>
           <h3>Experience</h3>
         </section>
									<section>
											<h3>Studies</h3>
									</section>
									<section>
											<h3>Languages</h3>
									</section>
									<section>
											<h3>Skills</h3>
									</section>
       </article>
     </main>
     
     <footer className="flex items-center justify-center w-full h-30 bg-purple-500">
     
     </footer>
   </div>
  );
}
