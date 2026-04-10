import { runCallbackDemo } from "./callbacks.js";
import { runPromiseDemo } from "./promises.js";
import { runAsyncDemo } from "./async-await.js";

const output = document.getElementById("demo-area");
const loader = document.getElementById("loader");

function showLoading(text = "Processing...") {
  loader.style.display = "block";
  loader.innerHTML = `<span class="spinner"></span> ${text}`;
  output.textContent = "";
}

function hideLoading() {
  loader.style.display = "none";
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* =====================
   CALLBACK DEMO
===================== */
document.getElementById("callbackBtn").addEventListener("click", async () => {
  showLoading("Running callback flow...");

  await delay(1200);
  runCallbackDemo(output);

  await delay(500);
  hideLoading();
});

/* =====================
   PROMISE DEMO
===================== */
document.getElementById("promiseBtn").addEventListener("click", async () => {
  showLoading("Waiting for promise resolution...");

  await delay(1200);
  runPromiseDemo(output);

  await delay(500);
  hideLoading();
});

/* =====================
   ASYNC/AWAIT DEMO
===================== */
document.getElementById("asyncBtn").addEventListener("click", async () => {
  showLoading("Executing async/await sequence...");

  await delay(1200);
  runAsyncDemo(output);

  await delay(500);
  hideLoading();
});
