
let date = new Date();

document.getElementById("date").innerHTML = date.toDateString();
document.getElementById("complededTime").innerHTML = date.toLocaleTimeString();




console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());

