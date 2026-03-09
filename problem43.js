const f = x => x**3 + x**2 - x + 1;


function rektangelHoger(f, a, b, n) {
    let sum = 0;
    let steg = (b - a) / n;
    for (let index = 0; index < n; index++) {
        let area = steg * f(a + steg * (index +1 ));
        sum += area
        
    }
    return sum;
   
}
  console.log(rektangelHoger(f, 1, 13, 10000000))
