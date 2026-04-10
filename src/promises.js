// ===============================
// PROMISE SIMULATOR (UPGRADED)
// ===============================

// Fake API that simulates network request
function fakeAPI() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const success = true; // you can change to false to test failure

      if (success) {
        resolve("🎉 Data received from server!");
      } else {
        reject("❌ Network error: Failed to fetch data");
      }

    }, 2000);

  });
}

// MAIN DEMO FUNCTION (called from main.js)
export async function runPromiseDemo(output) {
  output.innerHTML = "Step 1 → Sending request to server...";

  await delay(1000);

  output.innerHTML = "Step 2 → Waiting for response (Promise pending)...";

  try {
    const result = await fakeAPI();

    await delay(800);
    output.innerHTML = `
      Step 3 → Response received <br>
      ${result} <br>
      <br>
      ✅ Promise flow completed successfully
    `;

  } catch (error) {
    await delay(800);
    output.innerHTML = `
      Step 3 → Request failed <br>
      ${error} <br>
      <br>
      ❌ Promise flow ended with error
    `;
  }
}

// Helper delay function (UI simulation timing)
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
