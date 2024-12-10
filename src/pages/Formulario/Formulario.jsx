import React from "react"
import Livro from "../../assets/livro.png"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import s from "./formulario.module.scss"

function Formulario(){
    return(
        <section className={s.formulario}>
            <Header/>
            <main>
                <h2>Formulário de Doação</h2>
                <p>Por favor, preencha o formulário com suas informações e as informações do Livro.</p>
                <fieldset>
                    <form action="">
                        <div>
                            <img src={Livro} alt="" />
                            <h3>Informações do livro</h3>
                        </div>
                        <section className={s.inputs}>
                            <input type="text" name="titulo" id="titulo" placeholder="Título"/>
                            <input type="text" name="categoria" id="categoria" placeholder="Categoria"/>
                            <input type="text" name="autor" id="autor" placeholder="Autor"/>
                            <input type="url" name="imagem" id="imagem" placeholder="Link da imagem"/>
                        </section>
                        <section className={s.button}>
                            <input type="button" value="Doar" />
                        </section>
                    </form>
                </fieldset>
            </main>
            <Footer/>
        </section>
    )
}
export default Formulario
