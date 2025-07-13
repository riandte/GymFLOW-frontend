import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rotas from './routes';
import NavBar from './components/navbar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <Rotas />
  </StrictMode>,
)
