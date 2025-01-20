function createLabel(text, htmlFor){
    const label = document.createElement("label")
    label.htmlFor = htmlFor
    label.innerText = text
    return label 
}

function createInput(id, value, name, type="text", placeholder=""){
    const input = document.createElement("input")
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input 
}

const addTechBtn = document.getElementById("addTechBtn")
const form = document.getElementById("devForm")

const developers =[]
let inputRows = 0

addTechBtn.addEventListener("click", function(event){
    const stackInputs = document.getElementById("stackInputs")
    const newRow = document.createElement("li")
    
    const rowIndex = inputRows
    inputRows++
    newRow.id = `inputRow-${rowIndex}`
    newRow.className = "inputRow"

    const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex)
    const techNameInput = createInput("techName-" + rowIndex, null, "techName")
        
    const expLabel = createLabel("Experiência: ")
    const expRadio1 = createInput("expRadio-" + rowIndex + ".1",  "0-2 Anos", "techExp-" + rowIndex, "radio")
    const expLabel1 = createLabel("0-2 Anos", "expRadio-" + rowIndex + ".1")

    const expRadio2 = createInput("expRadio-" + rowIndex + ".2",  "3-5 Anos", "techExp-" + rowIndex, "radio")
    const expLabel2 = createLabel("3-5 Anos", "expRadio-" + rowIndex + ".2")

    const expRadio3 = createInput("expRadio-" + rowIndex + ".3",  "5+ Anos", "techExp-" + rowIndex, "radio")
    const expLabel3 = createLabel("5+ Anos", "expRadio-" + rowIndex + ".3")

    const removeRowBtn = document.createElement("button")
    removeRowBtn.type = "button"
    removeRowBtn.innerText = "Remover"
    removeRowBtn.addEventListener("click", function(){
        stackInputs.removeChild(newRow)
    })

    newRow.append(
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn

    )

    stackInputs.appendChild(newRow)
})

form.addEventListener("submit", function(evento){
    evento.preventDefault()

    const fullnameInput = document.getElementById("fullname")
    const inputRows = document.querySelectorAll(".inputRow")

    let technologies = []
    inputRows.forEach(function(row){
        const techName = document.querySelector("#" + row.id + " input[name='techName']").value
        const techExp = document.querySelector("#" + row.id + " input[type='radio']:checked").value

        technologies.push({name: techName, exp: techExp})

    })


    
    const newDev = {fullname: fullnameInput.value, technologies: technologies}
    developers.push(newDev)
    alert(`Desenvolvedor cadastrado com sucesso!`)

    fullnameInput.value = ""
    inputRows.forEach(function(row){
        row.remove()

    })
    console.log(developers)
})