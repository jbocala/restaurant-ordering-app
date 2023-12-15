import { menuArray } from './data.js'

const yourOrder = document.querySelector(".your-order-section")
const orderList = document.querySelector(".order-list")
const completeOrderBtn = document.querySelector(".complete-order-button")
const modal = document.querySelector(".modal")
const consentForm = document.querySelector("#consent-form")
const payBtn = document.querySelector(".pay-button")
const thankYouNote = document.querySelector(".thank-you-note")
let orderedItemList = []




// Creating and adding the menu to the page 

const getHtmlMenu = menuArray.map(function(food){
    // Diner's menu here
    return `
        <div class="menu">
                <p class="emoji">${food.emoji}</p>
                    <div class="food-details">
                        <p class="name">${food.name}</p>
                        <p class="ingredients">${food.ingredients}</p>
                        <p class="price">${food.price}</p> 
                    </div>
                    <div>
                        <button 
                        class="add-button" 
                        data-add="${food.id}">
                        +
                        </button>
                    </div>
                </div>
            </div>
             
        </div>
    `
}).join('')
   

render(menuArray) 

function render(){
    document.getElementById('menu-section').innerHTML = getHtmlMenu

  }   


// Adding to the order list 
function addToOrder(itemId){
    document.querySelector(".your-order-section").classList.remove("hidden")
    const orderedItemObject = menuArray.filter(function(orderedItem){
        return orderedItem.id === Number(itemId)

    })[0]
    orderedItemList.push(orderedItemObject)

    createOrder()
}


function createOrder(){
    let orderHtml = ""
    let total = 0
    orderedItemList.forEach(function(order, index){
        orderHtml += `
        <li class="order-item">
            <p class="item-name">${order.name}</p>
            <button class="remove-btn" data-remove="${index}">remove</button>
            <p class="item-price">$${order.price}</p>
        </li>
        `
        total += order.price
    })
    document.querySelector('#total-price').innerHTML = total
    orderList.innerHTML = orderHtml
}


function removeItem(index){
    if (index >= 0 && index < orderedItemList.length) {
        orderedItemList.splice(index, 1)

        createOrder()
    }
}

// Complete order function - connected to an event listener below
    // This function will render the consent form to promt customer details 
    const renderConsentForm = function(){
        modal.classList.remove("hidden")
    }



// Pay button function 

function paySubmitted(){
    let fullName = document.querySelector("#fullName")
    let cardNumber = document.querySelector("#cardNumber")
    let cvv = document.querySelector("#cvv")

    if (fullName.value == '' || cardNumber.value == '' || cvv.value == ''){
        alert("Enter your details to complete order")
    } else {
        modal.classList.add("hidden")
        yourOrder.classList.add("hidden")   
        thankYouNote.classList.remove("hidden")

        document.querySelector(".the-note").innerText = `
        Thank you ${fullName.value}! Your order is on the way!
        `
    }
}




// Event Listeners 

document.addEventListener('click', function(e){
    
    if(e.target.dataset.add){
        addToOrder(e.target.dataset.add)
    } else if (e.target.dataset.remove)

    removeItem(e.target.dataset.remove) 

})

    // Complete order button that will render the consent form 
completeOrderBtn.addEventListener('click', renderConsentForm)

    // Pay or submit button 
consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    paySubmitted()  
})