const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        const proximoPasso = document.getElementById(proximoPassoId);

        // Garantir que o passo atual perca a classe 'ativo'
        atual.classList.remove('ativo');

        // Mostrar o prÃ³ximo passo
        if (proximoPasso) {
            proximoPasso.classList.add('ativo');
        }
    });
});