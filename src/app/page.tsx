"use client";

import { useState } from 'react'
import { useRouter } from "next/navigation";

export default function Home() {
  const [SearchBarContents, SetSearchBarContents] = useState<string>('')
  const Router = useRouter();

  const HandleSearch = () => {
    Router.push(`/object?query=${encodeURIComponent(SearchBarContents)}`);
  };

  return (
    <>
      <h1 className="title-text">Space Engine Object Catalog</h1>
      <div className="search-div">
        <input
          type='text'
          value={SearchBarContents}
          onChange={e => SetSearchBarContents(e.target.value)}
          className='search-bar w-100 h-10'
        />

        <button className='search-button' onClick={HandleSearch}>Search</button>
      </div>
    </>
  );
}
