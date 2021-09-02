
// Question 4

function sumDigits(n){
    let sum = 0;
    if (n < 10) {
        sum = n
    } else {
        while(n){
            sum = sum + n%10;
            n = Math.floor(n/10);
        }
    }
return sum;
}
console.log(sumDigits(102))

function multDigits(n){
    let product = 1;
    if (n < 10) {
        product = n
    } else {
        while(n){
            product *=  n%10;
            n = Math.floor(n/10);
        }
    }
return product;
}
console.log(multDigits(102))