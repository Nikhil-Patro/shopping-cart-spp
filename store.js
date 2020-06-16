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
 
function checkShopEmpty(){
    if(shop_array[0] == null){
        let right_container  = document.getElementById("shop_empty_warning");
        right_container.style.display = "inline";
    }
    else {
        let heading  = document.getElementById("shop_empty_warning");
        heading.style.display = "none";
        }
    }

function checkCartEmpty(){
    if(cart_array[0] == null){
        let right_container  = document.getElementById("cart_empty_warning");
        right_container.style.display = "inline";
    }
    else {
        let heading  = document.getElementById("cart_empty_warning");
        heading.style.display = "none";
        }
    }


 
 
function addToCart(){
    //console.log(event.target);
    let selected_button_id = event.target.id;
    res_id = selected_button_id.slice(0, 1) ;
    res_id = parseInt(res_id);
    if(event.target.className == "btn btn-success center")
    {
        event.target.className="btn btn-danger center";
        event.target.innerText="Remove";
        let cart_right_container = document.getElementsByClassName("right-container");
        let selected_item_div = event.target.parentElement.parentElement.parentElement;
        cart_right_container[0].appendChild(selected_item_div);

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
        checkCartEmpty(); 
    }
    else
    {   
        event.target.className="btn btn-success center";
        event.target.innerText="Add to Cart";
        let cart_left_container = document.getElementsByClassName("left-container");
        let selected_item_div = event.target.parentElement.parentElement.parentElement;
        cart_left_container[0].appendChild(selected_item_div);
        let updated_cart_array = [];
        for(let i = 0; i < cart_array.length; i++){
            if(cart_array[i].id != res_id){
                updated_cart_array.push(cart_array[i]);
            }
            else{
                shop_array.push(cart_array[i]);
            }
        }
        cart_array = updated_cart_array;
        console.log(shop_array);
        console.log(cart_array);
        checkCartEmpty(); 
        checkShopEmpty();

    }
}
button1.addEventListener("click", addToCart);
button2.addEventListener("click", addToCart);
button3.addEventListener("click", addToCart);
button4.addEventListener("click", addToCart);
button5.addEventListener("click", addToCart);
 
 
