'use client'

import { useState } from 'react'
import AccountTab from './tabs/AccountTab'
import DealCriteriaTab from './tabs/DealCriteriaTab'
import ModelsTab from './tabs/ModelsTab'


const TABS = ['Account', 'Deal Criteria', 'Models'] as const
type TabType = (typeof TABS)[number]

export default function Settings() {
  const [activeTab, setActiveTab] = useState<TabType>('Models')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Account':
        return <AccountTab />
      case 'Deal Criteria':
        return <DealCriteriaTab />
      case 'Models':
        return <ModelsTab />
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[20%]  bg-white p-4">
        <ul className="space-y-2">
          {TABS.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-3 py-2 rounded text-sm ${
                activeTab === tab ? 'bg-gray-100 font-medium text-black' : 'text-gray-600 hover:text-black'
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">{renderTabContent()}</div>
    </div>
  )
}
