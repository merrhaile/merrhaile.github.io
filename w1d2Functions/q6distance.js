

// Question 6

function calDistance(x1, y1, x2, y2){
    let distance;
    distance = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
    return Math.round(distance);
}
console.log(calDistance(0, 0 , 5, 5))