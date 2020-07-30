import React from 'react';
import dadosIniciais from '../../../data/dados_iniciais.json'
import BannerMain from '../../BannerMain'
import Carousel from '../../Carousel'
import PageDefault from '../../PageDefault';

function Home() {
  return (
    <PageDefault>

      <BannerMain
        videoTitle={dadosIniciais.categorias[1].videos[5].titulo}
        url={dadosIniciais.categorias[1].videos[5].url}
        videoDescription={dadosIniciais.categorias[1].videos[5].videoDescription}
      />

      <Carousel
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />
    </PageDefault>
  );
}
export default Home;
