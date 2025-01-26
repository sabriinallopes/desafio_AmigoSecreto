//DECLARAÇÃO DAS VARIÁVEIS
let amigos = []; //vetor para armazenar os nomes

//Função para adicionar os nomes no vetor
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo'); //pegar o nome 

//Se nome ficar em branco, alertar o usuário
    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    amigos.push(nome); //Adicionar o nome no vetor
    amigoInput.value = ''; // Limpar 

    atualizarLista();
}
//Função para exibir os nomes na tela 
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpar a lista antes de adicionar os novos nomes

    //percorrer a lista
    amigos.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}
//Função para sortear os nomes
function sortearAmigo() { //Não deixar a lista vazia
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear!');
        return;
    }

    //Sortear um nome conforme o indice do vetor
    const indexAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indexAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa qualquer resultado anterior

    const itemResultado = document.createElement('li');
    itemResultado.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultado.appendChild(itemResultado);
}
