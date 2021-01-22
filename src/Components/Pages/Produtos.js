import {useState, useEffect} from 'react';
import Produto from '../Produto/index';
import Footer from '../Footer/Footer';
import './style.css';

export default function Produtos(){

const [produtos, setProdutos]= useState([]);
useEffect(async () =>{
    const resposta = await fetch("http://localhost:3005/");
    const dados    = await resposta.json();
    setProdutos(dados);
    
}, []);

    return(
    <div className="container-fluid border">
        <div className="row">
            <div className="col-md-3 col-lg-2 col-xs-12">
                <nav className="navbar">
                    <ul className="text-center cat">
                        <li className="list-group-item">
                            <h4>Categoria</h4>
                        </li>
                        <li className="list-group-item">
                            Todos
                        </li>
                        <li className="list-group-item">
                            Impressora
                        </li>
                        <li className="list-group-item">
                           Fogão
                        </li>
                        <li className="list-group-item">
                            Televisão
                        </li>
                        <li className="list-group-item">
                            Microondas
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="col-md-9 col-lg-9 col-xs-12 d-flex quebrar text-center" id="categoria">
                {produtos && produtos.map(item => <Produto imagem={item.imagem} descricao={item.descricao} preco={item.preco} preco_final={item.preco_final}/>)}
            </div>
        </div>
            <Footer />
    </div>
    );
}