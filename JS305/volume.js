
const prompt = require("prompt-sync")();
let r = prompt("radius = ");
let h = prompt("height =  ");
let volume;

volume = Math.round(Math.PI * r * r * h);
console.log(volume);