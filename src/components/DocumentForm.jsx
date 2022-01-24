import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";

export default function DocumentForm({  defaultValues, onFormSubmit, isLoading, currentUser }) {

  const { register, handleSubmit } = useForm({defaultValues})

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data)
  })

  if (isLoading) {
    return (
      <div className='h-screen w-screen grid place-items-center'>
        <Oval color="#000" height={20} />
      </div>
    );
  }

  return (
  <div className="mt-8 sm:mx-auto sm:max-w-lg">
    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <form className="mb-0 space-y-6" onSubmit={onSubmit}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <div className="mt-1">
            <input ref={register} id="title" name="title" type="text"  className="w-full border-gray-300 rounded-lg shadow-sm"/>
          </div>
        </div>
        <div>
          <label htmlFor="signee" className="block text-sm font-medium text-gray-700">Signee</label>
          <div className="mt-1">
            <select name="signee" id="signee" ref={register}
            className="w-full border-gray-300 rounded-lg shadow-sm"
            >
              <option value="">Please select</option>
              <option value="Richard L. Villacorte">Richard L. Villacorte</option>
              <option value="Glenn Q. Miranda">Glenn Q. Miranda</option>
              <option value="Allyn J. Lopez">Allyn J. Lopez</option>
            </select>
          </div>
      </div>
        <div>
          <div className="flex items-center gap-2">
          <span className="inline-block text-xs font-semibold text-gray-500">MIS (Creator)</span>
          <span className="inline-block border text-xs border-blue-900 rounded-full px-3 py-1">{currentUser?.username || defaultValues?.creator}</span>
          <input ref={register} id="creator" name="creator" type="text"  className="hidden w-full border-gray-300 rounded-lg shadow-sm"/>
        </div>
        </div>

        <button className="grid place-items-center bg-blue-200 w-full py-2 rounded-lg hover:bg-blue-300 focus:ring-2 focus:ring-blue-700">
        { isLoading ? <Oval color="#000" height={20} /> : "Submit" }
        </button>
      </form>
    </div>
   </div>
  )
}
