import './src/callbacks.js';
import './src/promises.js';
import './src/async-await.js';

document.addEventListener("DOMContentLoaded", () => {

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
darkBtn.textContent = "☀️";
} else {
darkBtn.textContent = "🌙";
}

});

const output = document.getElementById("demo-area");

document.getElementById("callbackBtn").addEventListener("click", () => {

output.textContent = "Running callback...";

setTimeout(() => {
output.textContent = "Callback completed!";
},1000);

});

document.getElementById("promiseBtn").addEventListener("click", () => {

output.textContent = "Running promise...";

new Promise(resolve=>{
setTimeout(()=> resolve("Promise resolved!"),1500)
}).then(data=>{
output.textContent = data;
});

});

document.getElementById("asyncBtn").addEventListener("click", async ()=>{

output.textContent = "Running async...";

const data = await new Promise(resolve =>
setTimeout(()=> resolve("Async/Await complete!"),2000)
);

output.textContent = data;

});

});
