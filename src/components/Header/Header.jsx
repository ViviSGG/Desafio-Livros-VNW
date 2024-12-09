import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import s from './header.module.scss'
import Logo from "../../assets/logo.png"
import Lupa from "../../assets/search.png"

function Header(){
    return(
        <header className={s.header}>
            <figure>
                <img src={Logo} alt="" />
                <figcaption>Livros Vai na Web</figcaption>
            </figure>
            <nav>
                <ul>
                    <li>
                        <Link className={s.link} to="/">Início</Link>
                    </li>
                    <li>
                        <Link className={s.link} to="/doados">Livros doados</Link>
                    </li>
                    <li>
                        <Link className={s.link} to="/formulario">Quero doar</Link>
                    </li>
                </ul>
            </nav>
            <button>
                <input type="search" name="busca" placeholder="O que você procura?" id="Lupa ícone" />
                <img src={Lupa} alt="Icone de lupa branca" />
            </button>
        </header>
    )
}
export default Header
