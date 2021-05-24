import { StrictMode } from 'react';
import ReactDOM from 'react-dom'
import App from './components/App';

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
