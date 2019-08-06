import React, { Component } from 'react';

import facebookLogo from '../assets/facebook.png';

class Header extends Component {
  render() {
    return (
      <header>
        <nav id="header">
          <img src={facebookLogo} alt="Facebook" />
          <a href="#meuPerfil">Meu Perfil</a>
        </nav>
      </header>
    );
  }
}

export default Header;
