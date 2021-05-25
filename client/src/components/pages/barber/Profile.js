import { Link } from 'react-router-dom'
import BarberDashboardLayout from '../../layouts/BarberDashboardLayout'

export default function Profile() {

  const renderContent = () => {
    return (
      <div>
        this is profile
        <Link to='/barber/dashboard'>To dashboard</Link>
      </div>
    )
  }

  return <BarberDashboardLayout body={renderContent()} />
}
