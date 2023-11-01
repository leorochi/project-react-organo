import './Colaborador.css'
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const Colaborador = ({nome, imagem, cargo, corDeFundo, aoDeletar, id, aoFavoritar, favorito}) => {

    const favoritar = () => {   
        aoFavoritar(id);
    }

    

    return(
        <div className="colaborador">
        <AiFillCloseCircle className='deletar' onClick={() => aoDeletar(id)} size={25}/>
        
        
        <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt="Foto de perfil"/>
        </div>
        <div className="rodape">    
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <div className='favoritar'>
                {favorito ? <AiFillHeart onClick={favoritar}/> 
                          : <AiOutlineHeart onClick={favoritar}/> }
            </div>
        </div>
        </div>
        
    )
        
}

export default Colaborador