import Image from "next/image";

const properties = [
    {
      image: '/property/property-1.svg',
      title: '280 Richards, Brooklyn, NY',
      type: 'Industrial, Warehouse',
      size: '312,000 sqft',
      irr: '11.9%',
      equityMultiple: '2.1x',
      roe: '16.3%',
      price: '$23.92',
    },
    {
      image: '/property/property-2.svg',
      title: '397 Ferry Street, Newark, NJ',
      type: 'Industrial, Warehouse',
      size: '95,535 sqft',
      irr: '17.6%',
      equityMultiple: '3.2x',
      roe: '19.5%',
      price: '$32.30',
    },
    {
      image: '/property/property-3.svg',
      title: 'Kearny Street, Kearny, NJ',
      type: 'Industrial, Warehouse',
      size: '207,000 sqft',
      irr: '14.8%',
      equityMultiple: '2.6x',
      roe: '15.8%',
      price: '$22.30',
    },
    {
      image: '/property/property-4.svg',
      title: 'Matrix Center, Camden, NJ',
      type: 'Industrial, Warehouse',
      size: '270,600 sqft',
      irr: '12.2%',
      equityMultiple: '2.2x',
      roe: '11.4%',
      price: '$11.20',
    },
  ];
  
  export default function Pipeline() {
    return (
        <div className="overflow-x-auto px-6 py-6">
        <table className="w-full table-fixed">
          <thead>
            <tr className="text-sm text-gray-500">
              <th className="text-left w-[60%] pb-4">Property</th>
              <th className="text-left w-[10%] pb-4">IRR</th>
              <th className="text-left w-[10%] pb-4">Equity Multiple</th>
              <th className="text-left w-[10%] pb-4">Return on Equity</th>
              <th className="text-left w-[10%] pb-4">Price psf</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((p, idx) => (
               <tr key={idx} className="align-top text-sm ">
              <td className="flex gap-3 items-start py-4 pr-2">
                  <Image src={p.image} alt={p.title} width={200} height={200} className=" rounded object-cover" />
                  <div>
                  <p className="font-medium text-gray-800">{p.title}</p>
                  <p className="text-xs text-gray-500">{p.type}</p>
                  <p className="text-xs text-gray-400">{p.size}</p>
                </div>
              </td>
              <td className="py-4 pr-4">{p.irr}</td>
              <td className="py-4 pr-4">{p.equityMultiple}</td>
              <td className="py-4 pr-4">{p.roe}</td>
              <td className="py-4">{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
  }
  