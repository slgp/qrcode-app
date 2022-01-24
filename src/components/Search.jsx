import { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { Oval } from 'react-loader-spinner';

export default function Search() {
  const [title, setTitle] = useState('')
  return (
    <div className="flex items-center flex-1">
      <div className="w-full flex items-center border rounded-lg pr-3 border-gray-300 ">
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border-none rounded-lg focus:ring-0 " placeholder="Search Documents"/>
        <button>
          { false ? <Oval color="#000" height={20} /> : <SearchIcon className="h-5 cursor-pointer" /> }
        </button>
       </div>
    </div>
      )
  }
    
