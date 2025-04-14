"use client";

import Image from "next/image";

const Overview = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-6xl mx-auto space-y-6">
      {/* Header Section - Image + Title + Buttons + Info Row */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Image + Link */}
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          <div className="relative w-80 h-48 rounded-lg overflow-hidden">
            <Image
              src="/image.svg"
              alt="280 Richards Property"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600 underline cursor-pointer hover:text-blue-600 text-center">
            🔗 Click for Google Street View
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-2/3 space-y-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <p className="text-sm text-gray-500">Date Uploaded: 11/06/2024</p>
              <h2 className="text-2xl font-bold text-gray-800">
                280 Richards, Brooklyn, NY
              </h2>
              <p className="text-lg text-gray-700">Warehouse</p>
            </div>
            <div className="flex flex-col  gap-2">
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Export to Excel
              </button>
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Generate PowerPoint
              </button>
            </div>
          </div>

          {/* Property Details */}
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-gray-700">
            <span>
              📍 <strong>Seller:</strong> Thor Equities
            </span>
            <span>
              💲 <strong>Guidance Price:</strong> $143,000,000
            </span>
            <span>
              💹 <strong>Price PSF:</strong> $23.92
            </span>
            <span>
              📈 <strong>Cap Rate:</strong> 5.0%
            </span>
            <span>
              📐 <strong>Property Size:</strong> 312,000 sqft
            </span>
            <span>
              🌍 <strong>Land Area:</strong> 16 acres
            </span>
            <span>
              🧭 <strong>Zoning:</strong> M-2
            </span>
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Deal Summary and Asset Data */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Deal Summary */}
        <div className="w-full lg:w-2/3 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Deal Summary</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            280 Richards, fully leased to Amazon, aligns with HUSPP’s strategy
            of acquiring prime logistics assets in Brooklyn’s high-demand Red
            Hook submarket. With 13 years remaining on the lease and 3% annual
            rent escalations, it offers stable, long-term cash flow. While
            single-tenant exposure is a risk, Amazon’s investment-grade rating
            and renewal options enhance its resilience, making it a strong
            addition to HUSPP’s portfolio.
          </p>
          <h3 className="text-lg font-semibold text-gray-800">
            Personalized Insights
          </h3>
          <ul className="list-disc list-inside text-sm text-blue-600 space-y-1">
            <li>
              <a href="#">55 Bay St, Brooklyn, NY 11231</a>
            </li>
            <li>
              <a href="#">Brookfield won the deal for $45M</a>
            </li>
            <li>
              <a href="#">renewed demand for infill industrial in Brooklyn</a>
            </li>
          </ul>
        </div>

        {/* Right: Asset-Level Data */}
        <div className="w-full lg:w-1/3 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Asset-Level Data
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <div>
              <strong>Clear Heights:</strong> 36’
            </div>
            <div>
              <strong>Tenant:</strong> Amazon
            </div>
            <div>
              <strong>Column Spacing:</strong> 63’ X 54’
            </div>
            <div>
              <strong>Seaward Area:</strong> 357,151 sqft
            </div>
            <div>
              <strong>Parking Spaces:</strong> 393
            </div>
            <div>
              <strong>Year Built:</strong> 2021
            </div>
            <div>
              <strong># of Dock Doors:</strong> 28
            </div>
            <div>
              <strong>Occupancy Rate:</strong> 100%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
