
function getOrders(){
    var each_food_prices = [50.00, 110.00, 85.00, 45.00, 95.00, 95.00, 60.00,85.00, 60.00, 50.00, 60.00, 80.00,
        55.00, 20.00, 25.00, 25.00, 12.00, 26.00, 26.00, 26.00, 18.00, 15.00, 25.00, 20.00];

    var food_item = document.getElementsByClassName("foods");
    var order_output = document.getElementById('output');
    var total_orders = document.getElementById('total_orders');

    var tot='';
    var total_prices=0;

    for(var i=0; i<food_item.length; i++){

        if(food_item[i].checked == true){

            for(var i=0; i<each_food_prices.length; i++){
                if(food_item[i].checked == true){

                    tot  += food_item[i].value + " " + " " + "₱" + each_food_prices[i] + "<br>";

                    total_prices += parseInt(each_food_prices[i]);
                }
                
            }
        }
  
    }
            //ORDERS
            var outcome = "<h3>Your Order is: <br></h3>" + tot;
            order_output.innerHTML = outcome + "<br>";

            var total_all = "<h4>Total: " + total_prices;
            total_orders.innerHTML = total_all + "<br>";
}

function getReceiptModal(){
    var btnforModal = document.getElementById('receipt_go');
    var myModal = new bootstrap.Modal(document.getElementById('modal_output'),{backdrop: 'static'})
    var buttonClose = document.getElementById('close_btn') 
    
    
    btnforModal.addEventListener('click', function(){


        myModal.show(getCustomerReceipt('.modal_receipt.innerHTML'));
        
        
        buttonClose.addEventListener('click', function(){
            myModal.hide();
            clearAll();
        })
       
    }
    

    )


}



function getCustomerReceipt(){
    computationReceipt();
    
}

function computationReceipt(){
    var each_food_prices = [50.00, 110.00, 85.00, 45.00, 95.00, 95.00, 60.00,85.00, 60.00, 50.00, 60.00, 80.00,
        55.00, 20.00, 25.00, 25.00, 12.00, 26.00, 26.00, 26.00, 18.00, 15.00, 25.00, 20.00];
    
       // 55.00, 20,00, 25.00, 25.00, 12.00, 26.00, 26.00, 26.00, 18.00, 15.00, 25.00, 25.00
    var food_item = document.getElementsByClassName("foods");
    
    var modal_receipt = document.getElementById('modal_receipts');
   
   

    var total='';
    var total_price=0;

    for(var i=0; i < food_item.length; i++){

        if(food_item[i].checked == true){
            for(var i=0;  i < each_food_prices.length; i++){

                if(food_item[i].checked == true){

                   total += food_item[i].value + " " + "₱" +each_food_prices[i] + "<br>";

                   total_price += parseInt(each_food_prices[i]);
                    }

            }
        }

    }
    
    var outcome = total;
    var total_all = total_price;
    
    modal_receipt.innerHTML =  "Thank You for Ordering!<br>" + "Come Again <br><br>" + "Your Order: <br>"   + outcome   + "<br>" + "Total Price: " + "₱" + total_all;
}


function clearAll(){
    //let checkboxes = document.getElementById('fried').checked = false;
    let checkboxes = document.getElementsByClassName('foods');

    for(var i=0; i<checkboxes.length; i++){
        checkboxes[i].checked = false;
    }

    let totalOrders = document.getElementById('total_orders').innerHTML = "";
    let YourOrders = document.getElementById('output').innerHTML = "";
    

}
