import { Link } from "react-router";
import { useState } from "react";
import './multiplicar.scss'

export default function multiplicar(){
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)

    const calculo = ()=>{
        const result = numero1 * numero2;
        alert(result); 
    }
    return(
        <div>
            <Link to={'/'}>Voltar</Link>

            <input 
                type="number" 
                value={numero1} 
                onChange={(e) => setNumero1(Number(e.target.value))} 
            />
            <input 
                type="number" 
                value={numero2} 
                onChange={(e) => setNumero2(Number(e.target.value))} 
            />
            <button onClick={calculo}>Calcule</button>
        </div>
    )
}