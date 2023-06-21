// Checking the current year and adding it to the footer

let d = new Date();
let year = d.getFullYear();
let p = document.getElementById('year');

p.innerText = year;