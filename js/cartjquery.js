//alert("This is cart jquery")
var localStorageproduct = JSON.parse(window.localStorage.getItem('products'))
//console.log(localStorageproduct)
//console.log(localStorageproduct[0].img)
cart_items = JSON.parse(window.localStorage.getItem('cart_items'))
//console.log(cart_items[0].title)
$.each(cart_items,function(i,val){ 
    console.log("cart item -"+cart_items[i].title)
    $.each(localStorageproduct,function(j,val){
        //console.log("product -"+(localStorageproduct[j].title))
        //if((cart_items[i]).localeCompare(localStorageproduct[j].title)){
        if(cart_items[i].title == localStorageproduct[j].title){
            console.log("yes")
            let cart_item = $('<div class="d-flex justify-content-between mb-1 border-bottom"><div class="d-flex justify-content-between"><div class="cart-item-div"><img src="" class="cart-image"><span id="cart-title-span"></span></div></div><div class="d-flex justify-content-between"><span class="cart-price-span"></span><p>$</p></div><div class="d-flex justify-content-between"><div class="cart-inputbutton-div"><input class="cart-quantity-input w-25" type="number" value="1"><button class="cart-remove-btn btn btn-outline-danger ml-5">Remove</button></div></div></div>')
            cart_item.children("div:first-child").children().children("img").attr("src",localStorageproduct[j].img)
            cart_item.children("div:first-child").children().children("span").text(localStorageproduct[j].title)
            //var total_price_interms_of_quantity = localStorageproduct[j].price *
            cart_item.children("div:first-child").next().children("span").text(parseFloat(localStorageproduct[j].price) * parseFloat(cart_items[i].quantity) )
            cart_item.children("div:first-child").next().next().children().children("input").val(cart_items[i].quantity)
            $('.cart-item-main-div').append(cart_item)
            //console.log( parseFloat(cart_items[i].price))

        }
    })   
    
})
$('.cart-quantity-input').blur(function(){
    
    var total_price_interms_of_quantity = $(this).parent().parent().prev().children("span").text()
    //console.log(" ->" + total_price_interms_of_quantity)
    var quantiy_per_item = $(this).val()
    var total_price_interms_of_quantity = total_price_interms_of_quantity * quantiy_per_item
    //console.log( " ="+ total_price_interms_of_quantity)
    $(this).parent().parent().prev().children("span").text(total_price_interms_of_quantity)

    // var sum = 0 
    // $('.cart-price-span').each(function(){
    //  sum += parseFloat($(this).text())
    // })
    // $('.cart-tatal-price').text(sum + '$')
    //console.log(sum)

    var item_title = $(this).parent().parent().prev().prev().children().children("span").text()
    
    cart_items = JSON.parse(window.localStorage.getItem('cart_items'))
    $.each(cart_items,function(i,val){
        if(cart_items[i].title == item_title){
            //console.log(item_title)
            cart_items[i].quantity = quantiy_per_item
            //console.log(item_title)
            window.localStorage.setItem("cart_items",JSON.stringify(cart_items))
        }
    })
    location.reload(true)

})
$('.cart-remove-btn').click(function(){
    remove_cart_items = JSON.parse(window.localStorage.getItem('cart_items'))
    var remove_cart_item = $(this).parent().parent().prev().prev().children().children("span").text()
    //console.log(remove_cart_item)
    remove_cart_items.splice($.inArray(remove_cart_item, remove_cart_items),1);
    //console.log(remove_cart_items)
    window.localStorage.setItem("cart_items",JSON.stringify(remove_cart_items))
    location.reload(true)


})

var sum = 0 
$('.cart-price-span').each(function(){
     sum += parseFloat($(this).text())
})
$('.cart-tatal-price').text(sum + '$')
//console.log(sum)