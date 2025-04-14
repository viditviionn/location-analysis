// components/Header.tsx
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <div className='px-6 py-4'>
    <button>
    <FaArrowLeft className="text-xl" />
  </button>
    <div className="flex items-center justify-between my-4  ">
      {/* Left: Back & Nav Links */}
      <div className="flex items-center gap-6">
      
        <nav className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Deal Overview</a>
          <a href="#" className="font-semibold text-black border-b-2 border-black">Workshop</a>
          <a href="#" className="hover:text-black">Pipeline</a>
          <a href="#" className="hover:text-black">Settings</a>
        </nav>
      </div>

      {/* Center: Search */}
      <div className="flex items-center gap-2 w-1/3 ">
      <Image alt='starboard' src="/avatar-image.svg" width={30} height={30}/>
        <input
          type="text"
          placeholder="Sensitize IRR on varying Exit Cap Rates and Rental Growth"
          className="w-full px-4 py-2.5 border border-[#E4E4E7] rounded-[12px] text-sm  focus:outline-none focus:ring-2 focus:none"
        />
      </div>

      {/* Right: Profile + Dropdown */}
      <div className="flex items-center gap-6 pr-4">
        <div className="flex items-center gap-2">
          <Image alt='starboard' src="/starboard-logo.svg" width={60} height={60}/>
        </div>
      </div>
    </div>
        <div className="w-full justify-between flex items-center border-b pb-4">
            <div>
                <h1 className='font-bold text-[24px]'>
                Deal Overview
                </h1>
            </div>
            <div className='text-center'>
          <div className="text-[18px] font-medium">Underwriting Model</div>
          <select className="text-sm bg-[#F4F4F5CC] rounded px-2 py-1 text-[#0F172A]">
            <option>Industrial.Template.v2.4.xlsx</option>
          </select>
        </div>
        </div>
    </div>
  );
}
