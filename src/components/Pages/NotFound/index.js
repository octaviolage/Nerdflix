import React from 'react';
import PageDefault from '../../PageDefault';
import styled from 'styled-components';

const Canvas = styled.iframe`
  position: center;
  width: 100%;
  height: 70%;
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
