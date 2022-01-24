import { useQuery } from "react-query";
import { getAllDocuments } from "../api";

import Document from './Document'
import { Oval } from "react-loader-spinner";

export default function Documents() {
  const { data, error, isLoading, isError } = useQuery("documents", getAllDocuments);

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
      <div className='grid gap-2'>
        {
          data && data?.data?.map(document => (
            <Document key={document?._id} title={document?.title} createdAt={document?.createdAt} id={document?._id} />
            ))
          }
      </div>
    )
  
}
