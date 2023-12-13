import { menuArray } from './data.js'




// Creating and adding the menu to the page 

const getHtmlMenu = menuArray.map(function(food){
    
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
                        data-id="${food.id}">
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


// Rendering the order section
function addToOrder(itemId){
    document.querySelector("your-order-section").classList.remove("hidden")
}

      
    


document.addEventListener('click', function(e){
    // console.log(e.target.dataset.id)
    
    const currentOrders = []
    
    currentOrders.push(getHtmlMenu)
    
    renderOrders()
    
    
}) 


function renderOrders(){
    currentOrders.map(function(currentElement, index){
        return `
            <div>
                <div>
                    <h1 
                    class="your-order">
                    Your Order
                    </h1>
                </div>
                <div>
                    <p>${food.name}</p>
                </div>
                    
                
                <div>
                    <h3 class="total-price">
                    Total Price
                    </h3>    
                </div>
            
            </div>
        `
    })
}

