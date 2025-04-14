'use client'
import { useState } from 'react'

export default function ModelsTab() {
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: 'Industrial.Template.v2.4.xlsx', date: 'July 22nd, 2024' },
    { name: 'CONFIDENTIAL.xlsx', date: 'June 9th, 2024' },
  ])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const newFile = {
        name: file.name,
        date: new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
      }
      setUploadedFiles((prev) => [...prev, newFile])
    }
  }

  return (
    <div>
    <div className='pb-2 border-b w-fit mb-4'>

    <h2 className="text-xl font-semibold mb-1">Models</h2>
    <p className="text-sm text-gray-500 mb-4">Upload your underwriting models here.</p>
    </div>
    <ul className="mb-6 space-y-6">
      {uploadedFiles.map((file, i) => (
        <li key={i}>
          <p className=" font-medium underline cursor-pointer">{file.name}</p>
          <p className="text-xs text-gray-500">Uploaded {file.date}</p>
        </li>
      ))}
    </ul>
    <label className="inline-block">
      <span className="block font-medium text-sm mb-2">Upload New Model</span>
      <input type="file" onChange={handleFileUpload} className="hidden" id="fileUpload" />
      <label htmlFor="fileUpload" className="cursor-pointer px-4 py-2 bg-black text-white rounded text-sm">
        Select file…
      </label>
    </label>
  </div>
  )
}
