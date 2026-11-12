const criarTarefa = (evento) => { // cria uma arrow function com um paradigma "evento" para acesso
   
    evento.preventDefault() // previni o refresh da pagina que um formulário tem por padrão

const lista = document.querySelector ('[data-list]')
const input = document.querySelector('[data-form-input]')//seleciona o imput que dei o nome de data form input 
const valor = input.value // pega o que foi colocado no imput do site            

const tarefa = document.createElement('li')         
tarefa.classList.add('task')    

const conteudo = `<p class = " content">${valor}</p>`

 tarefa.innerHTMl = conteudo

lista.appendChild(tarefa)
input.value = " "  

}

const novaTarefa = document.querySelector('[data-form-button]') //seleciona 


novaTarefa.addEventListener('click', criarTarefa) // quando acionar o click ele roda a arroow function

   




