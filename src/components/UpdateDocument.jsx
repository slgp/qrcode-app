import { useQuery, useMutation  } from "react-query"
import { getAllDocuments, updateDocument } from "../api"
import {  useParams, useNavigate } from "react-router-dom";
import { Oval } from 'react-loader-spinner';

import DocumentForm from './DocumentForm';

export default function UpdateDocument() {
  let { id } = useParams();
  let navigate = useNavigate();
  
  const { data, error, isLoading, isError } = useQuery("documents", getAllDocuments);
  
  const foundDoc = data?.data?.find(document => document._id === id)

  const { mutateAsync, isLoading: isMutating } = useMutation(updateDocument)

  const onFormSubmit = async (formData) => {
    await mutateAsync({...formData, id})
    navigate("/")
  }


  if (isLoading) {
    return (
      <div className='h-screen w-screen grid place-items-center'>
        <Oval color="#000" height={20} />
      </div>
    );
  }

  if (isError) {
    return (
      <div> 
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="py-20">
      <h2 className="text-center uppercase font-bold text-xl text-blue-900">Update Document</h2>
      <DocumentForm title="Update" defaultValues={foundDoc} onFormSubmit={onFormSubmit} isLoading={isMutating}/>
    </div>
  )
}
