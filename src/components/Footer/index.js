import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/codeFLIX_.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="logo codeflix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
        {' '}
        ❤
      </p>
      
    </FooterBase>
  );
}

export default Footer;
