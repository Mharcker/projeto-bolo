import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function Menu(){
  return(
    <ul className = "menu">
      <li className='menuitem'><a href="../../index.html">Home</a></li>
      <li className='menuitem'><a href="../../pages/carrinho.html">Carrinho</a></li>
    </ul>
  )
}
function Header(){
  return(
    <header>
      <h1>Sugar Rush</h1>
      <Menu/>
    </header>
  )
}

function Main(){
  return(
    <main>
      <section className='flexitem' id='sec1'>
        <h1 className="ralewayfont">Welcome</h1>
        <h2 className="ralewayfont">CRAVING SUGAR?</h2>
      </section>
      <section className='flexitem' id='sec2'>
        <h1>a</h1>
      </section>
      <section className='flexitem' id='sec3'>
        <h2>a</h2>
      </section>
    </main>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header className="ralewayfont"/>
    <Main className="ralewayfont"/>
  </StrictMode>,
)
