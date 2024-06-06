import { ChevronDown, ChevronRight, Plus, Dot } from "lucide-react";
import { Sidebar } from "./components/Sidebar";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <main className="flex flex-1 bg-[#141625]">
      <Sidebar/>

      <div className="m-auto">
        <header className="flex items-center justify-between gap-96 mb-32">
         <div>
          <h2 className="text-xl font-semibold text-white">Invoices</h2>
          <p className="text-zinc-200">There are 7 total invoices</p>
         </div>
         <div className="flex items-center justify-between gap-8">
          <div className="flex">
            <p className="text-white font-medium">Filter by status</p>
            <span className="text-white">
              <ChevronDown className="text-[#7C5DF9]"/>
            </span>
          </div>
          <button className="flex items-center justify-between w-38 h-7 p-6 bg-[#7C5DF9] rounded-full text-white font-medium">
            <Plus/>
            New Invoice
          </button>
         </div>
        </header>
        <div>
          <div className="bg-[#1F213A] flex items-center justify-between p-8 rounded-lg">
            <p className="text-white font-medium">#RT3080</p>
            <span className="text-zinc-300 font-light">tuesday 19 Aug 2021</span>
            <span className="text-zinc-300 font-light">Gerson Abreu</span>
            <strong className="text-white">£1,880.90</strong>
            <button className="bg-green-500 bg-opacity-35 p-2 w-28 text-green-400 rounded-md flex items-center justify-around"><Dot/>Paid</button>
            <ChevronRight className="text-[#7C5DF9]"/>
          </div> 
          <Card/>
        </div>
      </div>

    </main>
  );
}
