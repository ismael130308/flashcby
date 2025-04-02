document. addEventListener ('DOMContentLoaded', function() {

 const botaoacessibilidade = document.getElementById('botao-acessibilidade')
 const opcoesacessibilidade = document.getElementById('opcoes-acessibilidade')

 botaoacessibilidade.addEventListener('click',function () {

 }
 )

    const aumentaFonteBotao = this. getElementByld('aumenta-fonte');
    const diminuiFonteBotao = this. getElementById('diminuirfonte');
    
    let tamanhoAtualdaFonte = 1;
    
    aumentaFonteBotao.addEventListener('click',function () {
    tamanhoAtualdaFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualdaFonte}rem`
    
    })
    
    diminuiFonteBotao.addEventListener('click',function () {
    tamanhoAtualdaFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualdaFonte}rem`
    
    
    })
    
    })