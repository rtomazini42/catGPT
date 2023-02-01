const botao =  document.querySelector('#enviar');
const resposta =  document.getElementById('falaGato');



botao.addEventListener("click", enviar);

var respostas = ['Miau!Miau!', 'Prrrrr','Miau!Miau?','Miau...','Miau!!!','Miau!Miau!Miau!','*ignora*','*olha com desprezo','*lambe pata','*encara com desdém'
,'*olha pro outro lado', '*olhar curioso','Miiiiau', 'Miaaaau','Miauuuuu','Miau Miau Miau','Miau, Miau, Miau','*se afasta um pouco'];

function enviar(){
    let numero = Math.floor(Math.random() * respostas.length);

    resposta.innerHTML = respostas[numero];
    document.getElementById('entrada').value=''; 
}