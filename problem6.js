let square = 0;
let sumofsquares = 0;
for(let i = 0; i<= 100; i++){
    square = i*i;
    sumofsquares += square;
}
let sumofs = 0;
let squareofsums = 0;
for(let s = 0; s <= 100; s++){
    sumofs += s;
}
squareofsums = sumofs*sumofs;

let difference = squareofsums - sumofsquares;

console.log(difference);
