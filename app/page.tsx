import {TestComponent} from "@/src";
import { LocationIcon, PhoneIcon } from "@/src/assets";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center w-full max-w-screen">
     <header className="flex items-center justify-between w-full h-40 ps-6 pe-6 bg-red-500">
       <span className="flex flex-col items-start justify-around gap-2">
         <span className="text-5xl font-bold">Luis Miguel Alonso</span>
         <span className="text-2xl">Junior Software Engineer</span>
       </span>
       <span className="flex items-end gap-6">
         <span className="flex items-center gap-2"><LocationIcon />Gijón, Spain</span>
         <span className="flex items-center gap-2"><PhoneIcon />+34 633 332 848</span>
         <span className=""><a href="mailto:lumialfe@hotmail.com">lumialfe@hotmail.com</a></span>
         <span className="">LinkedIn</span>
         <span className="">GitHub</span>
       </span>
     </header>
     
     <main className="flex items-center justify-center w-full min-h-screen bg-yellow-500">
       <TestComponent title="Hello World!" />
     </main>
     
     <footer className="flex items-center justify-center w-full h-30 bg-purple-500">
     
     </footer>
   </div>
  );
}
