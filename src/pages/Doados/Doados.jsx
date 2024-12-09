import React from "react"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import s from "./doados.module.scss"
import Livro from "../../assets/livro-protagonista.png"

function Doados(){
    return(
        <section className={s.doados}>
            <Header/>
            <main>
                <h2>Livros Doados</h2>
                <section className={s.livros}>
                    <figure>
                        <img src={Livro} alt="" />
                        <div>
                            <p>O protagonista</p>
                            <p>Susanne Andrade</p>
                            <p>Ficção</p>
                        </div>
                    </figure>
                </section>
            </main>
            <Footer/>
        </section>
    )
}
export default Doados