// components/SaleCard.tsx
import React from "react";

interface SaleCardProps {
  image: string;
  address: string;
  submarket: string;
  date: string;
  sf: string;
  pp: string;
  owner: string;
  tenant: string;
}

const SaleCard: React.FC<SaleCardProps> = ({
  image,
  address,
  submarket,
  date,
  sf,
  pp,
  owner,
  tenant,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row gap-4 w-full max-w-[405px]">
      <img
        src={image}
        alt={address}
        className="w-full sm:w-[120px] h-[100px] object-cover rounded"
      />
      <div className="text-sm flex flex-col justify-between">
        <p className="font-semibold">Address: <span className="font-normal">{address}</span></p>
        <p>Submarket: {submarket}</p>
        <p>Date: {date}</p>
        <p>SF: {sf}</p>
        <p>PP: {pp}</p>
        <p>Owner: {owner}</p>
        <p>Tenant: {tenant}</p>
      </div>
    </div>
  );
};

export default SaleCard;
