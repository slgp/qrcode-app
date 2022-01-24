import { QrcodeIcon } from "@heroicons/react/outline";

import { login } from "../api"
import { useMutation } from "react-query"
import LoginForm from "./LoginForm";

export default function SignIn({ authenticate }) {
  const { mutateAsync, isLoading, isError, error } = useMutation(login)

  

  const onFormSubmit = async (data) => {
    const userData = await mutateAsync({...data})
    authenticate(userData?.data)
  }

  return (
  <div className="bg-slate-700 grid place-items-center h-screen">
    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
    <div className="pb-10 flex items-center justify-center gap-3 text-slate-900">
        <QrcodeIcon className='h-5'/>
        <span className='uppercase group-hover:underline'>SLGP QR Code App</span>
    </div>
    <LoginForm onFormSubmit={onFormSubmit} isLoading={isLoading} isError={isError} error={error}/>
    </div>
   </div>
  )
}
