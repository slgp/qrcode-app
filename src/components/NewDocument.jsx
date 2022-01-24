import React from 'react'
import { createDocument } from "../api"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom";
import DocumentForm from './DocumentForm';

export default function NewDocument({currentUser}) {
  let navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation(createDocument)

  const withUserData = {
    title: '',
    signee: '',
    creator: currentUser?.username
  }
  const onFormSubmit = async (data) => {
    await mutateAsync({...data})
    navigate("/")
  }

  return (
      <div className="py-20">
        <h2 className="text-center uppercase font-bold text-xl text-blue-900">New Document</h2>
        <DocumentForm onFormSubmit={onFormSubmit} isLoading={isLoading} currentUser={currentUser} defaultValues={withUserData}/>
      </div>
  )
}
