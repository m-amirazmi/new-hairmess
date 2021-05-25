import { Link } from 'react-router-dom'
import BarberDashboardLayout from '../../layouts/BarberDashboardLayout'

export default function Settings() {
  const renderContent = () => {
    return (
      <div>
        this is settings
        <Link to='/barber/dashboard'>To dashboard</Link>
      </div>
    )
  }

  return <BarberDashboardLayout body={renderContent()} />
}
