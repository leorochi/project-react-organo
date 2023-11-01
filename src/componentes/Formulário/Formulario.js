import { useState } from "react"
import Botao from "../Botao/Botao"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa"
import './Formulario.css'
import { v4 as uuidv4 } from 'uuid';


const Formulario = (props) => {

    

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');
    

    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            id: uuidv4(),
            favorito: false
        })

        setNome('');
        setCargo('');
        setImagem('');
        setTime('');        

    }

    

    return (        
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                obrigatorio={true} 
                label='Nome' 
                placeholder='Digite o nome'
                valor={nome}
                aoAlterado={valor => setNome(valor)} />
                <CampoTexto 
                obrigatorio={true} 
                label='Cargo' 
                placeholder='Digite o cargo'
                valor={cargo}
                aoAlterado={valor => setCargo(valor)} />
                <CampoTexto  
                label='Imagem' 
                placeholder='Digite o endereço da imagem'
                valor={imagem}
                aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa 
                obrigatorio={true} 
                label='Time' 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(e => {
                e.preventDefault();
                props.cadastrarTime({nome: nomeTime, cor: corTime})
            })}>
                <h2>Preencha os dados para criar o card do time.</h2>
                <CampoTexto 
                obrigatorio={true} 
                label='Nome' 
                placeholder='Digite o nome do time'
                valor={nomeTime}
                aoAlterado={valor => setNomeTime(valor)} />
                <CampoTexto 
                obrigatorio={true} 
                label='Cargo' 
                placeholder='Digite a cor do time'
                valor={corTime}
                aoAlterado={valor => setCorTime(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario