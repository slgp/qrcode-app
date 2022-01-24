import React from 'react'
import { Link } from "react-router-dom";
import { PencilAltIcon } from "@heroicons/react/outline";

export default function Button() {
  return (
    <Link to='/new-document'>
      <div className="p-2 cursor-pointer hover:bg-slate-100 rounded-lg">
        <PencilAltIcon className="h-7 text-blue-500"/>
      </div>
    </Link>
  )
}
