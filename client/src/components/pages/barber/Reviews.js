import { Link, useHistory } from "react-router-dom"
import BarberDashboardLayout from "../../layouts/BarberDashboardLayout"

export default function Reviews() {
  const { location } = useHistory()

  const renderPageName = () => {
    const pageName = location.pathname.split('/')[3]
    return (
      <>
        <h2 className='text-capitalize'>{pageName}</h2>
      </>
    )
  }

  const renderContent = () => {
    return (
      <div className='py-4 px-2'>
        {renderPageName()}
      </div>
    )
  }

  return <BarberDashboardLayout body={renderContent()} />
}
