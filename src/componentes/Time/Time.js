import Colaborador from '../Colaborador/Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
   
    return(
        (props.colaboradores.length > 0) ? <section className='time' style={{backgroundColor: hexToRgba(props.cor, '0.6')}}>
            <input onChange={e => props.mudarCor(e.target.value, props.id)} value={props.cor}type='color' className='input-cor'/>
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.cor}key={colaborador.nome} nome={colaborador.nome} imagem={colaborador.imagem} cargo={colaborador.cargo} aoDeletar={props.aoDeletar} id={colaborador.id} aoFavoritar={props.aoFavoritar} favorito={colaborador.favorito}/>)}
            </div>
        </section>

        : ''
        
    )
}

export default Time