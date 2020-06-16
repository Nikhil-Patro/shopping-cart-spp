let shop_array =[
    {
        id : 1,
        name : "boots",
        price : 1000,
    },
    {
        id : 2,
        name : "mask",
        price : 50,
    },
    {
        id : 3,
        name : "raincoat",
        price : 1000,
    },
    {
        id : 4,
        name : "sweatshirt",
        price : 2000,
    },
    {
        id : 5,
        name : "umbrella",
        price : 350,
    }];

let cart_array = []; 

let button1 = document.getElementById("1s");
let button2 = document.getElementById("2s");
let button3 = document.getElementById("3s");
let button4 = document.getElementById("4s");
let button5 = document.getElementById("5s");
 
function checkShopEmpty(){      // this function basically gives a "sold out!" message if all items are selected
    if(shop_array[0] == null){
        let left_container  = document.getElementsByClassName("left-container");
        let heading = document.createElement("h4");
        heading.innerText = "We're sold out fellas!";
        heading.style.textAlign="center"; 
        left_container[0].appendChild(heading);
    }

}

function addToCart(){
    console.log(event.target);
    let selected_button_id = event.target.id;
    res_id = selected_button_id.slice(0, 1) ;
    res_id = parseInt(res_id);
    event.target.className="btn btn-danger center";
    event.target.innerText="Remove";
    let cart_right_container = document.getElementsByClassName("right-container");
    let selected_item_div = event.target.parentElement.parentElement.parentElement
    cart_right_container[0].appendChild(selected_item_div);
    let b  = document.createElement("br");
    selected_item_div.insertAdjacentElement("afterend", b);
    //shop_array = shop_array.filter(function(item, selected_button_id){
    //    return item.id != res_id;
    //});
    let updated_shop_array = [];
    for(let i = 0; i < shop_array.length; i++){
        if(shop_array[i].id != res_id){
            updated_shop_array.push(shop_array[i]);
        }
        else{
            cart_array.push(shop_array[i]);
        }
    }
    shop_array = updated_shop_array;
    console.log(shop_array);
    console.log(cart_array);
    checkShopEmpty(); 
}
button1.addEventListener("click", addToCart);
button2.addEventListener("click", addToCart);
button3.addEventListener("click", addToCart);
button4.addEventListener("click", addToCart);
button5.addEventListener("click", addToCart);
 
 
