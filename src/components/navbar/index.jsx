import React from 'react';
import ItemMenu from '../itemMenu';
import Navegacao from '../navegacao';

const Navbar = (props) => (

    <nav>
        <img src='public/iconeLogo.png' alt='Ícone spriteCreator' />
        <Navegacao />
        <ItemMenu />
    </nav>
);

export default Navbar;
