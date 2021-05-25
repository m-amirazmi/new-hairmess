import React from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { routes } from '../utils/routes'
import BarberRoute from './BarberRoute'

export default function Routes() {

  const renderRoutes = () => routes.map((route) => !route?.protected && <Route key={route.path} exact path={route.path} component={route.component} />)
  const renderPrivateBarberRoutes = () => routes.map((route) => {
    if (!!route?.protected) return <BarberRoute exact key={route.path} path={route.path} component={route.component} />
  })

  return (
    <Switch>
      {renderRoutes()}
      {renderPrivateBarberRoutes()}
      <Redirect from='*' to='/' />
    </Switch>
  )
}
