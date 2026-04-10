// ===============================
// CALLBACK SIMULATOR (UPGRADED)
// ===============================

// Simulates a callback-based async flow
function greet(name, callback) {
  setTimeout(() => {
    callback(name);
  }, 1000);
}

function afterGreeting(name) {
  return `Hello ${name} 👋 - Callback executed successfully`;
}

// MAIN DEMO FUNCTION (used by main.js)
export function runCallbackDemo(output) {
  output.innerHTML = "Step 1 → Initializing callback system...";

  setTimeout(() => {
    output.innerHTML = "Step 2 → Calling function with callback...";

    setTimeout(() => {
      greet("Brian", (name) => {
        output.innerHTML = afterGreeting(name);

        setTimeout(() => {
          output.innerHTML += "<br>✅ Step 3 → Callback flow completed";
        }, 800);
      });

    }, 1000);

  }, 1000);
}
