//Button to add another ingredient
const addButton = document.querySelector("#add-button")
//grab ingredient input field div 
const ingredientInput = document.querySelector("#ingredient-inputs")

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
    input.setAttribute("name", "ingredient")
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


addButton.addEventListener('click', addIngredient)
