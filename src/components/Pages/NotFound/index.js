import React from 'react';
import PageDefault from '../../PageDefault';

function NotFound() {
  return (
    <PageDefault>
      <h1>Não encontramos a página que você procura</h1>
      <p>Que tal esse jogo da Imersão GameDev pra passar o tempo!?</p>
      <iframe
        title="Titulo do Iframe"
        src="https://octaviolage.github.io/GameDev/"
        width="70%"
        height="70%"
      />

    </PageDefault>
  );
}

export default NotFound;
