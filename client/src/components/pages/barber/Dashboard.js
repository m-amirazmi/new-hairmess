import { Link } from "react-router-dom";
import { isAuthenticated } from "../../../utils/auth";
import BarberDashboardLayout from "../../layouts/BarberDashboardLayout";

export default function Dashboard() {



  const renderContent = () => {
    const { user } = isAuthenticated()
    return (
      <div className='py-4 px-2'>
        <h2>Welcome {user?.name}!</h2>
        <Link to='/barber/dashboard/profile'>to profile</Link>
      </div>
    )

  }
  return <BarberDashboardLayout body={renderContent()} />

}
