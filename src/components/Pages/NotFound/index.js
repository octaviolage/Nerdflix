import React from 'react';
import PageDefault from '../../PageDefault';

function NotFound() {
    return (
        <PageDefault>
            <h1>Pagina não encontrada</h1>
            <p>Que tal esse jogo da Imersão GameDev pra passar o tempo!?</p>
            <p>OBS: Se estiver pelo celular, recomendamos usar a tela deitada =D</p>
            <iframe 
            title="Titulo do Iframe"
            src="https://octaviolage.github.io/GameDev/" 
            width="70%" height="70%"
            />
            
        </PageDefault>
    );
}

export default NotFound;