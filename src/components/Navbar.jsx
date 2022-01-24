import { QrcodeIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import {
  useNavigate
} from "react-router-dom";

export default function Navbar({logout, currentUser}) {
  let navigate = useNavigate();
  let user = localStorage.getItem("user");

  const handleLogout = () => {
    logout()
    navigate("/signin")
  }
  return (
    <div className="p-2 bg-slate-900 text-slate-100">
      <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2 group'>
          <QrcodeIcon className='h-5'/>
          <span className='uppercase group-hover:underline'>SLGP QR Code App</span>
        </Link>
        <div className='flex items-center gap-3'>
          <button onClick={handleLogout} className='font-bold text-sm'>Log Out</button>
          <div className='h-7 w-7 bg-gray-700 rounded-full overflow-hidden'>
            <img src={currentUser.img} alt={user.name} />
          </div>
        </div>
      </div>
    </div>
  )
}
