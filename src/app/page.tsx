'use client'

import { Button, Dialog, Text } from "@radix-ui/themes";
import { Sidebar } from "./components/Sidebar";

import { 
  ChevronDown, 
  ChevronRight, 
  Plus, 
  Dot 
} from "lucide-react";

import { ChangeEvent, useState } from "react";

interface TasksProps {
  name: string;
  date: string;
  amount: number;
}


export default function Home() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [newtask, setNewtask] = useState<TasksProps>({ name: '', date: '', amount: 0 });
  
  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setNewtask({...newtask, name: e.target.value});
  }

  function handleDateChange(e: ChangeEvent<HTMLInputElement>) {
    setNewtask({...newtask, date: e.target.value});
  }

  function handleAmountChange(e: ChangeEvent<HTMLInputElement>) {
    setNewtask({...newtask, amount: parseInt(e.target.value)});
  }

  const addTask = () => {
    setTasks([...tasks, newtask]);
    setNewtask({ name: '', date: '', amount: 0 });
  }

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
                    value={newtask.name}
                    onChange={handleNameChange}
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold" className="text-white">
                    Data
                  </Text>
                  <input 
                    type="date"
                    name="" 
                    id=""
                    value={newtask.date} 
                    className="w-full p-2 outline-none rounded mt-1"
                    onChange={handleDateChange}
                  />
                </label>
                <label className="mb-8">
                  <Text as="div" size="2" mb="1" weight="bold" className="text-white">
                    Amount
                  </Text>
                  <input 
                    type="number" 
                    name="" 
                    id=""
                    value={newtask.amount} 
                    className="w-full p-2 outline-none rounded mt-1"
                    onChange={handleAmountChange}
                  />
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
                    onClick={addTask}
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
          {
            tasks.map((task, index) => (
              <div key={index} className="bg-[#1F213A] flex items-center justify-between p-8 rounded-lg mb-8">
                <p className="text-white font-medium">#RT3080</p>
                <span className="text-zinc-300 font-light">{task.date}</span>
                <span className="text-zinc-300 font-light">{task.name}</span>
                <strong className="text-white">£{task.amount}</strong>
                <button className="bg-green-500 bg-opacity-35 p-2 w-28 text-green-400 rounded-md flex items-center justify-around"><Dot/>Paid</button>
                <ChevronRight className="text-[#7C5DF9]"/>
              </div>
            ))
          } 
        </div>
      </div>

    </main>
  );
}
