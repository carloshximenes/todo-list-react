import { useState } from 'react';
import './App.css'
import Formulario from './components/formulario/Formulario';
import ListaAtividades from './components/listaAtividades/ListaAtividades';
import { FormularioType } from './types/formulario-type';

//TODO
// Adicionar prazo para realização da atividade;
// Adicionar validação para não permitir atividades de mesmo nome;
// Permitir concluir atividade (diferenciar card por cor);
// Permitir excluir atividade;


function App() {

  const [novaAtividade, setNovaAtividade] = useState("");
  const [listaAtividades, setListaAtividades] = useState<string[]>([]);

  const novaAtividadeHandler = () => {
    if(novaAtividade.trim().length === 0) return;

    //VERIFICAR SE A DATA É NO FUTURO

    //VERIFICAR SE O NOME DA ATIVIDADE JA EXISTE

    //CRIAR OBJETO PARA ADICIONAR A LISTA

    setListaAtividades(prev => [...prev, novaAtividade]);

    alert(`Atividade: ${novaAtividade} salva com sucesso!`);
    setNovaAtividade("");
  }

  // const deletarAtividadeHandler = (idAtividade: string) => {
  //   //VERIFICAR SE ID EXISTE
  //   //SELECIONAR ID
  //   //REMOVER ID
  // }

  return (
      <div className='App'>
        <Formulario nomeAtividade={novaAtividade} atualizarNomeAtividade={setNovaAtividade} acaoSalvar={novaAtividadeHandler} />
        <ListaAtividades listaAtividades={listaAtividades} />
      </div>
  )
}

export default App
