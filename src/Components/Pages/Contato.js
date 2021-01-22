import './Contato.css';
import React from 'react';

export default function Contato(){
    const [form, setForm] = React.useState({

        nome: "",
        email: "",
        mensagem: ""
    })

    const [response, setResponse] = React.useState(null)

    function handleChange({target}){
        const {id, value} = target
        setForm({...form, [id]: value})
        console.log({[id]:value});
    }

    function handleSubmit(event){
        fetch('http://localhost:3005/mensagem', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //transforma em json para mandar pra api e api mandar pro banco
            body: JSON.stringify(form)
        }).then((res) =>{
            setResponse(res);
        })
    }


    return(
        <div className="container mt-4 contato">
        <h3 className="text-center display-4">Envie sua mensagem!!</h3>
        <form onSubmit={handleSubmit}> 
            <div className="form-group">
                <label for="text">Nome</label>
                <input type="text" className="form-control" name="nome" id="nome" value={form.nome} onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" name="email" id="email" value={form.email} onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <label>Digite sua mensagem</label>
                <textarea class="form-control" name="mensagem" id="mensagem" value={form.mensagem} onChange={handleChange}/>
                <button className="btn btn-primary mt-3" type="submit">Enviar</button>
            </div>
        </form>
            <p className="text-center display-4">ou nos encontre nas redes</p>
            <div className="d-flex text-center mt-5">   
                <div className="hover">
                    <img src={require('../Img/redesocial/email.png').default} alt="" />
                    <img src={require('../Img/redesocial/facebook.png').default} alt=""/>
                    <img src={require('../Img/redesocial/instagram.png').default} alt=""/>
                    <img src={require('../Img/redesocial/twitter.png').default} alt=""/>
                </div>
            </div>
        </div>        
    );
}