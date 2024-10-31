
function salvarEndereco() {
    sessionStorage.setItem('end_rua', document.getElementById('end_rua').value);
    sessionStorage.setItem('end_cidade', document.getElementById('end_cidade').value);
    sessionStorage.setItem('end_estado', document.getElementById('end_estado').value);
    sessionStorage.setItem('end_cep', document.getElementById('end_cep').value);
}

function carregarEndereco() {
    let rua = sessionStorage.getItem('end_rua');
    let cidade = sessionStorage.getItem('end_cidade');
    let estado = sessionStorage.getItem('end_estado');
    let cep = sessionStorage.getItem('end_cep');


    document.getElementById('rua').textContent = rua;
    document.getElementById('cidade').textContent = cidade;
    document.getElementById('estado').textContent = estado;
    document.getElementById('cep').textContent = cep;

    
}

function salvarProdutos(){

    let idNomeProduto1 = document.getElementById('prod_havaianas').id;

    let valorProduto1 = document.getElementById('prod_havaianas').textContent;

    let qtdProduto1 = document.getElementById('prod_havaianas_qtd').textContent;

    let precoProduto1 = document.getElementById('prod_havaianas_preco').textContent;

    sessionStorage.setItem(idNomeProduto1,valorProduto1);
    sessionStorage.setItem('prod_havaianas_qtd',qtdProduto1);
    sessionStorage.setItem('prod_havaianas_preco',precoProduto1);

    let = valorProduto2 = document.getElementById('prod_alpargatas').textContent;

    let = qtdProduto2 = document.getElementById('prod_alpargatas_qtd').textContent;

    let = precoProduto2 = document.getElementById('prod_alpargatas_preco').textContent;

    sessionStorage.setItem('prod_alpargatas',valorProduto2);
    sessionStorage.setItem('prod_alpargatas_qtd',qtdProduto2);
    sessionStorage.setItem('prod_alpargatas_preco',precoProduto2);
}

function carregarProdutos(){

    document.getElementById('havaianas').textContent = sessionStorage.getItem('prod_havaianas');

    document.getElementById('havaianas_qtd').textContent = sessionStorage.getItem('prod_havaianas_qtd');

    document.getElementById('havaianas_preco').textContent = sessionStorage.getItem('prod_havaianas_preco');

    
    document.getElementById('alpargatas').textContent = sessionStorage.getItem('prod_alpargatas');

    document.getElementById('alpargatas_qtd').textContent = sessionStorage.getItem('prod_alpargatas_qtd');

    document.getElementById('alpargatas_preco').textContent = sessionStorage.getItem('prod_alpargatas_preco');
}