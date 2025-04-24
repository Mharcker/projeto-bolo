import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function Menu(){
  return(
    <ul className = "menu">
      <li className='menuitem'><a href="../../index.html">Home</a></li>
      <li id="barramenu" className='menuitem'><a href="../../pages/carrinho.html">Carrinho</a></li>
    </ul>
  )
}
function Header(){
  return(
    <header className="ralewayfont">
      <h1>Sugar Rush</h1>
      <Menu/>
    </header>
  )
}
function AdicionarProduto(){
  return(
    <div className='inputbox'>
      <div className='inputitem'>
        <label for="produto" className='ralewayfont'>Nome do produto</label>
        <input type="text" id="produto" name="produto" placeholder="Cupcake" className='ralewayfont'/>
      </div>
      <div className='inputitem'>
        <label for="price" className='ralewayfont'>Preço</label>
        <input type="text" id="price" name="price" placeholder="R$ 15,00" className='ralewayfont'/>
      </div>
      <div className='inputitem'>
        <label for="desc" className='ralewayfont'>Descrição</label>
        <input type="text" id="desc" name="desc" placeholder="Um pequeno bolo" className='ralewayfont'/>
      </div>
      <button class="inputitem"><i class="fas fa-plus"></i></button>
    </div>
  )
}
function CupcakeItem({ className = "" }){
    return(
      <figure className={`cupitem ${className}`}>
        <img src="../../extra/icon _cupcake_.png" />
        <p className='ralewayfont cuptxt'>Cupcake</p>
      </figure>
    )
}
function Main(){
  return(
    <main className="ralewayfont">
      <section className='flexitem' id='sec1'>
        <h1 className="ralewayfont">Welcome</h1>
        <h2 className="ralewayfont">CRAVING SUGAR?</h2>
      </section>
      <section className='flexitem' id='sec2'>
        <CupcakeItem className="discount"/>
        <CupcakeItem className="cupitem"/>
        <CupcakeItem className="cupitem"/>
      </section>
      <section className='flexitem' id='sec3'>
        <AdicionarProduto/>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Main/>
  </StrictMode>,
)
