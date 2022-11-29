import './navbar.css';

function navbar() {
    return (
        <navbar classname='navbar'>
            <img src='public\iconeLogo.png' alt='Ícone SpriteCreator' />

            <div classname='navegacao'>

                <a classname='atalhosNavegacao' href=''>
                    Explorar
                </a>

                <a classname='atalhosNavegacao' href=''>
                    Biblioteca
                </a>

                <a classname='atalhosNavegacao' href=''>
                    Tendências
                </a>
            </div>

            <div classname='menu'>

                <img src='public\botaoPerfil.png' alt='Ícone Perfil' />

                <img src='public\botaoConfiguracoes.png' alt='Ícone Configurações' />

            </div>
            
        </navbar>
    )
}

export default navbar;