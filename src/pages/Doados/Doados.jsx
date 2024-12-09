import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

function Doados(){
    return(
        <section className="doados">
            <Header/>
            <h2>Livros Doados</h2>
            <figure>
                <img src="" alt="" />
                <div>
                    <p>O protagonista</p>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </div>
            </figure>
            <Footer/>
        </section>
    )
}
export default Doados