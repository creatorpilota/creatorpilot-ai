const output = document.getElementById("output");

const API_KEY = "AIzaSyC7qZo2NqxO6YsHA0cLfHLLo-VxHAVzN5o";

async function askAI(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ]
    })
  });

  const data = await response.json();
console.log(data);

if (!data.candidates) {
    return JSON.stringify(data, null, 2);
}

return data.candidates[0].content.parts[0].text;
}
const loading = document.getElementById("loading");

function showLoading() {
  loading.textContent = "⏳ AI is generating...";
  output.textContent = "";
}

function hideLoading() {
  loading.textContent = "";
}

function getPrompt() {
  return document.getElementById("prompt").value.trim();
}

document.getElementById("titleBtn").addEventListener("click", () => {
  const topic = getPrompt();

  if (!topic) {
    alert("Please enter a YouTube topic.");
    return;
  }

  showLoading();
  (async () => {
    try {
        const result = await askAI(
            `Generate 10 viral YouTube titles about ${topic}. Only return the titles in a numbered list.`
        );

        output.textContent = result;
    } catch (e) {
        output.textContent = "Error: " + e.message;
    }

    hideLoading();
})();
});
