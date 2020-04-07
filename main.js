let name = document.getElementById('name');
let price = document.getElementById('price');
let list = document.getElementById('list'); 
let checkBox = document.getElementById('checkBox');
let listContainer = document.getElementById('listContainer');
let cart = [];
// Object constructor
function Item(itemName,Price){
    this.Name = itemName;
    this.cost = Price;
}
//Adding items to the cart
function addToCart(){
    if(!name.value||!price.value){
        window.alert('Oops! Both Name and Price are required!');
    }
    else{
        let item = new Item(name.value,price.value);
    cart.push(item);
    list.innerHTML = `<tr>
    <th style="width:20%">Sr. No.</th>
    <th>Item Name</th>
    <th>Price</th>
    </tr>`
    let total = 0;
    for(let i = 0;i<cart.length;i++){
        list.innerHTML += `<tr><td>${i+1}</td><td>${cart[i].Name}</td><td>₹${cart[i].cost}</td></tr>`;
        total += parseInt(cart[i].cost)
    }
    list.innerHTML += `<td colspan="3">Your wallet lightens by ₹${total}</td>`;
    name.value = '';
    price.value = '';
    }
}
//Showing items in the cart
function showCart(){
    if(checkBox.checked == true){
        listContainer.style.display = 'block'
    }    
    else{
        listContainer.style.display = 'none';
    }
}
//Clearing the cart
function clearCart(){
    
    cart = [];
    list.innerHTML = 'Your cart is empty!'
}