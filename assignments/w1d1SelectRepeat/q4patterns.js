
// Question 4


let x = ""
for (let i = 1 ; i <= 5; i++){
    for (let j = 1 ; j <= 5; j++){
        x = x + j
    }
    console.log(x)
    x = ""
}

let y = ""
for (let i = 1 ; i <= 5; i++){
    for (let j = 1 ; j <= 5; j++){
        y = y + i;
        if(i === j) break;  
    }
    console.log(y)
    y = ""
}

let z = ""
for (let i = 5 ; i >= 1; i--){
    for (let j = 1 ; j <= 5; j++){
        z = z + i;
        if(i === j) break; 
    }
    console.log(z)
    z = ""
}