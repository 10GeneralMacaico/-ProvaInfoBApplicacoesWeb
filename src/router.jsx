import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from './pages/inicio.jsx'
import Mult from './pages/multiplicar.jsx'

export default function Rotas(){
    return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/multiplicar" element={<Mult />} />
            </Routes>
       </BrowserRouter>
    )
}