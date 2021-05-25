import { useHistory } from 'react-router'
import { isAuthenticated } from '../../utils/auth'

export default function Navbar() {

  const { location } = useHistory()

  const renderNavbar = () => {
    const pageName = location.pathname.split('/')[2]
    const barberName = isAuthenticated().user.name
    return (
      <nav className='navbar navbar-light bg-primary __barber_navbar'>
        <div className='container-fluid'>
          <span className='navbar-brand mb-0 h1 text-capitalize'>{pageName}</span>
          <div className='__barber_navbar_avatar'>
            <p>Welcome, <span>{barberName}</span></p>
            <i className="bi bi-person-circle"></i>
            <i className="bi bi-bell"></i>
          </div>
        </div>
      </nav>
    )
  }

  return renderNavbar()
}
