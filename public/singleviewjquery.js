var single_product_tilte = JSON.parse(window.localStorage.getItem("valueforsingleview"))
console.log(single_product_tilte)
var localStorageproduct = JSON.parse(window.localStorage.getItem('products'))
console.log(localStorageproduct)
console.log(localStorageproduct[0].title)
$.each(localStorageproduct,function(i,val){
    //console.log(localStorageproduct[i].title)
    if((localStorageproduct[i].title) == single_product_tilte)
    {
        var content = $('<div class="row no-gutters"><div class="col-md-4"><img src="" class="card-img" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title"></h5><p class="card-text"></p></div></div><div class="col-md-8 d-flex flex-row-reverse "><a href="#" class="btn btn-outline-primary col-md-6 d-blo btn-add-to-card">Add to Cart</a></div></div>')
        content.children('.col-md-4').children("img").attr("src",localStorageproduct[i].img)
        content.children('.col-md-4').next().children().children("h5").text(localStorageproduct[i].title)
        content.children('.col-md-4').next().children().children("p").text(localStorageproduct[i].description)
        $('.single-view-div').html(content)
        window.localStorage.setItem('valueforsingleview',null)
    }
})

$('.btn-add-to-card').click(function(){
    // var cart_item = $(this).parent().prev().children().children("h5").text()
    
    // cart_items = JSON.parse(window.localStorage.getItem('cart_items'))
    // cart_items.push(cart_item)
    // window.localStorage.setItem('cart_items',JSON.stringify(cart_items))

    ///////////////////////////////////////////////////////
    var cart_item = []
    var cart_item_title = $(this).parent().prev().children().children("h5").text() //$(this).parent().parent().children("h5").text()
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
    window.open("cart.html","_self")
 })