"use client";

import { useState } from 'react'

export default function Home() {
  const [SearchBarContents, SetSearchBarContents] = useState<string>('')

  return (
    <>
      <h1 className="title-text">Space Engine Object Catalog</h1>
      <div className="search-div">
        <input
          type='text'
          value={SearchBarContents}
          onChange={e => SetSearchBarContents(e.target.value)}
          className='search-bar'
        />

        <button className='search-button'>Search</button>
      </div>
    </>
  );
}
