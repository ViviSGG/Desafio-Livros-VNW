import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <figure>
                <img src="" alt="" />
                <figcaption>Livros Vai na Web</figcaption>
            </figure>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/doados">Livros doados</Link>
                    </li>
                    <li>
                        <Link to="/formulario">Quero doar</Link>
                    </li>
                </ul>
            </nav>
            <input type="search" name="busca" placeholder="O que você procura?" id="" />
        </header>
    )
}
export default Header
