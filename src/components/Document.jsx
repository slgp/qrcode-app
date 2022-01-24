import React from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from "react-query";
import { removeDocument } from "../api";
import { BookmarkIcon } from "@heroicons/react/outline";
import DocumentMenu from "./DocumentMenu";
import dateFormat from 'dateformat';


export default function Document({title, id, createdAt}) {
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading } = useMutation(removeDocument)

  const remove = async () => {
    await mutateAsync(id)
    queryClient.invalidateQueries('documents')
  }

  return (
      <div className="p-5 flex justify-between items-center gap-2">
        <div className='flex items-center gap-5'>
          <BookmarkIcon className='cursor-pointer h-5 text-slate-500 hover:text-slate-700 hover:scale-105' />
          <Link to={`/document/${id}`}>
            <p className=" text-slate-900 max-w-2xl uppercase text-sm truncate cursor-pointer hover:underline hover:text-blue-500">{title}</p>
          </Link>
        </div>
        <div className='flex items-center'>
          <p className="text-sm font-medium text-red-500 px-10">{dateFormat(createdAt, "mmmm d, yyyy")}</p>
          <DocumentMenu id={id} remove={remove} isLoading={isLoading}/>
        </div>
      </div>
  )
}
