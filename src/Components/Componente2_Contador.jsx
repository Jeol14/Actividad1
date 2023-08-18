import React from 'react'

function Componente2_Contador(props) {
    const almacenar=()=>{
        localStorage.setItem('Contador', props.count)
    }
  return (
    <div>
        
       <button onClick={()=>props.setCount (e=>e+1)}>Aumentar</button><p> </p>
       <button onClick={()=>props.setCount (e=>e-1)}>Disminuir</button><p> </p>
       <button onClick={()=>props.setCount (e=>0)}>Reiniciar</button>
       <button onClick={almacenar}>Almacenar en LocalStorage</button><p> </p>
    </div>
  )
}

export default Componente2_Contador