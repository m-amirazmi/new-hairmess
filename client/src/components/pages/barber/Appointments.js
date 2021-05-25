import { Link } from "react-router-dom"
import BarberDashboardLayout from "../../layouts/BarberDashboardLayout"

export default function Appointments() {
  const renderContent = () => {
    return (
      <div>
        this is appointments
        <Link to='/barber/dashboard'>To dashboard</Link>
      </div>
    )
  }

  return <BarberDashboardLayout body={renderContent()} />
}
