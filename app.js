axios
  .get("https://lab-weather-api-0dfe67e28145.herokuapp.com/weather")
  .then(function (response) {
    for (let i = 0; i < response.data.length; i++) {
      let body = document.querySelector("body"); // pega o element `body` e salva numa variavel pra referenciar no JS, note as aspas
      let h5 = document.createElement("h5"); // cria um h5, note as aspas
      h5.classList.add("dados");
      body.appendChild(h5); // define h5 como filho de body, perceba que h5 nao tem aspas, pq estamos falando da variavel h5, nao de uma string 'h5'
      let text = document.createTextNode(
        `${response.data[i].today.min}º ${response.data[i].today.max}º ${response.data[i].name}`
      );
      h5.appendChild(text); // coloca o text como filho de h5
    }
    now = response.data[0].now;
    console.log(now);

    let tempo = document.querySelector("#tempo");
    tempo.innerHTML = `${response.data[0].now.temp}º ${response.data[0].now.desc}`;
    let sensacao = document.querySelector("#sensacao");
    sensacao.innerHTML = `Sensação ${response.data[0].now.sensation}º`;
    let umidade = document.querySelector("#umidade");
    umidade.innerHTML = `Umidade ${response.data[0].now.humidity}%`;
    let vento = document.querySelector("#vento");
    vento.innerHTML = `Vento ${response.data[0].now.wind}km/h`;
    let minmax = document.querySelector(".detalhes");
    minmax.innerHTML = `Min ${response.data[0].today.min}º Max ${response.data[0].today.max}º`;
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});
