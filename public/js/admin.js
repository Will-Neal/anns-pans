//Button to add another ingredient and step
const addButton = document.querySelector("#add-button")
const stepButton = document.querySelector("#step-button")
//grab ingredient input field div and step input field div
const ingredientInput = document.querySelector("#ingredient-inputs")
const stepInput = document.querySelector("#step-inputs")

let ingredientNum = 1
const addIngredient = () => {
    ingredientNum += 1
    //Create ingredient label and input
    const pairDiv = document.createElement('div')
    const label = document.createElement('label') 
    const input = document.createElement('input')
    pairDiv.setAttribute("class", "ingredient-quantity-pair")
    label.textContent = `Ingredent ${ingredientNum}`
    input.setAttribute("type", "text")
    input.setAttribute("name", "ingredients")
    input.setAttribute("placeholder", `Ingredient ${ingredientNum}`)
    //Create quantity label and input
    const quantityLabel = document.createElement('label')
    const quantityInput = document.createElement('input')
    quantityLabel.textContent = `Quantity`
    quantityInput.setAttribute("type", "text")
    quantityInput.setAttribute("name", "quantity")
    quantityInput.setAttribute("placeholder", `Quantity`)
    //Append Ingredient and Quantity to ingredient-input div
    ingredientInput.appendChild(pairDiv)
    pairDiv.appendChild(label)
    pairDiv.appendChild(input)
    pairDiv.appendChild(quantityLabel)
    pairDiv.appendChild(quantityInput)
}

let stepNum = 1
const addStep = () => {
    stepNum += 1;
    const label = document.createElement('label')
    const textArea = document.createElement('textarea')
    label.textContent = `Step ${stepNum}`
    textArea.setAttribute("rows", "2")
    textArea.setAttribute("type", "text")
    textArea.setAttribute("name", "steps")
    textArea.setAttribute("placeholder", `Step ${stepNum}`)
    stepInput.appendChild(label);
    stepInput.appendChild(textArea);
}


addButton.addEventListener('click', addIngredient)
stepButton.addEventListener('click', addStep)