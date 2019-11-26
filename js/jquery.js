$('.btn-add').click(function(){
    window.open("addnew.html","_self")
})
$('.btn-cart').click(function(){
    window.open("cart.html","_self")
})

cart_items = JSON.parse(window.localStorage.getItem('cart_items'))
var cart_item_length
if(cart_items != null){
    cart_item_length = cart_items.length
}
else{
    cart_item_length = 0
}
$('.btn-cart').children("span").children("sup").text(cart_item_length)
//var products =[]

//  var products = [
//      {
//      title:"Mother Board",
//      img:"images/motherboard.jpg",
//      price:"200$",
//      description:"Intel Z390 GAMING Motherboard with 10+2 Digital PWM Design, 2-Way CrossFire™ Multi-Graphics, USB 3.1 Gen2 Type-A, M.2 Thermal Guard, Intel GbE LAN with cFosSpeed, Smart Fan 5, Dual M.2, Dual Armor with Ultra Durable™ Technology, DualBIOS, CEC 2019"
//      }
//   ]
 //console.log(products)
 //window.localStorage.setItem('products',JSON.stringify(products))
 var products = JSON.parse(window.localStorage.getItem('products'))
 console.log(products)
 if(products == null)
 {
    var products = [
        {
        title:"Mother Board",
        img:"images/motherboard.jpg",
        price:"200",
        description:"Intel Z390 GAMING Motherboard with 10+2 Digital PWM Design, 2-Way CrossFire™ Multi-Graphics, USB 3.1 Gen2 Type-A, M.2 Thermal Guard, Intel GbE LAN with cFosSpeed, Smart Fan 5, Dual M.2, Dual Armor with Ultra Durable™ Technology, DualBIOS, CEC 2019"
        }
     ]
     window.localStorage.setItem('products',JSON.stringify(products))
 }
 
 $.each(products,function(i,val){
     var insertproduct = $('<div class="card shadow-lg border-success m-3 d-flex justify-content-center" style="width: 18rem;"><img src="" class="card-img-top" alt="..."><div class="card-body "><h5 class="card-title"></h5><p class="card-text"></p><div class="container-fluid row "><div class="container col-md-6"><p></p></div><button class="btn btn-outline-primary col-md-6 d-blo btn-add-to-card">Add to Cart</button></div></div></div>')
     insertproduct.children("img").attr('src',products[i].img)
     insertproduct.children("div").children("h5").text(products[i].title)
     //insertproduct.children("div").children("p").text(localStorageproduct[i].description)
     insertproduct.children("div").children("div").children("div").children("p").text(products[i].price + "$")
     $('.productsview').append(insertproduct)
 })
 let valueforsingleview
 $('.card-img-top').click(function(){
    //console.log("card-img-top")
    valueforsingleview = $(this).next().children("h5").text()
    window.localStorage.setItem("valueforsingleview",JSON.stringify(valueforsingleview))
    window.open("singleview.html","_self")
    console.log(valueforsingleview)
})

 $('.btn-submit-add-new-product').click(function(){
     console.log("submit button clicked")
     var title = $('#input-title').val()
     var img = $('#input-url').val()
     var price = $('#input-price').val()
     var description = $('#input-description').val()
     products.push({title:title,img:img,price:price,description:description})
     console.log(products)
     
     window.localStorage.setItem('products',JSON.stringify(products))
     window.open('index.html',"_self")
 })
 var cart_items = []
 $('.btn-add-to-card').click(function(){
    var cart_item = []
    var cart_item_title = $(this).parent().parent().children("h5").text()
    var cart_item_quantity = '1'
    //cart_item.push({tite:cart_item_title,quantity:cart_item_quantity})
    
    cart_items = JSON.parse(window.localStorage.getItem('cart_items'))
    if(cart_items == null){
        cart_items = [{title:cart_item_title,quantity:cart_item_quantity}]
    }
    else{
        cart_items.push({title:cart_item_title,quantity:cart_item_quantity})
    }
    
    window.localStorage.setItem('cart_items',JSON.stringify(cart_items))
    location.reload(true)
 })
