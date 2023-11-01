import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulário/Formulario';
import Time from './componentes/Time/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

const [colaboradores, setColaboradores] = useState([]);

const aoNovoColaboradorAdicionado = (colaborador) => {
  console.log(colaborador);
  setColaboradores([...colaboradores, colaborador]);
}

const [times, setTimes] = useState([
  {id: uuidv4(), nome: 'Programação', cor: '#D9F7E9'},
  {id: uuidv4(), nome: 'Front-End', cor: '#E8F8FF'},
  {id: uuidv4(), nome: 'Data Science', cor: '#F0F8E2'},
  {id: uuidv4(), nome: 'Devops', cor: '#FDE7E8'},
  {id: uuidv4(), nome: 'UX e Design', cor: '#FAE9F5'},
  {id: uuidv4(), nome: 'Mobile', cor: '#FFF5D9'},
  {id: uuidv4(), nome: 'Inovação e Gestão', cor: '#FFEEDF'},

])



const mudarCorDoTime = (cor, id) => {
  setTimes(times.map(time => {
    if(time.id === id) {
      time.cor = cor;
  }
  return time;
 }));
}




const deletarColaborador = (id) => {
  setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
}

const cadastrarTime = (novoTime) => {
  setTimes([...times, {...novoTime, id: uuidv4()}])
}

const resolverFavorito = (id) => {
  setColaboradores(colaboradores.map(colaborador => {
    if(colaborador.id === id) 
      colaborador.favorito = !colaborador.favorito;
      return colaborador;
  }))
}
    
  return (
    <div className="App">
      <Banner/>
      <Formulario 
      cadastrarTime={cadastrarTime}    
      times={times.map( time => time.nome)} 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    
    {times.map(time => <Time 
    aoFavoritar={resolverFavorito}
    mudarCor={mudarCorDoTime}
    key={time.id} 
    nome={time.nome} 
    cor={time.cor}
    id={time.id}
    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
    aoDeletar={deletarColaborador}/>)}
    </div>
  );
}

export default App;
