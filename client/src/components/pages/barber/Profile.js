import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { isAuthenticated } from '../../../utils/auth'
import BarberDashboardLayout from '../../layouts/BarberDashboardLayout'
import AVATAR from '../../../assets/images/avatar.png'
import ModalUpdate from '../../ui/ModalUpdate'

export default function Profile() {

  const { location, push } = useHistory()

  const [barber, setBarber] = useState()
  const [status, setStatus] = useState()

  const [dateOfBirth, setDateOfBirth] = useState(new Date())

  const [modalUpdateShop, setModalUpdateShop] = useState()
  const [modalUpdateProfile, setModalUpdateProfile] = useState()

  console.log(dateOfBirth)

  const saveStatus = () => {
    setStatus(!status)
  }

  const saveProfile = (values, { setSubmitting }) => {
    setSubmitting(true)
    console.log(values)
    setModalUpdateProfile(false)
  }

  const renderPageName = () => {
    const pageName = location.pathname.split('/')[3]
    const icon = status ? 'bi-toggle-on text-primary' : 'bi-toggle-off'
    const online = status ?
      (
        <span className={`badge rounded-pill bg-success text-uppercase`}>
          <span>online</span>
          <i className={`bi ${icon}`} onClick={saveStatus}></i>
        </span>
      ) : (
        <span className={`badge rounded-pill bg-secondary text-uppercase`}>
          <span>offline</span>
          <i className={`bi ${icon}`} onClick={saveStatus}></i>
        </span>
      )
    return (
      <div className='d-flex flex-row align-items-center justify-content-center mt-2 mb-4 __barber_dashboard_status'>
        <h2 className='text-capitalize'>{pageName}</h2>
        <h2 className='ms-auto d-flex align-items-center'>{online}</h2>
      </div>
    )
  }

  const renderProfile = () => {
    return (
      <div className='col-md-7 __barber_dashboard_profile_shop'>
        <div className='card card-body border-0'>
          <div>
            <h5>
              <span>Profile Details</span>
              <span><i className="bi bi-pencil-square" onClick={() => setModalUpdateProfile(!modalUpdateProfile)}></i></span>
            </h5>
          </div>
          <div className='row'>
            <div className='col-md-3 __barber_profile_avatar'>
              <img src={AVATAR} alt="avatar.png" className='rounded-3' />
            </div>
            <div className='col-md-9'>
              <div className='mt-3'>
                <div className='row my-2'>
                  <p className='col-md-3 text-gray'>Name:</p>
                  <p className='col-md-9'>Muhamad Amir bin Azmi</p>
                </div>
                <div className='row my-2'>
                  <p className='col-md-3 text-gray'>Email:</p>
                  <p className='col-md-9'>merbmi@email.com</p>
                </div>
                <div className='row my-2'>
                  <p className='col-md-3 text-gray'>Phone Number:</p>
                  <p className='col-md-9'>+60 11-1982-1105</p>
                </div>
                <div className='row my-2'>
                  <p className='col-md-3 text-gray'>Gender:</p>
                  <p className='col-md-9'>Male</p>
                </div>
                <div className='row my-2'>
                  <p className='col-md-3 text-gray'>Date of Birth:</p>
                  <p className='col-md-9'>27 August 1995</p>
                </div>
                <div className='row my-2'>
                  <p className='col-md-3 text-gray'>Home Address:</p>
                  <p className='col-md-9'>No 5 Taman Paka Jaya 4 23100 Terengganu</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    )
  }

  const renderShop = () => {
    return (
      <div className='col-md-5 __barber_dashboard_profile_shop'>
        <div className='card card-body'>
          <div>
            <h5>
              <span>Shop Details</span>
              <span><i className="bi bi-pencil-square" onClick={() => setModalUpdateShop(!modalUpdateShop)}></i></span>
            </h5>
          </div>

          <div className='mt-3'>
            <div className='row my-2'>
              <p className='col-md-3 text-gray'>Shop Name:</p>
              <p className='col-md-9'>Kedai Gunting RambutKu</p>
            </div>
            <div className='row my-2'>
              <p className='col-md-3 text-gray'>Shop Phone:</p>
              <p className='col-md-9'>+60 11-1982-1105</p>
            </div>
            <div className='row my-2'>
              <p className='col-md-3 text-gray'>Shop Address:</p>
              <p className='col-md-9'>A8 4 4 Jalan Pandan Mewah 68000 Ampang Selangor</p>
            </div>
            <div className='row my-2'>
              <p className='col-md-3 text-gray'>Shop Type:</p>
              <p className='col-md-9'>Unisex</p>
            </div>
            <div className='row my-2'>
              <p className='col-md-3 text-gray'>Shop Age Group:</p>
              <p className='col-md-9'>Adults</p>
            </div>
          </div>

        </div>
      </div>
    )
  }

  const renderModalUpdate = () => {

    const { user } = isAuthenticated()
    console.log(user.name)
    const head = 'Edit Profile'
    const foot = <button className='btn btn-dark' onClick={() => setModalUpdateProfile(false)}>Close</button>

    const genderList = () => { }

    const body = {
      forms: {
        initialValues: {
          name: '',
          phone: '',
          gender: '',
          dateOfBirth: '',
          street: '',
          city: '',
          postcode: '',
          state: '',
          lat: '',
          lng: '',
        },
        lists: [
          { label: 'Name', name: 'name', type: 'text', value: user.name },
          { label: 'Phone Number', name: 'phone', type: 'text', placeholder: '+60111223434' },
          {
            label: 'Gender', name: 'gender', type: 'select', placeholder: 'John Doe', options: [
              (<option value='male'>male</option>)
            ]
          },
          { label: 'Date of Birth', name: 'dateOfBirth', type: 'date', selected: dateOfBirth, setDate: setDateOfBirth },
          { label: 'Address Street', name: 'street', type: 'text', placeholder: 'A8 4 4 Jalan Pandan Mewah' },
          { label: 'City', name: 'city', type: 'text', placeholder: 'Ampang' },
          { label: 'Post Code', name: 'postcode', type: 'text', placeholder: '68000' },
          { label: 'State', name: 'state', type: 'text', placeholder: 'Selangor' },
          { label: 'Latitude', name: 'lat', type: 'text', placeholder: '3.1298582' },
          { label: 'Longitude', name: 'lng', type: 'text', placeholder: '101.7622674' },

        ]
      },
      submit: {
        btnText: 'SAVE',
        handleSubmit: saveProfile,
      }
    }


    return <ModalUpdate head={head} body={body} foot={foot} />
  }

  const renderContent = () => {
    return (
      <div className='py-4 __barber_dashboard_profile'>
        {renderPageName()}
        <div className='row'>
          {renderProfile()}
          {renderShop()}
        </div>
      </div>
    )
  }

  return (
    <>
      <BarberDashboardLayout body={renderContent()} />
      {modalUpdateProfile && renderModalUpdate()}
    </>
  )
}
