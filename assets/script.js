function validarCnpj(cnpj) {
  $.ajax({
    url: "https://www.receitaws.com.br/v1/cnpj/" + cnpj.replace(/[^0-9]/g, ""),
    type: "GET",
    dataType: "jsonp",
    success: function (dado) {
      // console.log(dado)

      if (dado.nome == undefined) {
        alert(dado.status + "" + dado.message);
      } else {
        console.log()
        document.getElementById("razao-social").value = dado.nome;
        document.getElementById("fantasia").value = dado.fantasia;
        document.getElementById("abertura").value = dado.abertura;
        document.getElementById("status").value = dado.situacao;
        document.getElementById("endereco").value = dado.logradouro;
        document.getElementById("municipio").value = dado.municipio;
        document.getElementById("estado").value = dado.uf;
        document.getElementById("telefone").value = dado.telefone;
      }
    },
  });
}

const cleanDados = () => {
  document.getElementById("cnpj").value = "";
  document.getElementById("razao-social").value = "";
  document.getElementById("fantasia").value = "";
  document.getElementById("abertura").value = "";
  document.getElementById("status").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("municipio").value = "";
  document.getElementById("estado").value = "";
  document.getElementById("telefone").value = "";
};

