// função que adiciona tarefa
function addTask(){

    // titulo da tarefa

    // adicionou o input text em uma constante, recebendo o seu value, ou seja o texto digitado
    const taskTitle = document.querySelector("#tasks__title").value

    // criou uma condicional que só irá realizar se caso for verdadeira, ou seja, se algo for digitado, sendo assim prevendo erros caso não houver texto
    if(taskTitle) {

        // clona template

        // adicionou o li em uma constante
        const template = document.querySelector(".template")

        // criou uma constante para clonar o li
        const newTask = template.cloneNode(true)

        // adiciona titulo 

        // recebe o value do input text e escreve exatamente como foi enviado
        newTask.querySelector(".tasks__title").textContent = taskTitle

        // remover as classes desnecessárias

        // essas classes foram removidas, pois elas estavam escondidas para serem chamadas depois por JS
        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        // adiciona tarefa na lista

        // amarzenou os dados da lista em uma constante
        const list = document.querySelector("#tasks__list")
        // adicionou um filho, sendo clone do value 
        list.appendChild(newTask)

        // adicionar o evento de remover 
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this)
        })

        // adicionar evento de completar tarefa
        const doneBtn =  newTask.querySelector(".done-btn").addEventListener("click", function(){
            completeTask(this)
        })

        // limpar texto 
        // adicionou o input text value com um valor nulo, para que limpe a caixa de texto assim que o usuario enviar algo
        document.querySelector("#tasks__title").value = ""

    }

}

// função de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true)
}

// função de completar tarefa
function completeTask(task){
    const taskToComplete = task.parentNode
    taskToComplete.classList.toggle("done")
}

// evento de adicionar tarefa

// armazenou o botao em uma constante
const addBtn = document.querySelector("#add__btn")

// adicionou o evento de esculta do JS, passando dois paramentros 
addBtn.addEventListener("click", function(event) {

    // o método preventDefault irá prever o comportamento padrão da aplicação em si, que nesse caso é um botão do tipo submit que tem como caracteristica enviar os dados a um servidor
    event.preventDefault()

    // chamou a função
    addTask()

})

