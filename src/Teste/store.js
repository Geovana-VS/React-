import axios from 'axios';
import {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Store()
{
    // Para apresentar ao usuáro o resultado da operação
    const [status,setStatus] = useState('');
    // Para armazenar dados digitados pelo usuário
    const texto = useRef("");
    // Formulário para coleta dos dados do novo objeto
    return(
        <div>
            <form onSubmit={ gravar } className='formulario'>
                texto: <input ref={texto} type="text" maxlength="100" required />
                <button type='submit'>Enviar</button>
            </form>
            <h3>{status.teste}</h3>
            <h4>Dados retornados pela API: 
                Texto: {status.dados == null ? "" : status.dados.texto} 
            </h4>
            <Link to='/teste'>Voltar</Link>
        </div>
    )

    // Chamada a função da API
    async function gravar(e){
        e.preventDefault(); // cancela o submit
        try{
            // monta json
            const json = {texto: texto.current.value}
            // Chama função da API enviando o json com os dados do novo objeto
            const resposta = await axios.post('http://localhost:4000/teste',json);
            setStatus(resposta.data);
            console.log(resposta); // pressione F12 e no console veja o que veio da API no backend
        } catch(erro) {
            setStatus(`Falha: ${erro}`);
        }
    }
}
export default Store