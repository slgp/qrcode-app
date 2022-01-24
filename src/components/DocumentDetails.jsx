import { useState } from "react";
import { useQuery  } from "react-query"
import { getAllDocuments } from "../api"
import {  Link, useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import QRCode from 'qrcode'

import dateFormat from "dateformat";


export default function DocumentDetails() {
  let { id } = useParams();
  let [qrcodeData, setQRCodeData] = useState(null)

  const { data, error, isLoading, isError } = useQuery("documents", getAllDocuments);
  
  const foundDoc = data?.data?.find(document => document._id === id)

  // palabasin c Document single - Done
  // problem is bka kulang sa details kc galing sa single array
  // baguhin ang backend ibigay lang un tatlo title, date, id

  
  const generateQRCode = async text => {
    try {
      let qrcode = await QRCode.toDataURL(text)  
      setQRCodeData(qrcode)
    } catch (err) {
      return err
    }
  }

  generateQRCode(`${foundDoc._id} - ${foundDoc.title} - ${foundDoc.signee} - ${foundDoc.creator}`)

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
  <div className="mt-8 sm:mx-auto sm:max-w-lg">
    <div className="flex flex-col items-start gap-7 py-8 px-6 mb-0 shadow rounded-lg sm:px-10 bg-white">
        <div className="flex flex-col items-start gap-1">
          <span className="block text-xs font-semibold text-gray-400">Document ID</span>
          <span>{foundDoc._id}</span>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="block text-xs font-semibold text-gray-500">Title</span>
          <span>{foundDoc.title}</span>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="block text-xs font-semibold text-gray-500">MIS (Creator)</span>
          <span>{foundDoc.creator}</span>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="block text-xs font-semibold text-gray-500">Date Created</span>
          <span>{dateFormat(foundDoc.createdAt, "mmmm dS, yyyy")}</span>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="block text-xs font-semibold text-gray-500">Date Updated</span>
          <span>{foundDoc.updatedAt}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block text-xs font-semibold text-gray-500">Signee</span>
          <span className="inline-block border text-xs border-blue-900 rounded-full px-3 py-1">{foundDoc.signee}</span>
        </div>
        <div className="flex flex-col items-start gap-1">
          <span className="inline-block text-xs font-semibold text-gray-500">QR Code</span>
          <img src={qrcodeData} height={100} alt="Generated QR Code" download/> 
          
        </div>
        <Link to="/" className="cursor-pointer grid place-items-center bg-blue-200 w-full py-2 rounded-lg hover:bg-blue-300 focus:ring-2 focus:ring-blue-700">
          Back
        </Link>
    </div>
  </div>
  )
}
