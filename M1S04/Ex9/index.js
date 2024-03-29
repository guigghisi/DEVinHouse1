let arrayMusicas = [
  {
    nome: "Believer",
    banda: "Imagine Dragons",
    anoDeLancamento: 2017,
    isGood: false,
  },
  {
    nome: "Losing my Religion",
    banda: "R.E.M",
    anoDeLancamento: 1991,
    isGood: false,
  },
  {
    nome: "Duality",
    banda: "Slipknot",
    anoDeLancamento: 2004,
    isGood: false,
  },
  {
    nome: "Imagination",
    banda: "Foster the People",
    anoDeLancamento: 2019,
    isGood: false,
  },
  {
    nome: "Without me",
    banda: "Halsey",
    anoDeLancamento: 2018,
    isGood: false,
  },
  {
    nome: "DiE4u",
    banda: "Bring me the horizon",
    anoDeLancamento: 2021,
    isGood: false,
  },
  {
    nome: "Hail to the king",
    banda: "Avenged Sevenfold",
    anoDeLancamento: 2013,
    isGood: false,
  },
  {
    nome: "Rock you like a hurricane",
    banda: "Scorpions",
    anoDeLancamento: 1984,
    isGood: false,
  },
  {
    nome: "Misery business",
    banda: "Paramore",
    anoDeLancamento: 2007,
    isGood: false,
  },
  {
    nome: "Brianstorm",
    banda: "Arctic Monkeys",
    anoDeLancamento: 2007,
    isGood: false,
  },
];
arrayMusicas.map((musica) => {
  if (musica.isGood === false) {
    musica.isGood = true;
  }
});
var lista = document.getElementById("lista");
arrayMusicas.forEach((musica) => {
  var item = document.createElement("li");
  item.innerHTML = `${musica.nome}`;
  item.setAttribute("onclick", `imprimir("${musica.nome}")`);
  lista.appendChild(item);
});
function imprimir(nome) {
  arrayMusicas.forEach((musica) => {
    if (musica.nome === nome) {
      window.alert(
        `${musica.nome} - ${musica.banda} - ${musica.anoDeLancamento}`
      );
    }
  });
}