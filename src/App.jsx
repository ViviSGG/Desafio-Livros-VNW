import Doados from "./pages/Doados/Doados"
import Formulario from "./pages/Formulario/Formulario"
import Inicio from "./pages/Inicio/Inicio"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './GlobalStyle/globalStyle.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/doados" element={<Doados/>} />
            <Route path="/formulario" element={<Formulario/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
