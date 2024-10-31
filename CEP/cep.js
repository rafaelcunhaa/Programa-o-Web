function consultarCEP() {
    var cep = document.getElementById("cep").value.replace(/\D/g, '');
    if (cep.length !== 8) {
       alert("CEP inválido!");
       return;
    }
  
   var url = "https://viacep.com.br/ws/" + cep + "/json/";
  
   fetch(url)
      .then(response => response.json())
      .then(data => {

         const cep = data.cep;
         const uf = data.uf;
         const localidade = data.localidade;
         const bairro = data.bairro;
         const logradouro = data.logradouro;

         document.getElementById("resultado").innerHTML = 
         'CEP: ' + cep + '<br/>' +
         'UF: ' + uf + '<br/>' + 
         'Cidade: ' + localidade + '<br/>' + 
         'Bairro: ' + bairro + '<br/>' +
         'Logradouro: ' + logradouro;
       })
       .catch(error => alert(error));
  }