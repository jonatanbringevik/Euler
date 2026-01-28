let findvariable = 0;
for(let i = 800; i < 1000; i++ ){
    for(let s = 800; s <1000; s++){
     let product=s*i;
        if(product == product.toString().split("").reverse().join("")
        ){
            if(product>findvariable){
            findvariable = product
            }
    }
        }
 }
console.log(findvariable)
