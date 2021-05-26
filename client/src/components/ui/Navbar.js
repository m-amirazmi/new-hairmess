import { useHistory } from 'react-router'
import { isAuthenticated } from '../../utils/auth'

export default function Navbar() {

  const { location } = useHistory()

  const renderNavbar = () => {
    const pageName = location.pathname.split('/')[2]
    const barberName = isAuthenticated().user.name
    return (
      <nav className='navbar navbar-light bg-white rounded-3 __barber_navbar'>
        <div className='container-fluid'>
          <div className='ms-auto __barber_navbar_avatar'>
            <i className="bi bi-bell"></i>
            <i className="bi bi-person-circle"></i>
          </div>
        </div>
      </nav>
    )
  }

  return renderNavbar()
}
