import { Link } from "react-router-dom";
import BarberDashboardLayout from "../../layouts/BarberDashboardLayout";

export default function Dashboard() {

  const renderContent = () => {

    return (
      <div>
        <p>this is Dashboard</p>
        <Link to='/barber/dashboard/profile'>to profile</Link>
      </div>
    )

  }
  return <BarberDashboardLayout body={renderContent()} />

}
