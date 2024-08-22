import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'; 
import PokemonProvider from './context/PokemonProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </BrowserRouter>
)
