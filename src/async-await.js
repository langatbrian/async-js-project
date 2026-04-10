// ===============================
// ASYNC/AWAIT SIMULATOR (UPGRADED)
// ===============================

// Fake API simulation
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // change to false to test error

      if (success) {
        resolve("📦 Async/Await Data received from server!");
      } else {
        reject("❌ Server error: Failed to fetch data");
      }

    }, 2000);
  });
}

// Delay helper (for step animation)
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// MAIN DEMO FUNCTION (used by main.js)
export async function runAsyncDemo(output) {

  try {
    output.innerHTML = "Step 1 → Initializing async function...";

    await wait(1000);

    output.innerHTML = "Step 2 → Calling API using await fetchData()...";

    await wait(1200);

    output.innerHTML = "Step 3 → Waiting for response... (non-blocking async execution)";

    const data = await fetchData();

    await wait(800);

    output.innerHTML = `
      Step 4 → Response received <br>
      ${data} <br><br>
      🚀 Async/Await execution completed successfully
    `;

  } catch (error) {

    await wait(800);

    output.innerHTML = `
      ❌ Async flow failed <br>
      ${error} <br><br>
      ⚠️ Error handled gracefully using try/catch
    `;
  }
}
