import './Menu.css';
function Menu(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light fundo">
        <a className="navbar-brand">
            <img src={require('../Img/pant_index.png').default} width="100" alt="Pantera cor de rosa" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#pinkstore" aria-controls="pinkstore" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="pinkstore">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link nav-item texto" href="/" to="/">HOME<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a className="nav-link nav-item texto" href="/produtos" to="/produtos">PRODUTOS</a>
            </li>
            <li class="nav-item">
                <a className="nav-link nav-item texto" href="/pedido" to="/pedido">PEDIDOS</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link nav-item dropdown-toggle texto" id="navbarDropdown" role="button"      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    SAIBA MAIS
                </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item">História</a>
                <a className="dropdown-item">Conduta</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">Depoimentos</a>
            </div>
            </li>
            <li class="nav-item">
                <a className="nav-link nav-item texto" href="/contato" to="/contato">CONTATO</a>
            </li>
            <li class="nav-item">
                <a className="nav-link nav-item texto" href="/lojas" to="/lojas">LOJAS</a>
            </li>
        </ul>
        </div>
    </nav>
    );
}

export default Menu;