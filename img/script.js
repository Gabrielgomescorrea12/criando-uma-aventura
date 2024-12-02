const avanca = document.querySelectorAll('.btn-proximo');
avanca.forEach(button => {
    button.addEventListener('click, function'(){
        const atual = ducument.queryselector('.ativo');
        const proximoPasso = 'paso-' + this.getAttribute('data-proximo');
        atual.classList.remove('ativo');
        ducument.getElementByid(proximoPasso).classList.add('ativo');
    })
})