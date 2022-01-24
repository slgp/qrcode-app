import React from 'react'
import Button from "./components/Button";
import Documents from "./components/Documents";
import Search from "./components/Search";

export default function App() {
  return (
    <>
      <div className="bg-slate-100 h-screen py-10">
      <div className="mx-auto space-y-2 bg-white max-w-7xl rounded-lg">
        <div className="flex justify-between items-center w-full gap-2">
          <Search />
          <Button />
        </div>
        <Documents />
      </div>
      </div> 
    </>
  )
}


