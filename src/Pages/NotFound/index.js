import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';

const Canvas = styled.iframe`
  align-content: center;
  position: center;
  width: 744px;
  height: 364px;
  max-height: 360;
`;

function NotFound() {
  return (
    <PageDefault>
      <h1>Página não encontrada!</h1>
      <p>Que tal esse jogo da Imersão GameDev pra passar o tempo!?</p>
      <Canvas
        title="Titulo do Iframe"
        src="https://octaviolage.github.io/GameDev/"
      />

    </PageDefault>
  );
}

export default NotFound;
