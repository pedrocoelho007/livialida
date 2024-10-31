function criacartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article')
    cartao.className = 'cartao';
    cartao.innerHTML = `
        <div class="conteudo-cartao" >
       <h3>${categoria}</h3>
    <div class="pergunta-cartao">
        <p>${pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
</div >
        `
            let respostaEstaVisivevl = false;
            function viraCartao(){
                respostaEstaVisivevl = !respostaEstaVisivevl;
                cartao.classList.toggle('active', respostaEstaVisivevl);
            }

            cartao.addEventListener('click', viraCartao)
    container.appendChild(cartao);
}