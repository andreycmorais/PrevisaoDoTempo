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
    console.log(response);
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});
