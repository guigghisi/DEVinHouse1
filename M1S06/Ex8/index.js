document.querySelector("#btnBuscar").addEventListener("click", procuraCEP);

async function procuraCEP() {
  let cep = document.querySelector("#textCEP").value;
  if (cep == "") {
    alert("Preencha o CEP");
  } else if (cep.length != 8) {
    alert("CEP inválido");
  } else {
    const options = { method: "GET" };
    await fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
      .then((response) => {
        return response.json();
      })
      .then((infos) => {
        document.querySelector("#informacao").innerHTML = `
            <p>Logradouro: ${infos.logradouro}</p>
            <p>Bairro: ${infos.bairro}</p>
            <p>Cidade: ${infos.localidade}</p>
            <p>Estado: ${infos.uf}</p>
        `;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
