// procurar botao
document.querySelector("#add-time")
// quando clicar no botao
.addEventListener("click", cloneField)
// executar uma ação
function cloneField(){
    // duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    
    // pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll("input")

    // para cada campo, limpar
    fields.forEach(function(field){
        //pega o field do momento e limpa ele
        field.value = ""
    })
    
    // colocar na pagina: onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)

}