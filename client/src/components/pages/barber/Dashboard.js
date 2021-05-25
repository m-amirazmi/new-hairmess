import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      this is dashboard
      <Link to='/barber/dashboard/profile'>to profile</Link>
    </div>
  )
}
