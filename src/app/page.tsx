'use client'

import { Button, Dialog, Text } from "@radix-ui/themes";
import { Sidebar } from "./components/Sidebar";
import { Card } from "./components/Card";

import { 
  ChevronDown, 
  ChevronRight, 
  Plus, 
  Dot 
} from "lucide-react";
import { useState } from "react";


export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

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

          <Dialog.Root>
            <Dialog.Trigger>
              <button className="flex items-center justify-between w-38 h-7 p-6 bg-[#7C5DF9] rounded-full text-white font-medium">
                <Plus/>
                New Invoice
              </button>
            </Dialog.Trigger>
          
            <Dialog.Content className="bg-[#7C5DF9] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md p-8 text-zinc-500 shadow w-96">
              <div className="flex flex-col gap-6">
                <label className="flex flex-col gap-2">
                  <Text as="div" size="2" mb="1" weight="bold" className="text-white">
                    Name
                  </Text>
                  <input
                    placeholder="Enter your full name"
                    className="w-full p-2 outline-none rounded mt-1"
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold" className="text-white">
                    Data
                  </Text>
                  <input type="date" name="" id="" className="w-full p-2 outline-none rounded mt-1"/>
                </label>
                <label className="mb-8">
                  <Text as="div" size="2" mb="1" weight="bold" className="text-white">
                    Data
                  </Text>
                  <input type="number" name="" id="" className="w-full p-2 outline-none rounded mt-1"/>
                </label>
              </div>
              <div className="flex items-center justify-between gap-8">
                <Dialog.Close>
                  <Button className="w-36 bg-slate-50 p-3 rounded-md outline-none">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button 
                    className="w-36 bg-slate-50 p-3 rounded-md outline-none"
                  >
                    Save
                  </Button>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Root>

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
