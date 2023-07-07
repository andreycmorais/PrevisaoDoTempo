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
      h5.addEventListener("click", function () {
        atualizaDetalhesCidade(i);
      });
    }
    now = response.data[0].now;
    console.log(now);

    function atualizaDetalhesCidade(index) {
      console.log(index);

      let cidade = document.querySelector("#cidade");
      cidade.innerHTML = `${response.data[index].name} - Brasil`;

      let tempo = document.querySelector("#tempo");
      tempo.innerHTML = `${response.data[index].now.temp}º ${response.data[index].now.desc}`;

      let sensacao = document.querySelector("#sensacao");
      sensacao.innerHTML = `${response.data[index].now.sensation}º`;

      let umidade = document.querySelector("#umidade");
      umidade.innerHTML = `${response.data[index].now.humidity}%`;

      let vento = document.querySelector("#vento");
      vento.innerHTML = `${response.data[index].now.wind}km/h`;

      let minmax = document.querySelector(".detalhes");
      minmax.innerHTML = `Min ${response.data[index].today.min}º Max ${response.data[index].today.max}º`;

      let segunda = document.querySelector("#segunda");
      segunda.innerHTML = `Segunda ${response.data[index].week[0].min}º ${response.data[index].week[0].max}º`;

      let terca = document.querySelector("#terca");
      terca.innerHTML = `Terça ${response.data[index].week[1].min}º ${response.data[index].week[1].max}º`;

      let quarta = document.querySelector("#quarta");
      quarta.innerHTML = `Quarta ${response.data[index].week[2].min}º ${response.data[index].week[2].max}º`;

      let quinta = document.querySelector("#quinta");
      quinta.innerHTML = `Quinta ${response.data[index].week[3].min}º ${response.data[index].week[3].max}º`;

      let sexta = document.querySelector("#sexta");
      sexta.innerHTML = `Sexta ${response.data[index].week[4].min}º ${response.data[index].week[4].max}º`;
    }
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});
