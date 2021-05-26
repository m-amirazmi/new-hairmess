import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { isAuthenticated } from "../../utils/auth";
import ModalNotify from "../ui/ModalNotify";
import Navbar from "../ui/Navbar";
import SidebarBarber from "../ui/SidebarBarber";

export default function BarberDashboardLayout({ body }) {

  const [newBarber, setNewBarber] = useState()

  const { push } = useHistory()

  useEffect(() => {
    const isNew = checkNewBarber()
    return isNew
  }, [])

  const checkNewBarber = () => {
    const { timestampCreated, timestampUpdated } = isAuthenticated()
    const getIsNew = sessionStorage.getItem('isNew')
    if (timestampCreated === timestampUpdated && !getIsNew) return setNewBarber(true)
  }

  const handleModal = () => {
    setNewBarber(false)
    sessionStorage.setItem('isNew', 1)
    push('/barber/dashboard/profile')
  }

  const renderContent = () => {
    return (
      <main className='container-fluid'>
        <div className='row __barber_dashboard'>
          <aside className='col-md-2 __barber_dashboard_sidebar'>
            <SidebarBarber />
          </aside>
          <section className='col-md-10 p-0'>
            <div className='container-fluid rounded-3 __barber_dashboard_body'>
              <div className='rounded-3 __barber_dashboard_body_container'>
                <Navbar />
                {body}
              </div>
            </div>
          </section>
        </div>
      </main>
    )
  }

  const renderModal = () => {

    const head = 'Notify Profile Update'

    const body = (
      <div>
        <p>It seems you're a new registered barber and there is not much information about you.</p>
        <p>So, please update your profile so that you will be listed on customer view.</p>
      </div>
    )

    const foot = <button className='btn btn-primary' onClick={handleModal}>UPDATE PROFILE NOW</button>

    return <ModalNotify head={head} body={body} foot={foot} />
  }

  return (
    <>
      {renderContent()}
      {newBarber && renderModal()}
    </>
  )
}
