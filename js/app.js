
// troca de pagina e nav bar customizada

localStorage.setItem("index", false)
localStorage.setItem("index2", true)


    document.querySelector("#index2").classList.add("destacarlink")
    document.querySelector("#conteudo").innerHTML+= templates.sobre
    


    function resetnav() {
        document.querySelector("#index").classList.remove("destacarlink")
        document.querySelector("#index2").classList.remove("destacarlink")
        localStorage.setItem("index", false)
        localStorage.setItem("index2", false)
        
        
    }


document.querySelector("#index").addEventListener("click",()=>{
    resetnav()
    
    localStorage.setItem("index", true)

    if (localStorage.getItem("index") == "true") {
        document.querySelector("#conteudo").innerHTML= ""
        document.querySelector("#index").classList.add("destacarlink")
        document.querySelector("#conteudo").innerHTML+= templates.todolist
        teste()
    }

})

document.querySelector("#index2").addEventListener("click",()=>{
    resetnav()
    localStorage.setItem("index2", true)

    if (localStorage.getItem("index2") == "true") {
        document.querySelector("#conteudo").innerHTML= ""
        document.querySelector("#index2").classList.add("destacarlink")
        document.querySelector("#conteudo").innerHTML+= templates.sobre


    }
})
// botão de redirecionamento para o site principal
document.querySelector("#redirecionar").addEventListener("click",()=>{
    resetnav()
    
    localStorage.setItem("index", true)

    if (localStorage.getItem("index") == "true") {
        document.querySelector("#conteudo").innerHTML= ""
        document.querySelector("#index").classList.add("destacarlink")
        document.querySelector("#conteudo").innerHTML+= templates.todolist
        teste()
    }

})



// to do list abaixo

function teste() {
    


let tarefas;
let tarefaslist=[];
let txttarefa = document.querySelector("#txttarefa");
let countstorage = Number(localStorage.getItem("count")) + 1 ;
let count = 0;

    

// descobrindo de a ha uma lista existente
if (localStorage.getItem("count") == undefined && countstorage == 1) {
    countstorage = Number(localStorage.getItem("count")) ;
}

if (countstorage != 0 ) {
    count = countstorage  ; 
    
}

// jogando todos os valores do local storage para um array
for (let c = 0; c < countstorage; c++) {
    tarefaslist.push(localStorage.getItem(c))
}

    // recriando no html todos as tarefas caso for f5 caso mudar na navbar

    // recriando no html todos as tarefas caso for f5

        tarefaslist.forEach(element  => {
        document.querySelector('.list-group').innerHTML+=`

                    <li class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                        <label class="form-check-label" for="firstCheckbox">${element}</label>
                    </li>`})


// quando clicar em postar executar esta função
document.querySelector("#postar").addEventListener("click", ()=>{
    // validação
    if (txttarefa.value.length > 3) {
        // variavel recebe a tarefa escrita
            tarefas=(String(txttarefa.value))
        // localstorage recebe a tarefa com uma chave numerica
            localStorage.setItem(count, txttarefa.value)
        // adiciona ao html a tarefa
            document.querySelector('.list-group').innerHTML+=`

                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                            <label class="form-check-label" for="firstCheckbox">${txttarefa.value}</label>
                        </li>`


                // aumenta o count e coloca o numero do count na chave count no localstorage 
                localStorage.setItem("count", count)
                count++


}})

document.querySelector("#deletar").addEventListener("click", ()=>{
    localStorage.clear()
    document.querySelector(".list-group").innerHTML = ""
})
}
teste()