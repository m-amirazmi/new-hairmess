import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/js/bootstrap'
import './assets/styles/main.scss'
import App from './components/App'

const Main = () => {
  return (
    <App />
  )
}

ReactDOM.render(
  <StrictMode>
    <Main />
  </StrictMode>,
  document.getElementById('root')
)
