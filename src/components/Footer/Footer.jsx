import React from "react"
import Facebook from "../../assets/facebook.png"
import Twitter from "../../assets/twitter.png"
import Youtube from "../../assets/youtube.png"
import Linkedin from "../../assets/linkedin.png"
import Instagram from "../../assets/instagram.png"
import s from './footer.module.scss'

function Footer(){
    return (
        <footer className={s.footer}>
            <section className={s.box1}>
                <p>4002-8922</p>
                <nav>
                    <ul>
                        <li><img src={Facebook} alt="" /></li>
                        <li><img src={Twitter} alt="" /></li>
                        <li><img src={Youtube} alt="" /></li>
                        <li><img src={Linkedin} alt="" /></li>
                        <li><img src={Instagram} alt="" /></li>
                    </ul>
                </nav>
            </section>
            <section>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}
export default Footer
