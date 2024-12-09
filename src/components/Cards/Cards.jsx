import React from "react"
import s from './cards.module.scss'
import Comunidade from '../../assets/comunidade.png'
import Leitura from '../../assets/leitura.png'
import Transformacao from '../../assets/transformacao.png'
import Balanca from '../../assets/balanca.png'

function Cards(){
    return (
        <section className={s.cards}>
            <h2>Por que devo doar?</h2>
            <div>
                <figure>
                    <img src={Comunidade} alt="comunidade" />
                    <figcaption> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</figcaption>
                </figure>
                <figure>
                    <img src={Leitura} alt="" />
                    <figcaption>Estimula o hábito da leitura e o aprendizado contínuo.</figcaption>
                </figure>
                <figure>
                    <img src={Transformacao} alt="" />
                    <figcaption>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</figcaption>
                </figure>
                <figure>
                    <img src={Balanca} alt="" />
                    <figcaption>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</figcaption>
                </figure>
            </div>
        </section>
    )
}
export default Cards
