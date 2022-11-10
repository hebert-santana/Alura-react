import logo from '../../imagens/logo.svg';
import './estilo.css';


function Logo() {
    return (
        <div className='logo'>
            <img 
            src={logo} 
            alt='logo alura books' 
            className='logo-img'></img>
            <p><strong>Alura</strong>Books</p>
        </div>   
    )
};

export default Logo; // estamos exportando para todos nossos arquivos
