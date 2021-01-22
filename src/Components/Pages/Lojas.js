import React from 'react';

export default function Lojas(){
    return(
        
    <div className="row container mt-5 d-flex ml-auto mr-auto">
        <div className="col-md-4 card text-center m-2 mx-auto">
          <img src={require('../Img/ponto.png').default} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">São Paulo</h5>
            <div className="d-flex text-break">

              <p className="ml-auto p-2 lead">
                Avenida Joaquim de Santana,
                Butantã, SP
              </p>
              
            </div>
          </div>
        </div>

        <div className="col-md-4 card text-center m-2 mx-auto">
          <img src={require('../Img/ponto.png').default} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Rio de Janeiro</h5>
            <div className="d-flex text-break">

              <p className="ml-auto p-2 lead">
                Avenida das Américas,
                Barra da Tijuca, RJ
              </p>
              
            </div>
          </div>
        </div>

        <div className="col-md-4 card text-center m-2 mx-auto">
          <img src={require('../Img/ponto.png').default} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Salvador</h5>
            <div className="d-flex text-break">

              <p className="ml-auto p-2 lead">
                Avenida Afrânio Peixoto,
                Arraial do Retiro, SSA
              </p>
              
            </div>
          </div>
        </div>
    </div>
    );
}