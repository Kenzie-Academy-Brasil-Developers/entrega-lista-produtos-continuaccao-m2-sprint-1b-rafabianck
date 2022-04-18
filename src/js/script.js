
// Selecionando elemento ul do HTML
const ul = document.querySelector('.containerListaProdutos ul');

// Montando lista de Produtos
function montarListaProdutos(listaProdutos) {
    ul.innerHTML = "";

    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const button = document.createElement('button')
        const componentes = document.createElement('ol')

        // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        componentes.innerText = produto.componentes;
        button.innerText = "Adicionar ao carrinho."

        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(componentes);
        li.appendChild(span);
        li.appendChild(button);

        // Adicionando li ao HTML
        ul.appendChild(li);

        // Atualizando valor
        button.addEventListener('click', atualizarValor);
    });
    
}

// Selecionando botão no HTML
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');

const botaoMostrarTudo = document.querySelector('.estiloGeralBotoes--mostrarTodos');

const botaoBuscaPorNome = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');

const campoBuscaPorNome = document.querySelector('.campoBuscaPorNome');

// Filtrando produtos
function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });

    montarListaProdutos(listaHortifruti);
}

botaoMostrarTudo.addEventListener("click", () => {
    return montarListaProdutos(produtos);
});

// Adicionando event listener de clique, e executando a função de filtro
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);

botaoBuscaPorNome.addEventListener('click', filtrarPorNome);

campoBuscaPorNome.addEventListener('change', filtrarPorNome);

// Calculando preço total
function atualizarValor(event) {
    let elementoPrecoTotal = document.querySelector('#precoTotal');

    let valorCompra = Number(elementoPrecoTotal.innerText);
    let resultado = valorCompra + Number(event.target.parentNode.childNodes[2].innerText); // childNodes[2] = tag que contém o preço.

    elementoPrecoTotal.innerText = resultado;
}

// Adicionando ao carrinho
const adicionarCarrinho = (produto) => {
    const listCarrinho = document.querySelectorAll('.containerCarrinho ul');

    const arr = [];

    listCarr.forEach(p => arr.push(Number(p.textContent)));
    const soma = arr.reduce((acc, cv) => acc += cv, 0);

    document.querySelector('#precoTotal').innerHTML = soma.toFixed(2)
}

// Pesquisa por nome 
function filtrarPorNome(event) {
    const value = event.target.value;

    const buscar = produtos.filter((produto) => {
        return (produto.secao.toLowerCase() === value.toLowerCase() ||
            produto.categoria.toLowerCase() === value.toLowerCase() ||
            produto.nome.toLowerCase() === value.toLowerCase())
    })
    
    montarListaProdutos(buscar);
}



