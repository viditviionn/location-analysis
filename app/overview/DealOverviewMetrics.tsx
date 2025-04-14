import {
    FaMoneyBillAlt,
    FaChartLine,
    FaPercentage,
    FaClock,
    FaBuilding,
    FaChartBar,
    FaUsers,
    FaSitemap,
    FaArrowUp,
    FaTag,
  } from 'react-icons/fa'
  
  const metricGroups = [
    {
      title: 'Projected Financial Metrics',
      items: [
        { icon: <FaMoneyBillAlt />, label: 'IRR', value: '13.9%' },
        { icon: <FaChartLine />, label: 'Equity Multiple', value: '2.3x' },
        { icon: <FaChartBar />, label: 'Return on Equity', value: '18.5%' },
        { icon: <FaMoneyBillAlt />, label: 'Return on Cost', value: '19.2%' },
      ],
    },
    {
      title: 'Key Assumptions',
      items: [
        { icon: <FaTag />, label: 'Exit Price', value: '$195,000,000' },
        { icon: <FaPercentage />, label: 'Exit Cap Rate', value: '5.0%' },
        { icon: <FaChartBar />, label: 'Rental Growth', value: '3.5%' },
        { icon: <FaClock />, label: 'Hold Period', value: '16 Years' },
      ],
    },
    {
      title: 'Market Analysis',
      items: [
        { icon: <FaBuilding />, label: 'Nearest Urban Center', value: 'Brooklyn, NY' },
        { icon: <FaChartLine />, label: 'Population Growth Rate', value: '1.2%' },
        { icon: <FaUsers />, label: 'Median Household Income', value: '$76,912' },
        { icon: <FaSitemap />, label: 'Unemployment Rate', value: '7.4%' },
      ],
    },
    {
      title: 'Lease Analysis',
      items: [
        { icon: <FaMoneyBillAlt />, label: 'Rent PSF', value: '$24.40' },
        { icon: <FaClock />, label: 'WALT', value: '13 Yrs (Sep 37)' },
        { icon: <FaArrowUp />, label: 'Rent Escalations', value: '3%' },
        { icon: <FaChartBar />, label: 'Mark-to-Market Opportunity', value: '30%+' },
      ],
    },
  ]
  
  export default function TopMetricsRow() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-gray-200 px-6 py-8 gap-6 text-sm">
        {metricGroups.map((group, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="font-semibold text-gray-700">{group.title}</h3>
            {group.items.map((metric, mIdx) => (
              <Metric key={mIdx} {...metric} />
            ))}
          </div>
        ))}
      </div>
    )
  }
  
  function Metric({
    icon,
    label,
    value,
  }: {
    icon: React.ReactNode
    label: string
    value: string
  }) {
    return (
      <div className="flex items-center gap-3 text-sm">
        <div className="text-gray-500 text-lg">{icon}</div>
        <div>
          <p className="text-gray-500 text-xs">{label}</p>
          <p className="font-semibold text-black">{value}</p>
        </div>
      </div>
    )
  }


  const supplyPipeline = [
    {
      image: '/pipeline1.jpg',
      address: '640 Columbia',
      submarket: 'Brooklyn',
      delivery: 'June-25',
      owner: 'CBREI',
      sf: '336,350',
    },
    {
      image: '/pipeline2.jpg',
      address: 'WB Mason',
      submarket: 'Bronx',
      delivery: 'May-25',
      owner: 'Link Logistics',
      sf: '150,000',
    },
  ]
  
  const saleComparables = [
    {
      image: '/comp1.jpg',
      address: '1 Debaun Road',
      submarket: 'Millstone, NJ',
      date: 'Jun-24',
      sf: '132,930',
      pp: '$41,903,580',
      owner: 'Cabot',
      tenant: 'Berry Plastics',
    },
    {
      image: '/comp2.jpg',
      address: '39 Edgeboro Road',
      submarket: 'Millstone, NJ',
      date: 'Oct-23',
      sf: '513,240',
      pp: '$165,776,520',
      owner: 'Blackstone',
      tenant: 'FedEx',
    },
    {
      image: '/comp3.jpg',
      address: 'Baylis 495 Business Park',
      submarket: 'Melville, NY',
      date: 'May-24',
      sf: '103,500',
      pp: '$44,000,000',
      owner: 'Betnal Green',
      tenant: 'Dr. Pepper',
    },
    {
      image: '/comp4.jpg',
      address: 'Terminal Logistics Center',
      submarket: 'Queens, NY',
      date: 'Mar-23',
      sf: '336,000',
      pp: '$136,000,000',
      owner: 'Goldman',
      tenant: 'Do & Co',
    },
  ]
  
  export  function PipelineComparables() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 py-8 gap-6 border-t border-gray-200">
        {/* Supply Pipeline */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Supply Pipeline</h3>
          <div className="space-y-4">
            {supplyPipeline.map((item, i) => (
              <div key={i} className="flex gap-4">
                <img src={item.image} alt={item.address} className="w-28 h-20 object-cover rounded" />
                <div className="text-sm">
                  <p><strong>Address:</strong> {item.address}</p>
                  <p className="text-gray-600"><strong>Submarket:</strong> {item.submarket}</p>
                  <p className="text-gray-600"><strong>Delivery Date:</strong> {item.delivery}</p>
                  <p className="text-gray-600"><strong>Owner:</strong> {item.owner}</p>
                  <p className="text-gray-600"><strong>SF:</strong> {item.sf}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Sale Comparables */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Sale Comparables</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {saleComparables.map((item, i) => (
              <div key={i} className="flex gap-3">
                <img src={item.image} alt={item.address} className="w-28 h-20 object-cover rounded" />
                <div className="text-sm">
                  <p><strong>Address:</strong> {item.address}</p>
                  <p className="text-gray-600"><strong>Submarket:</strong> {item.submarket}</p>
                  <p className="text-gray-600"><strong>Date:</strong> {item.date}</p>
                  <p className="text-gray-600"><strong>SF:</strong> {item.sf}</p>
                  <p className="text-gray-600"><strong>PP:</strong> {item.pp}</p>
                  <p className="text-gray-600"><strong>Owner:</strong> {item.owner}</p>
                  <p className="text-gray-600"><strong>Tenant:</strong> {item.tenant}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  