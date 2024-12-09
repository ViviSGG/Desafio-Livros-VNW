import React from "react"
import Livro from "../../assets/livro.png"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

function Formulario(){
    return(
        <section className="formulario">
            <Header/>
            <h2>Formulário de Doação</h2>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <fieldset>
                <form action="">
                    <div>
                        <img src={Livro} alt="" />
                        <h3>Informações do livro</h3>
                    </div>
                    <input type="text" name="titulo" id="titulo" placeholder="Título"/>
                    <input type="text" name="categoria" id="categoria" placeholder="Categoria"/>
                    <input type="text" name="autor" id="autor" placeholder="Autor"/>
                    <input type="url" name="imagem" id="imagem" placeholder="Link da imagem"/>
                    <input type="button" value="Doar" />
                </form>
            </fieldset>
            <Footer/>
        </section>
    )
}
export default Formulario
