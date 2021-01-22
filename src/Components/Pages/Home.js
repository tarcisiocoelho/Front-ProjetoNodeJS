import './Home.css'
import Footer from '../Footer/Footer';
export default function Home(){
    return(
    <div className="container my-5" >
        <div className="text-center">
            <h1 className="display-4">Bem vindos ao Pink Store!</h1>
            <a href="/produtos" to="/produtos" class="btn cor-botao my-4">Clique aqui e acesse nossos produtos</a>
        </div>
        <Footer className="mt-5"/>
    </div>
    );
}