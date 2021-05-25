import { Link } from 'react-router-dom'
import BarberDashboardLayout from '../../layouts/BarberDashboardLayout'

export default function Services() {
  const renderContent = () => {
    return (
      <div>
        this is services
        <Link to='/barber/dashboard'>To dashboard</Link>
      </div>
    )
  }

  return <BarberDashboardLayout body={renderContent()} />
}
