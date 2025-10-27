let templates = {
    todolist:`
    <div >
        <div class="card text-center mb-3 cartao mx-auto p-2   container-md">
            <div class="card-body ">
                <h1 class="card-title">Tarefas</h1>

                <label class="form-label">Digite sua rotina</label>

                <input class="form-control" type="text" placeholder="Digite aqui" aria-label="default input example" id="txttarefa">

                <button type="button" class="btn btn-primary btn-lg " 
                id="postar" style="margin-block: 12px;">Postar</button>

                <button type="button" class="btn btn-primary btn-lg btn-danger" 
                id="deletar" style="margin-block: 12px;">Deletar</button>

                <ul class="list-group mx-auto p-2 text-break"">
                    
                </ul>
            </div>
        </div>
    </div>
`,
    sobre:`
        <div class="card my-5 mx-5 ">
            <div class="card-body ">
                <h2 class="card-title ">Gerenciador de Tarefas</h2>
                    <p class="card-text mt-3">Este é um site para um projeto de gerenciador de tarefas <br> No site foi bastante utilizado Local Storage e é desenvolvido com o método de <i> Single Page Application</i> (SPA)</p>
                    <p class="card-text mt-3">As tecnologias utilizadas foram:</p>
                    
                    <li class="card-list mt-3 mx-3">Bootstrap</li>
                    <li class="card-list mt-3 mx-3">JavaScript</li>
                    <li class="card-list mt-3 mx-3">HTML</li>
                    <li class="card-list mt-3 mx-3">CSS</li>
                    <div>
                        <label class="form-label mt-5">Clique aqui para redirecionar</label>
                    </div>
                <a class="btn btn-primary px-5 mb-5 
                py-3" id="redirecionar">Redirecionar</a>
            </div>
        </div>`

}