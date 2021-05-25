import Navbar from "../ui/Navbar";
import SidebarBarber from "../ui/SidebarBarber";

export default function BarberDashboardLayout({ body }) {

  return (

    <main className='container-fluid'>
      <div className='row __barber_dashboard'>
        <aside className='col-md-2 __barber_dashboard_sidebar'>
          <SidebarBarber />
        </aside>
        <section className='col-md-10 p-0'>
          <Navbar />
          <div className='container-fluid __barber_dashboard_body'>
            {body}
          </div>
        </section>
      </div>
    </main>
  )
}
