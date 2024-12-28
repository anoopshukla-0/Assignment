function calculate() {
    let price = prompt("Enter the Total price :-")
    price = Number(price);
    let discounts = prompt("Enter the Total discounts :-")
    discounts = discounts = discounts === "" ? undefined : Number(discounts); 
    
    if (isNaN(price) || (discounts !== undefined && isNaN(discounts))){
        console.log("Enter valid Number")
        return;
    }
      totalSum(price, discounts)
}

function totalSum (price, discounts = 10) {
    let discount = (price * discounts)/100;
    let finalPrice = price-discount;
    
    console.log("finalPrice:", finalPrice);
}

calculate()