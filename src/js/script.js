
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

        componentes.classList.add('olComponentes')

        // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        button.innerText = "Adicionar ao carrinho."

        // 
        produto.componentes.forEach((componente) => {
            const liComponente = document.createElement('li');
            
            liComponente.innerText = componente;
            componentes.appendChild(liComponente);
        })

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
        button.addEventListener('click', () => {
            atualizarValor(produto.preco);
            adicionarCarrinho(produto.nome, produto.img, produto.preco, produto.secao);
        }
        );
    });
    
}

montarListaProdutos(produtos);

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
function atualizarValor(preco) {
    let elementoPrecoTotal = document.querySelector('#precoTotal');

    let valorCompra = Number(elementoPrecoTotal.innerText);
    let resultado = valorCompra + Number(preco);

    elementoPrecoTotal.innerText = resultado.toFixed(2);
}

// Adicionando ao carrinho
function adicionarCarrinho(nome, imgUrl, preco, categoria) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const span = document.createElement('span');

    h3.innerText = nome;
    img.src = imgUrl;
    img.alt = nome;
    p.innerText = preco;
    span.innerText = categoria;

    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(span);
    
    const ul = document.querySelector('#ulCarrinho');
    ul.appendChild(li);
    
}

// Pesquisa por nome 
function filtrarPorNome(event) {
    const input = document.querySelector('.campoBuscaPorNome');
    const value = input.value;
    const buscar = produtos.filter((produto) => {
        return (produto.secao.toLowerCase() === value.toLowerCase() ||
            produto.categoria.toLowerCase() === value.toLowerCase() ||
            produto.nome.toLowerCase() === value.toLowerCase())
    })
    
    montarListaProdutos(buscar);
  
}



