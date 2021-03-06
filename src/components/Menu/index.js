import React from 'react'
import Logo from '../../assets/img/codeFLIX_.png'
import './Menu.css'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="logomarca codeflix" />
            </a>

            <Button className="ButtonLink" href="/cadastro/video">
                Adicionar um Vídeo
            </Button>
        </nav>
    )
}

export default Menu