import SaleCard from "./SaleCard";

const supplyPipeline = [
    {
        image: "/property/property-1.svg",
        address: "1 Debaun Road",
        submarket: "Millstone, NJ",
        date: "Jun-24",
        sf: "132,930",
        pp: "$41,903,580",
        owner: "Cabot",
        tenant: "Berry Plastics",
      },
      {
        image: "/property/property-2.svg",
        address: "39 Edgeboro Road",
        submarket: "Millstone, NJ",
        date: "Oct-23",
        sf: "513,240",
        pp: "$165,776,520",
        owner: "Blackstone",
        tenant: "FedEx",
      },
];

const saleComparables = [
  {
    image: "/property/property-1.svg",
    address: "1 Debaun Road",
    submarket: "Millstone, NJ",
    date: "Jun-24",
    sf: "132,930",
    pp: "$41,903,580",
    owner: "Cabot",
    tenant: "Berry Plastics",
  },
  {
    image: "/property/property-2.svg",
    address: "39 Edgeboro Road",
    submarket: "Millstone, NJ",
    date: "Oct-23",
    sf: "513,240",
    pp: "$165,776,520",
    owner: "Blackstone",
    tenant: "FedEx",
  },
  {
    image: "/property/property-3.svg",
    address: "Baylis 495 Business Park",
    submarket: "Melville, NY",
    date: "May-24",
    sf: "103,500",
    pp: "$44,000,000",
    owner: "Betnal Green",
    tenant: "Dr. Pepper",
  },
  {
    image: "/property/property-4.svg",
    address: "Terminal Logistics Center",
    submarket: "Queens, NY",
    date: "Mar-23",
    sf: "336,000",
    pp: "$136,000,000",
    owner: "Goldman",
    tenant: "Do & Co",
  },
];

export function PipelineComparables() {
  return (
    <div className="flex mx-auto flex-wrap ">
      <div className="md:w-1/3">
        <div className="flex flex-col font-medium my-1 text-xl">Supply Pipeline</div>
        <div className="flex flex-col gap-3 flex-wrap justify-center ">
          {supplyPipeline.map((data, index) => (
            <SaleCard key={index} {...data} />
          ))}
        </div>
      </div>
      <div className="md:w-2/3">
        <div className="flex flex-col  font-medium my-1  text-xl">Supply Comparables</div>
        <div className="flex gap-3 flex-wrap ">
          {saleComparables.map((data, index) => (
            <SaleCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}
