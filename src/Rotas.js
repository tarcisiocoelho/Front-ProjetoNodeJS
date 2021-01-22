import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Produtos from './Components/Pages/Produtos';
import Contato from './Components/Pages/Contato';
import Lojas from './Components/Pages/Lojas'
import Home from './Components/Pages/Home';
import Pedidos from './Components/Pages/Pedidos';

export default function Rotas (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/contato" component={Contato} />
                <Route exact path="/lojas" component={Lojas} />
                <Route exact path="/produtos" component={Produtos} />
                <Route exact path="/" component={Home} />
                <Route exact path="/pedido" component={Pedidos} />
            </Switch>
        </BrowserRouter>
    );
}