import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';

const Canvas = styled.iframe`
  align-content: center;
  position: center;
  width: 743px;
  height: 363px;
  max-height: 360;
  -webkit-border-radius: 19px;
  -moz-border-radius: 19px;
  border-radius: 19px;
  line-height: 0px;
  background-color: #141414;
  -webkit-box-shadow: 1px 1px 20px 0px #000000;
  box-shadow: 1px 1px 20px 0px #000000;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const Conteudo = styled.div`
  align-content: center;
  margin-left: 5vh;
`;

function NotFound() {
  return (
    <PageDefault>
      <Conteudo>
        <h1>Página não encontrada!</h1>
        <p>Que tal esse jogo da Imersão GameDev pra passar o tempo!?</p>
      </Conteudo>
      <Canvas
        title="Wild West Escape"
        src="https://octaviolage.github.io/GameDev/"
      />

    </PageDefault>
  );
}

export default NotFound;
