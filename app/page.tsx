import {TestComponent} from "@/src";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center w-full max-w-screen">
     <header className="flex items-center justify-between w-full h-30 bg-red-500">
       <span className="flex flex-col items-start justify-around gap-2 max-w-60">
         <span className="text-4xl text-wrap font-bold">Luis Miguel Alonso</span>
         <span>Junior Software Engineer</span>
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
