'use client'

import {
  RadioGroup,
  Radio,
  Select,
  SelectItem,
  Button,
} from '@nextui-org/react'
import { useState } from 'react'
import ReactSlider from 'react-slider'

const dataPoints = [
  'Return on Cost',
  'Cash-on-Cash',
  'Return on Equity',
  'Nearest Urban Center',
  'Population Growth Rate',
  'Unemployment Rate',
  'Average Household Income',
  'WALT',
  'Occupancy Rate',
  'Tenants',
]

export default function DealCriteriaTab() {
  const [irr, setIrr] = useState('10%')
  const [range, setRange] = useState<[number, number]>([50000000, 120000000])


  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value)

  return (
    <div className="max-w-3xl px-6 pb-6 pt-2">
      <h2 className="text-lg font-semibold mb-1">Deal Screening Parameters</h2>
      <p className="text-sm text-gray-500 mb-4 border-b border-[#E4E4E7] pb-5">
        Select the data points that appear on the deal screening page.
      </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-2 my-5">
  {dataPoints.map((point, i) => (
    <div key={i} className="flex items-center gap-x-2">
      <div className="w-5 h-5 border-2  rounded-full flex items-center justify-center">
        <div className="bg-black w-[70%] h-[70%] rounded-full"></div>
      </div>
      <div className="text-sm w-fit">{point}</div>
    </div>
  ))}
  <div className='w-full justify-center flex '>
          <select className="border rounded px-3 py-2 text-sm w-[200px]">
            <option>Add Data Point</option>
          </select>
        </div>
</div>

      {/* Financial Criteria */}
      <div className="">
        <h3 className="text-md font-semibold pb-5 border-b border-[#E4E4E7]">Financial Criteria</h3>

        <label className="block text-sm mt-5 mb-2">Target IRR</label>
        <input
          type="text"
          value={irr}
          onChange={(e) => setIrr(e.target.value)}
          className="border px-3 py-2 w-full rounded text-sm mb-3"
        />

        <label className="flex items-center gap-2 text-sm text-gray-700 mb-4">
          <div className='border-[#E2E8F0] border w-4 h-4 rounded-full'></div>
          Set range
        </label>

        {/* Price Range */}
        <div className="mt-6">
        <label className="block text-sm font-medium mb-1">Price Range</label>
        <div className="flex justify-between text-sm text-gray-700 mb-2">
          <span>{formatCurrency(range[0])}</span>
          <span>{formatCurrency(range[1])}</span>
        </div>

        <ReactSlider
          className="custom-slider w-full h-2"
          thumbClassName="custom-thumb"
          trackClassName="custom-track"
          value={range}
          onChange={(value: [number, number]) => setRange(value)}
          min={10000000}
          max={150000000}
          step={1000000}
          pearling
          minDistance={1000000}
        />
      </div>

      </div>

      <Button className="mt-6 px-5 py-2 rounded-md bg-black text-white" size="sm">
        Save Settings
      </Button>
    </div>
  )
}
