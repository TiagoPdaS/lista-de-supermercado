var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = "";
    items.map(function(val){
        soma+=parseFloat(val.valor);

        listaProdutos.innerHTML+=`
        <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
            <button class="remove-item" data-nome="`+val.nome+`">Remover</button>
        </div>
        `;
    })
    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'R$'+soma;

    
});

document.querySelector('.lista-produtos')
.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item')) {
        const nomeProdutoRemover = event.target.getAttribute('data-nome');
        items = items.filter(item => item.nome !== nomeProdutoRemover);
        
        let soma = 0;
        let listaProdutos = document.querySelector('.lista-produtos');
        listaProdutos.innerHTML = "";
        items.map(function(val){
            soma+=parseFloat(val.valor);

            listaProdutos.innerHTML+=`
            <div class="lista-produto-single">
                <h3>`+val.nome+`</h3>
                <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
                <button class="remove-item" data-nome="`+val.nome+`">Remover</button>
            </div>
            `;
        })
        soma = soma.toFixed(2);

        let elementoSoma = document.querySelector('.soma-produto h1');
        elementoSoma.innerHTML = 'R$'+soma;
    }
});

document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{
    items = [];
    
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML= "R$0";
});
