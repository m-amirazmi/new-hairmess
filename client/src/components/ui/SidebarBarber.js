import LOGO from '../../assets/images/logo.svg'
import { routes } from '../../utils/routes'
import { isAuthenticated } from '../../utils/auth'
import { Link, useHistory } from 'react-router-dom'

export default function SidebarBarber() {

  const { location } = useHistory()

  const renderBrand = () => {
    return (
      <div>
        <img src={LOGO} alt='logo.svg' className='__barber_dashboard_logo' />
      </div>
    )
  }

  const links = routes.map((route) => {
    const active = location.pathname === route.path && 'shadow-sm rounded-3 border-start border-3 border-primary'
    if (isAuthenticated()?.user?.role === 'barber' && route.onSidebar) return <Link key={route.path} to={route.path} className={`${active} __barber_dashboard_link_item`}>
      <i className={route.icon}></i>
      <span>{route.name}</span>
    </Link>
  })

  const renderSideLinks = () => {
    return (
      <div className='__barber_dashboard_sidelinks'>
        {links}
      </div>
    )
  }

  return (
    <>
      {renderBrand()}
      {renderSideLinks()}
    </>
  )
}
