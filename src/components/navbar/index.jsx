import React from 'react';
import ItemMenu from '../itemMenu';
import Navegacao from '../navegacao';


const Navbar = (props) => (

    <navbar>

        <img src='public\iconeLogo.png' alt='Ícone SpriteCreator' />

        <Navegacao></Navegacao>

        <Menu></Menu>

    </navbar>
    
);

export default Navbar;