const API_KEY = "PASTE_YOUR_GEMINI_API_KEY_HERE";

const output = document.getElementById("output");
const loading = document.getElementById("loading");

async function generate(type) {
  const prompt = document.getElementById("prompt").value.trim();

  if (!prompt) {
    alert("Please enter a YouTube topic.");
    return;
  }

  let instruction = "";

  if (type === "title") {
    instruction = "Generate 10 viral YouTube titles for: " + prompt;
  } else if (type === "description") {
    instruction = "Write a professional YouTube description for: " + prompt;
  } else if (type === "hashtags") {
    instruction = "Generate 30 viral hashtags for: " + prompt;
  }

  loading.innerHTML = "Generating...";
  output.textContent = "";

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: instruction
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    output.textContent =
      data.candidates[0].content.parts[0].text;

  } catch (e) {
    output.textContent = "Error: " + e.message;
  }

  loading.innerHTML = "";
}

document.getElementById("titleBtn").onclick = () => generate("title");
document.getElementById("descBtn").onclick = () => generate("description");
document.getElementById("hashBtn").onclick = () => generate("hashtags");
