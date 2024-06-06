import { LayoutDashboard, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import avatarImg from '/public/drug.jpg'

export function Sidebar(){
  return(
    <div 
    className="flex h-screen bg-[#1F213A] flex-col items-center justify-between p-2 text-white w-[68px]"
  >
    <div className="flex items-center justify-between mb-6">
      <Link href="#" className="flex items-center gap-2">
        <LayoutDashboard/>
      </Link>
    </div>
    <div className="flex flex-col items-center justify-center">
     <Sun/>
     <span>----</span>
     <Image src={avatarImg} alt="avatar" className="w-10 h-10 rounded-full"/>
    </div>
  </div>
  )
}