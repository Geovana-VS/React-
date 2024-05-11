import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import './style.css'

function Teste() {
 
    const [json,setJson] = useState({})

    // Código colocado no UseEffect é execucato após montagem deste componente
    useEffect( ()=>{

        async function consultar(){
            // Consulta a API
            const resposta = await axios.get("http://localhost:4000/teste")
            // Armazena resposta no useState
            setJson(resposta.data)
            console.log(resposta) // pressione F12 e no console veja o que veio da API no backend
        }

        consultar();

    } , []  )

    return(
        <div className='corpo'>
            <Link to='/testeCreate'>Criar Novo</Link>
            <p>{ `Retorno da API: ${ json.teste }` }</p>
            <table>
                <thead><tr><th>Texto</th></tr></thead>
                <tbody>
                    {json.dados==null ? null : json.dados.map( 
                        (x) => <tr key={x.id}><td>{x.texto}</td>
                        <td><Link to={"/testeUpdate/" + x.id}>Alterar</Link></td></tr> )
                    }
                </tbody>
            </table>
            <Link to="/">Voltar</Link>
        </div>
    )
}
export default Teste