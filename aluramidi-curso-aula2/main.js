function tocaSom (seletorAudio) {
    
   const elemento =  document.querySelector(seletorAudio);
   
   if (elemento === null) {
        window.alert('Elemento não encontrado')
   }
   if (elemento && elemento.localName === 'audio') {
        elemento.play()
   }
   else {
        window.alert('Elemento ou seletor inválido')
   }

}

const listaDeTeclas = document.querySelectorAll('.tecla')//o Valor de uma constante não pode ser alterado em outra atribuição

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i]//Atribuimos a lista a uma const para simplificar o codigo
    const instrumento = tecla.classList[1]; //Através da class teclas, selecionamos o nome de cada tecla existente, ela se encontra no indice 1.

    const idAudio = `#som_${instrumento}`//Aqui estamos add o inicio do nome do id + o nome da class. O que vai fazer ele retornar o ID do som de cada instrumento

    //função para quando clicarmos no botão
    tecla.onclick = function() { //Criamos essa function vazia para ela não ser acionada assim que entrarmos na página
        tocaSom(idAudio) //Aqui estamos apenas passando a constante como parâmetro na função tocaSom
    }
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            console.log(evento.code)
            tecla.classList.add('ativa')
        }
        
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}
