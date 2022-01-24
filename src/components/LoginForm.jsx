
import { useForm } from "react-hook-form"
import { Oval } from "react-loader-spinner"

export default function LoginForm({ onFormSubmit, isLoading, isError, error }) {

  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data)
  })

  return (
    <form className="flex flex-col items-start gap-3" onSubmit={onSubmit}>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Username {isError && `Error:${error}`}</label>
      <div className="mt-1">
        <input ref={register} id="username" name="username" type="text"  className="w-full border-gray-400 rounded-lg shadow-sm"/>
      </div>
    </div>
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
      <div className="mt-1">
        <input ref={register} id="password" name="password" type="password"  className="w-full border-gray-400 rounded-lg shadow-sm"/>
      </div>
    </div>
      <button className="grid place-items-center bg-blue-200 w-full py-2 rounded-lg hover:bg-blue-300 focus:ring-2 focus:ring-blue-700">
      { isLoading ? <Oval color="#000" height={20} /> : "Sign In" }
      </button>
    </form>
  )
}
