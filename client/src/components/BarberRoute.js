import { Redirect, Route } from 'react-router'
import { isAuthenticated } from '../utils/auth'

export default function BarberRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => isAuthenticated()?.user?.role === 'barber' ? (<Component {...props} />) : (<Redirect to='/barber/login' />)} />
}
