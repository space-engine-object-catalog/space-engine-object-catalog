"use client";

import { useState, useEffect } from 'react'

export default function ObjectPage() {
  const [ObjectName, SetObjectName] = useState<string>('');
  const [InGameName, SetInGameName] = useState<string>('');
  const [ObjectType, SetObjectType] = useState<string>('');
  const [IsRealObject, SetIsRealObject] = useState<string>('');
  const [Description, SetDescription] = useState<string>('');

  useEffect(() => {
    SetObjectName("Kryo A");
    SetInGameName("RSC 8513-2673-2-10-10");
    SetObjectType("Star");
    SetIsRealObject("Procedural Object");
    SetDescription(
      "Kryo A is a solar system I gave lore when I was bored in space engine. I gave it lore because it seemed cool and I was kinda bored while I was playing space engine. Kryo A has a proper description in game but I dont feel like opening the game to check."
    );
  }, []);

  return (
    <>
      <h1 className="text-5xl m-5 mb-2">{ObjectName}</h1>
      <h2 className="text-2xl ml-5 mb-2">In Game Name: {InGameName}</h2>
      <h2 className="text-2xl ml-5 mb-2">Object Type: {ObjectType}</h2>
      <h2 className="text-2xl ml-5 mb-4.5">{IsRealObject}</h2>
      <div className="w-screen h-[1px] bg-white mb-4.5"></div>
      <p className="m-5 mt-0 text-[30px]">{Description}</p>
    </>
  );
}
