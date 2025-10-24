"use client";

import { useEffect, useState } from 'react'
import MarkdownParagraph from "@/components/markdownparagraph/MarkdownParagraph";
import axios from 'axios';

export default function ObjectPage() {
  const [ObjectName, SetObjectName] = useState<string>('');
  const [InGameName, SetInGameName] = useState<string>('');
  const [ObjectType, SetObjectType] = useState<string>('');
  const [IsRealObject, SetIsRealObject] = useState<boolean>(false);
  const [ESI, SetESI] = useState<string>('');
  const [ChildCount, SetChildCount] = useState<number>(0);
  const [DiscoveryDate, SetDiscoveryDate] = useState<string>('');
  const [SubmittedBy, SetSubmittedBy] = useState<string>('');
  const [Description, SetDescription] = useState<string>('');
  const [Tags, SetTags] = useState<string>('');
  const [UploadResponse, SetUploadResponse] = useState<string>('');
  const [SecretKey, SetSecretKey] = useState<string>('');
  const [SecretKeyShown, SetSecretKeyShown] = useState<boolean>(false);

  const uploadObject = async () => {
    const res = await axios.post('https://seoc-server.puppet57.xyz/submit-object.php', new URLSearchParams({
      name: ObjectName,
      in_game_name: InGameName,
      object_type: ObjectType,
      is_real_object: IsRealObject ? '1' : '0',
      esi: ESI == '' || !["planet", "moon", "dwarf planet", "dwarf moon", "asteroid", "comet"].includes(ObjectType.toLowerCase()) ? '0' : ESI,
      child_count: ChildCount.toString(),
      desc: Description,
      tags: Tags,
      submitted_by: SubmittedBy,
      discovery_date: DiscoveryDate.toString(),
      secret_key: SecretKey
    }));
    SetUploadResponse(res.data);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Control") {
        SetSecretKeyShown(!SecretKeyShown);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [SecretKeyShown, SetSecretKeyShown]);

  return (
    <>
      <p className='ml-2 mt-1'>Information about your object:</p>
      <div className='p-5'>
        <p>Submitted By:</p>
        <textarea className='w-full h-12 mb-2 p-2 text-white search-bar resize-none' value={SubmittedBy} onChange={(e) => SetSubmittedBy(e.target.value)} />
        <p>Object Name:</p>
        <textarea className='w-full h-12 mb-2 p-2 text-white search-bar resize-none' value={ObjectName} onChange={(e) => SetObjectName(e.target.value)} />
        <p>In Game Name:</p>
        <textarea className='w-full h-12 mb-2 p-2 text-white search-bar resize-none' value={InGameName} onChange={(e) => SetInGameName(e.target.value)} />
        <p>Object Type:</p>
        <textarea className='w-full h-12 mb-2 p-2 text-white search-bar resize-none' value={ObjectType} onChange={(e) => SetObjectType(e.target.value)} />
        <p>Is Real Object:</p>
        <label className="switch">
          <input
            type="checkbox"
            checked={IsRealObject}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => SetIsRealObject(e.target.checked)}
          />
          <span className="slider"></span>
        </label>
        {["planet", "moon", "dwarf planet", "dwarf moon", "asteroid", "comet"].includes(ObjectType.toLowerCase()) && (
          <>
            <p>ESI:</p>
            <textarea
              className='w-full h-12 mb-2 p-2 text-white search-bar resize-none'
              value={ESI}
              onChange={(e) => SetESI(e.target.value)}
            />
          </>
        )}
        <p>Child Count:</p>
        <textarea
          className='w-full h-12 mb-2 p-2 text-white search-bar resize-none'
          value={ChildCount}
          onChange={(e) => SetChildCount(parseInt(e.target.value) || 0)}
        />
        <p>Discovery Date:</p>
        <input
          type="date"
          className="w-full h-12 mb-2 p-2 text-white search-bar"
          value={DiscoveryDate}
          onChange={(e) => SetDiscoveryDate(e.target.value)}
        />
        <p>Tags (comma separated):</p>
        <textarea className='w-full h-12 mb-2 p-2 text-white search-bar resize-none' value={Tags} onChange={(e) => SetTags(e.target.value)} />
        <p>Description (Markdown Supported):</p>
        <textarea className='w-full h-40 mb-2 p-2 text-white search-bar resize-none' value={Description} onChange={(e) => SetDescription(e.target.value)} />
        {SecretKeyShown && <>
          <p>Secret Key:</p>
          <input
            type="password"
            className='w-full h-12 mb-2 p-2 text-white search-bar'
            value={SecretKey}
            onChange={(e) => SetSecretKey(e.target.value)}
          />
        </>}
      </div>
      <p className='ml-2'>Preview:</p>
      <div className='float-right'>
        <h3 className="text-[20px] m-3 mb-2 text-right">Submitted By: {SubmittedBy}</h3>
        <h3 className="text-[20px] m-3 mb-2 mt-0 text-right">Tags: {Tags}</h3>
      </div>
      <h1 className="text-5xl m-5 mb-2">{ObjectName}</h1>
      <h2 className="text-2xl ml-5 mb-2">In Game Name: {InGameName}</h2>
      <h2 className="text-2xl ml-5 mb-2">Object Type: {ObjectType}</h2>
      <h2 className="text-2xl ml-5 mb-2">Child Count: {ChildCount}</h2>
      <h2 className="text-2xl ml-5 mb-2">{IsRealObject}</h2>
      <h2 className="text-2xl ml-5 mb-2">Discovered: {DiscoveryDate}</h2>
      {["planet", "moon", "dwarf planet", "dwarf moon", "asteroid", "comet"].includes(ObjectType.toLowerCase()) && ( <h2 className="text-2xl ml-5 mb-2">ESI: {ESI}</h2>)}
      <div className="w-screen h-px bg-white mb-4.5"></div>
      <div className='ml-5'>
        <MarkdownParagraph text={Description} />
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={async () => await uploadObject()} className='search-button'>Upload!</button>
        {UploadResponse != "" && <div className='mt-2 ml-2 text-center text-white '>{UploadResponse}</div>}
      </div>
    </>
  );
}
