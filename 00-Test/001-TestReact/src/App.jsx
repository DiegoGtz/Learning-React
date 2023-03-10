import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Componentes/Header'
import Skills from './Componentes/Skills'
import Hobbies from './Componentes/Hobbies'


const App = () => {
  let autor = 'Diego'
  let status = true
  const skills = ['HTML', 'CSS', 'JavaScript']
  const data = {
    Lectura : 'Piensa rapido, piensa despacio',
    VideoJuegos : 'Lineage2',
    GeneroMusical : 'Hip-Hop'
  }
  return (
    <div>
      <Header autor={autor} status={status} /> 
      {/*enviamos una props con el nombre autor a nuestro componente Header */}
      <div className="App">
        <h2>Practica Props</h2>
        <h3 className='h3-skills'>Skills:</h3>
        <Skills skills={skills}/>
        <h3 className='h3-skills'>Hobbies : </h3>
        <Hobbies hobbies={data}/>
        <div className="card">
        </div>
      </div>
    </div>
  )
}

export default App
