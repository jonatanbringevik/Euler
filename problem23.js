let triangle = [];
for(let a = 1; a <= 334; a++){
for(let b = a; b <= 500; b ++){
let c = (a**2 + b**2)**0.5;
if(Number.isInteger(c)){
    triangle.push([a, b, c]);
}
}
}
console.log(triangle)