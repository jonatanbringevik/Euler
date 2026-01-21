let number = 2520;
let ejhittade = true;

while (ejhittade) {
    let ardelbart = true;
    for(let i = 2; i <= 20 && ardelbart; i++){
        if( number % i !== 0 )  {
            ardelbart = false;
        }
    }
    if (ardelbart){
        console.log(number)
        ejhittade = false;
    }else {
        number ++
    }
    
}


