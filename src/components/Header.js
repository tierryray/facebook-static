import React, { Component } from 'react';

import facebookLogo from '../assets/facebook.png';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <img src={facebookLogo} alt="Facebook" />
      </div>
    );
  }
}

export default Header;
