'use client'

import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import { BsSend } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'
import Image from 'next/image'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

export default function Workshop() {
  const [message, setMessage] = useState('')
  const [chatLog, setChatLog] = useState<string[]>([])

  const handleSend = () => {
    if (!message.trim()) return
    setChatLog(prev => [...prev, message])
    setMessage('')
  }

  return (
    <div className="flex flex-col h-[480px]  px-4">
        <div className='bg-[#F4F4F5] rounded-[8px] h-full relative'>

       
    
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <FaBars className="text-lg" />
          <div>
            <h1 className="text-sm font-semibold">280 Richards, Brooklyn, NY</h1>
            <p className="text-xs text-gray-500">Scenario Analysis</p>
          </div>
        </div>
        <RxCross1 className="text-sm" />
      </div>

    
      <div className="flex-1 flex flex-col justify-center items-center text-gray-500 ">
        {chatLog.length === 0 ? (
          <>
                 <Image alt='starboard' src="/avatar-image.svg" width={30} height={30}/>
           
            <p className="text-sm">Ask me anything!</p>
          </>
        ) : (
          <div className="w-full max-w-xl px-6 py-4 overflow-y-auto space-y-2">
            {chatLog.map((msg, i) => (
              <div key={i} className="text-sm text-left bg-white p-3 rounded-md shadow">
                <strong className="text-gray-700">You:</strong> {msg}
              </div>
            ))}
          </div>
        )}
      </div>

    
      <div className="p-4 ">
        <div className="flex items-center w-[60%] mx-auto   px-4 py-3 bg-white absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Ask A Question"
            className="flex-1 bg-transparent outline-none text-sm"
          />
          <button onClick={handleSend} className="ml-2 text-gray-600 hover:text-black flex gap-x-4">
          <HiOutlineDotsHorizontal/> 
          <Image alt='starboard' src="/send-icon.svg" width={20} height={20}/>

          </button>
        </div>
      </div>
      </div>
    </div>
  )
}
