import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline'
import { Oval } from 'react-loader-spinner';

export default function DocumentMenu({id, remove, isLoading}) {
  const [isDelete, setIsDelete] = useState(true)

  return (
    <>
      {
        isDelete ? (
          <div className='flex justify-center items-center gap-5 w-32'>
            <Link to={`/document/${id}`}>
            <EyeIcon className='cursor-pointer h-5 text-slate-500 hover:text-slate-700 hover:scale-105'/>
            </Link>
            <Link to={`/update-document/${id}`}>
              <PencilIcon className='cursor-pointer h-5 text-slate-500 hover:text-slate-700 hover:scale-105'/>
            </Link>
            <TrashIcon onClick={() => setIsDelete(!isDelete)} className='cursor-pointer h-5 text-slate-500 hover:text-slate-700 hover:scale-105'/>
        </div>
        ) : (
          <div className='flex flex-col gap-2'>
            <span className='text-xs text-red-700'>Delete this document?</span>
            <div className='flex justify-center items-center gap-2 w-32'>
              
              <button onClick={remove} className='text-xs border border-red-700 px-2 py-1'>
              { isLoading ? <Oval color="#000" height={10} /> : "Yes" }
              </button>
              <button onClick={() => setIsDelete(!isDelete)} className='text-xs border border-slate-700 px-2 py-1'>No</button>
            </div>
          </div>
        )
      }
    </>
  )
}
