import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SelectionPage from './pages/SelectionPage'
import BattlePage from './pages/BattlePage'
import ResultsPage from './pages/ResultsPage'
import NotFoundPage from './pages/NotFoundPage'
import CookiePage from './pages/TheCookiePage'


function App() {
  <SelectionPage />

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/selection" element={<SelectionPage />}></Route>
        <Route path="/battle" element={<BattlePage />}></Route>
        <Route path="/result" element={<ResultsPage />}></Route>
        <Route path="/thecookie" element={<CookiePage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
