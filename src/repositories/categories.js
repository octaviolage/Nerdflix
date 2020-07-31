// function BuscaJson(categoria) {
//   const url = `https://www.googleapis.com/youtube/v3/search?part=snippet%2C+id&q=${categoria}&maxResults=10&type=video&key=AIzaSyDPMv3p6DN9y28MeRQMJnIcSC-eT5aD-ZE`;
//   return url;
// }
import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
