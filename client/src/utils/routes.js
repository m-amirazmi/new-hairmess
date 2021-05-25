import Appointments from '../components/pages/barber/Appointments';
import Dashboard from '../components/pages/barber/Dashboard';
import Login from '../components/pages/barber/Login';
import Profile from '../components/pages/barber/Profile';
import Register from '../components/pages/barber/Register';
import Reviews from '../components/pages/barber/Reviews';
import Services from '../components/pages/barber/Services';
import Settings from '../components/pages/barber/Settings';

export const routes = [
  // BARBER
  { path: '/barber/register', name: 'Register', component: Register },
  { path: '/barber/login', name: 'Login', component: Login },
  { path: '/barber/dashboard', name: 'Dashboard', icon: 'bi bi-columns-gap', protected: true, onSidebar: true, component: Dashboard },
  { path: '/barber/dashboard/profile', name: 'Profile', icon: 'bi bi-person', protected: true, onSidebar: true, component: Profile },
  { path: '/barber/dashboard/appointments', name: 'Appointments', icon: 'bi bi-calendar-check', protected: true, onSidebar: true, component: Appointments },
  { path: '/barber/dashboard/services', name: 'Services', icon: 'bi bi-tools', protected: true, onSidebar: true, component: Services },
  { path: '/barber/dashboard/settings', name: 'Settings', icon: 'bi bi-gear', protected: true, onSidebar: true, component: Settings },
  { path: '/barber/dashboard/reviews', name: 'Reviews', icon: 'bi bi-list-stars', protected: true, onSidebar: true, component: Reviews },
]