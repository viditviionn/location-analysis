import Image from "next/image";
import { LuPersonStanding } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
import { PiRulerLight } from "react-icons/pi";
import { IoMdQrScanner } from "react-icons/io";
import { IoHammerOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full  mx-auto space-y-6">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-1/3 relative min-h-[200px]">
          <div className="absolute top-[-20px] left-[46px] w-[333px] h-[187px] rounded-[16px] overflow-hidden shadow-md">
            <Image
              src="/image.svg"
              alt="280 Richards Property"
              fill
              className="object-cover"
            />
          </div>
          <p className="absolute top-[172px] left-[132px] text-sm text-gray-600 underline cursor-pointer hover:text-blue-600">
            🔗 Click for Google Street View
          </p>
        </div>

        <div className="w-full lg:w-2/3 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Date Uploaded: 11/06/2024</p>
              <h2 className="text-2xl font-bold text-gray-800">
                280 Richards, Brooklyn, NY
              </h2>
              <p className="text-lg text-gray-700">Warehouse</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Export to Excel
              </button>
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Generate PowerPoint
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 text-sm text-gray-700 mt-5">
            {[
              {
                icon: <LuPersonStanding className="text-sm " />,
                label: "Seller",
                value: "Thor Equities",
              },
              {
                icon: <FiDollarSign className="text-sm" />,
                label: "Guidance Price",
                value: "$143,000,000",
              },
              {
                icon: <FiDollarSign className="text-sm" />,
                label: "Price PSF",
                value: "$23.92",
              },
              {
                icon: <PiRulerLight className="text-sm" />,
                label: "Cap Rate",
                value: "5.0%",
              },
              {
                icon: <PiRulerLight className="text-sm" />,
                label: "Property Size",
                value: "312,000 sqft",
              },
              {
                icon: <IoMdQrScanner className="text-sm" />,
                label: "Land Area",
                value: "16 acres",
              },
              {
                icon: <IoHammerOutline className="text-sm" />,
                label: "Zoning",
                value: "M-2",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col min-w-0">
                <div className="flex items-center gap-2 text-gray-500">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <span className="font-medium text-black text-left">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/2 space-y-4 text-sm pr-6">
          <h3 className="text-lg font-semibold text-gray-500">Deal Summary</h3>
          <p className="text-sm leading-relaxed text-gray-700">
            280 Richards, fully leased to Amazon, aligns with HUSPP’s strategy
            of acquiring prime logistics assets in Brooklyn’s high-demand Red
            Hook submarket. With 13 years remaining on the lease and 3% annual
            rent escalations, it offers stable, long-term cash flow. While
            single-tenant exposure is a risk, Amazon’s investment-grade rating
            and renewal options enhance its resilience, making it a strong
            addition to HUSPP’s portfolio.
          </p>

          <h3 className="text-lg font-semibold text-gray-500">
            Personalized Insights
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>
              Jake Klein viewed this deal in 2019, but decided not to proceed
              due to{" "}
              <a href="#" className="text-blue-800 underline">
                lack of potential upside
              </a>
              .
            </li>
            <li>
              On 10/19/2021, your firm bid on{" "}
              <a href="#" className="text-blue-800 underline">
                55 Bay St, Brooklyn, NY 11231
              </a>
              , a larger site also occupied by Amazon 0.5 miles away.{" "}
              <a href="#" className="text-blue-800 underline">
                Brookfield won the deal for $45M
              </a>
              , cap rates in the area have compressed 45bps since then.
            </li>
            <li>
              On 01/19/2025, Tom, VP of Research, noted in the Investment
              Committee meeting that congestion pricing has{" "}
              <a href="#" className="text-blue-800 underline">
                renewed demand for infill industrial in Brooklyn
              </a>
              .
            </li>
          </ul>
        </div>

       
        <div className="hidden lg:block w-px bg-gray-300 mx-4"></div>

        <div className="w-full lg:w-1/2 space-y-4 text-center pl-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Asset-Level Data
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 place-items-center">
            <div className="flex items-start gap-3">
              <div className="text-black text-xl mt-1">
                <FaRegBuilding />
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium">
                  Clear Heights
                </span>
                <span className="text-[24px] font-semibold text-black leading-tight">
                  36’
                </span>
              </div>
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