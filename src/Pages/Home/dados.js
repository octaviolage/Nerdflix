function BuscaJson(categoria) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet%2C+id&q=${categoria}&maxResults=10&type=video&key=AIzaSyDPMv3p6DN9y28MeRQMJnIcSC-eT5aD-ZE`;
  return url;
}

export default BuscaJson;
