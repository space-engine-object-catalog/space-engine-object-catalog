'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import MarkdownParagraph from "@/components/markdownparagraph/MarkdownParagraph";

function ObjectContent() {
  const SearchedObject = useSearchParams().get('query') ?? "0";

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
    const fetchData = async () => {
      const endpoint = "https://seoc.puppet57.xyz/backend/get-object-info.php";

      const res = await fetch(`${endpoint}?query=${encodeURIComponent(SearchedObject)}`);
      let object_data = await res.text();
      console.log(object_data);

      if (object_data === "Object doesn't exist!") {
        object_data = "Object doesn't exist!;Object doesn't exist!;Non Existent;0;0;0;non-existent;Never;Never;No One;verified";
      }

      const data_array = object_data.split(";");

      SetObjectName(data_array[0]);
      SetInGameName(SearchedObject);
      SetObjectType(data_array[2]);
      SetIsRealObject(data_array[3] == "1" ? "Real Object" : "Procedural Object");
      SetESI(data_array[4]);
      SetChildCount(data_array[5]);
      SetLastUpdated(data_array[7]);
      SetDiscoveryDate(data_array[8]);
      SetSubmittedBy(data_array[9]);
      SetVerificationStatus(data_array[10]);
      SetDescription(data_array[1]);
      SetTags(data_array[6]);
    };

    fetchData();
  }, [SearchedObject]);

  return (
    <>
      <div className='float-right'>
        <h3 className="text-[20px] m-3 mb-2 text-right">Submitted By: {SubmittedBy}</h3>
        <h3 className="text-[20px] m-3 mb-2 mt-0 text-right">Last Updated: {LastUpdated}</h3>
        <h3 className="text-[20px] m-3 mb-2 mt-0 text-right">Tags: {Tags}</h3>
      </div>
      <h1 className="text-5xl m-5 mb-2">{ObjectName}</h1>
      <h2 className="text-2xl ml-5 mb-2">In Game Name: {InGameName}</h2>
      <h2 className="text-2xl ml-5 mb-2">Object Type: {ObjectType}</h2>
      <h2 className="text-2xl ml-5 mb-2">Child Count: {ChildCount}</h2>
      <h2 className="text-2xl ml-5 mb-2">{IsRealObject}</h2>
      <h2 className="text-2xl ml-5 mb-2">Discovered: {DiscoveryDate}</h2>
      {["planet", "moon", "dwarf planet", "dwarf moon", "astroid", "comet"].includes(ObjectType.toLowerCase()) && (
        <h2 className="text-2xl ml-5 mb-2">ESI: {ESI}</h2>
      )}
      {VerificationStatus == "verified" && <div className='h-2.5'></div>}
      {VerificationStatus == "unverified" && (
        <h2 className="!text-[#ff9100] text-2xl ml-5 mb-4.5">
          This article is not verified! It may be inaccurate!
        </h2>
      )}
      <div className="w-screen h-[1px] bg-white mb-4.5"></div>
      <div className='ml-5'>
        <MarkdownParagraph text={`${Description}`} />
      </div>
    </>
  );
}

export default function ObjectPage() {
  return (
    <Suspense fallback={<div>Loading object...</div>}>
      <ObjectContent />
    </Suspense>
  );
}
