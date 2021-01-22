export default function ComplePedidos(props){
    return(     
        <tbody>
            <tr>
                <td>{props.id_pedido}</td>
                <td>{props.nome}</td>
                <td>{props.cidade}</td>
                <td>{props.produto}</td>
                <td>{props.quantidade}</td>
                <td>{props.empresa}</td>
                <td>{props.prazo}</td>
            </tr>
        </tbody>
            
    );
}

