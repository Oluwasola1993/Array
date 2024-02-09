// var allStudents = ['Christiana', 'Temitope',  'Tunde', 'Femi', 'Jayden']
// console.log(allStudents);

// var ages = [45, 32, 87, 90, 55]
// console.log(ages);

// var student = ['Opadeji Mary', 54, 'Dark', 'Single', 100000, false]
// console.log(student);

// var girlfriends = ['Pelumi', 'Joy', 'Seun', 'Bolu', 'Gloria', 'Selina', 'Deola']
// console.log(girlfriends.length);

// var girlfriends = ['Pelumi', 'Joy', 'Seun', 'Bolu', 'Gloria', 'Selina', 'Deola']

// girlfriends.pop()
// girlfriends.shift()
// girlfriends.push('Comfort')
// girlfriends.unshift('Precious')
// console.log(girlfriends);
// var cart = []

// function addItems(){
//     if(inp.value === ''){
//         alert('Please fill in the input')
//     } else {
//         console.log(inp.value);
//         cart.push(inp.value)
//         document.getElementById('inp').value= ""
//         console.log(cart);
        
//         show.innerHTML = ""
//         for(i=0; i < cart.length; i++){
//             show.innerHTML += `
//                 <p>${i+1}. ${cart[i]}</p>
//             `
//         }

//     }
// }

var cart = []

function addItems() {
    if(inp.value === ''){
        alert('Please fill in the required space')
    } else{
        console.log(inp.value);
        cart.push(inp.value)
        displayCart()
    }
} 

function removeLastItem(){
    cart.pop()
    displayCart()
}

function removeFirstItem(){
    cart.shift()
    displayCart()
}

function addItemFromTheStart(){
    if(inp.value===""){
        alert('Please fill in the space')
    } else {
    cart.unshift(inp.value)
    displayCart()
    }
}

function displayCart() {
    document.getElementById('inp').value = ""
    show.innerHTML=""
    if(inp == 0) {
        noItem.style.display= "block"
        allItemsButtons.style.display= "none"
    } else {
        var table = `<table>`
        table += `<th>S/N</th>`
        table += `<th>ITEM(S)</th>`
        table += `<th colspan="2">ACTIONS</th>`
        for(i=0; i < cart.length; i++){
            console.log(i);
            noItem.style.display= "none"
            allItemsButtons.style.display= "block"
            show.style.display="block"
            table += `<tr>`
            table += `<td>${i+1}.</td>`
            table += `<td>${cart[i]}`
            table += `<td><button class="btn btn-danger btn-sm" onclick="deleteItem(${i})">Delete</button></td>`
            table += `<td><button class="btn btn-warning btn-sm" onclick="edit(${i+1})">Edit</button></td>`
            table += `</tr>`
        }
        table += `</table>`
    }show.innerHTML += table
}

function deleteItem(i) {
    cart.splice(i, 1)
    displayCart()
}

function edit(i) {
    var newName= prompt('Enter New Name Below')
    cart.splice(i-1, 1, newName)
    displayCart()
}

function deleteAll() {
 var confirmation = confirm('Are you sure you want to clear the cart')
 console.log(confirmation);
 if (confirmation) {
    cart.splice(0, cart.length)
    displayCart()
 } else {
    displayCart()
 }
}

function deleteAny() {
    var inp2 = document.getElementById('inp2').value
    if (inp2==0) {
        modalError.style.display= "block"
        modalSuccess.style.display= "none"
       document.getElementById('inp2').value=""
    } else{
        if(inp2 <= cart.length){
            modalError.style.display= "none"
            modalSuccess.style.display= "block"
            cart.splice(inp2-1, 1)
            displayCart()
            document.getElementById('inp2').value=""
        } else{
            alert("Error, No item to delete")
        }
    }
}

function editButton() {
    var inp3 = document.getElementById('inp3').value
    var inp4 = document.getElementById('inp4').value

    if(inp3 ==0 || inp4==0){
        modalError2.style.display= "block"
        modalSuccess2.style.display= "none"
        document.getElementById("inp3").value=""
        document.getElementById("inp4").value=""
    } else{
        if(inp3 <= cart.length){
            modalError2.style.display= "none"
            modalSuccess2.style.display= "block"
            cart.splice(inp3-1, 1, inp4)
            displayCart()
            document.getElementById("inp3").value=""
            document.getElementById("inp4").value=""
        }
    }
}