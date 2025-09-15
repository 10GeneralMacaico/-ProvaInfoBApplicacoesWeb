import { Link } from "react-router"
import './inicio.scss'

export default function Inicio(){
    return(
        <div>
            <h1>Gustavo Maximiano De Oliveira</h1>
            <h2>Info b</h2>
            <Link to={'/Multiplicar'}>Multipliquye</Link>
        </div>
        
    )
}