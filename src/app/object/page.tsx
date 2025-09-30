"use client";

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation';

export default function ObjectPage() {
  const SearchedObject = useSearchParams().get('query');

  const [ObjectName, SetObjectName] = useState<string>('');
  const [InGameName, SetInGameName] = useState<string>('');
  const [ObjectType, SetObjectType] = useState<string>('');
  const [IsRealObject, SetIsRealObject] = useState<string>('');
  const [ESI, SetESI] = useState<string>('');
  const [ChildCount, SetChildCount] = useState<string>('');
  const [LastUpdated, SetLastUpdated] = useState<string>('');
  const [DiscoveryDate, SetDiscoveryDate] = useState<string>('');
  const [SubmittedBy, SetSubmittedBy] = useState<string>('');
  const [VerificationStatus, SetVerificationStatus] = useState<string>('');
  const [Description, SetDescription] = useState<string>('');
  const [Tags, SetTags] = useState<string>('');

  useEffect(() => {
    SetObjectName("Kryo A");
    SetInGameName("RSC 8513-2673-2-10-10");
    SetObjectType("Star");
    SetIsRealObject("Procedural Object");
    SetESI("0");
    SetChildCount("6");
    SetLastUpdated("9/30/2025, 2:16:23 PM");
    SetDiscoveryDate("9/23/2025");
    SetSubmittedBy("Puppet");
    SetVerificationStatus("verified");
    SetDescription(
      "Kryo A is a solar system I gave lore when I was bored in space engine. I gave it lore because it seemed cool and I was kinda bored while I was playing space engine. Kryo A has a proper description in game but I dont feel like opening the game to check."
    );
    SetTags("star, solar-system, star-system");
  }, []);

  return (
    <>
      <h1 className="text-5xl m-5 mb-2">{ObjectName}</h1>
      <h2 className="text-2xl ml-5 mb-2">In Game Name: {InGameName}</h2>
      <h2 className="text-2xl ml-5 mb-2">Object Type: {ObjectType}</h2>
      <h2 className="text-2xl ml-5 mb-2">{IsRealObject}</h2>
      <h2 className="text-2xl ml-5 mb-2">Discovered: {DiscoveryDate}</h2>
      {VerificationStatus == "verified" && <div className='h-2.5'></div>}
      {VerificationStatus == "unverified" && <h2 className="!text-[#ff9100] text-2xl ml-5 mb-4.5">This article is not verified! It may be inaccurate!</h2>}
      <div className="w-screen h-[1px] bg-white mb-4.5"></div>
      <p className="m-5 mt-0 text-[30px]">{Description}</p>
    </>
  );
}
