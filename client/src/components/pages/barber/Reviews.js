import { Link } from "react-router-dom"
import BarberDashboardLayout from "../../layouts/BarberDashboardLayout"

export default function Reviews() {
  const renderContent = () => {
    return (
      <div>
        this is reviews
        <Link to='/barber/dashboard'>To dashboard</Link>
      </div>
    )
  }

  return <BarberDashboardLayout body={renderContent()} />
}
