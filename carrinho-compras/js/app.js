let TotalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = `R$ 0`;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim();
    let valorUnitario = produto.split('R$')[1].trim();
    let quantidade = document.getElementById('quantidade').value;

    // Certifique-se de que valorUnitario é um número
    valorUnitario = parseFloat(valorUnitario.replace(',', '.'));

    // Calcular o preço total
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario.toFixed(2)}</span>
    </section>`;
    TotalGeral += preco;
    let CampoTotal = document.getElementById('valor-total');
    CampoTotal.textContent = `R$ ${TotalGeral.toFixed(2)}`;

    // Limpar os campos de entrada
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
}

function limpar() {
    TotalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$ 0`;
}