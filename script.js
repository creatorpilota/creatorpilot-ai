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

  setTimeout(() => {
    output.textContent =
`🔥 Top 10 Viral Titles

1. ${topic} - You Won't Believe What Happened!
2. Top 10 ${topic} Facts
3. Everything About ${topic}
4. Beginner's Guide to ${topic}
5. ${topic} Explained
6. Amazing ${topic} Secrets
7. Why ${topic} Is Trending
8. ${topic} Tips & Tricks
9. Best ${topic} Moments
10. The Future of ${topic}`;

    hideLoading();
  }, 1000);
});
function showLoading() {
  document.getElementById("loading").innerHTML = "⏳ Generating...";
}

function hideLoading() {
  document.getElementById("loading").innerHTML = "";
}

function getTopic() {
  return document.getElementById("prompt").value.trim();
}

document.getElementById("titleBtn").addEventListener("click", function () {
  let topic = getTopic();

  if (topic === "") {
    alert("Please enter a YouTube topic.");
    return;
  }

  showLoading();

  setTimeout(function () {
    document.getElementById("output").textContent =
`🔥 Top 10 ${topic} Ideas
🚀 Best ${topic} Tips
💥 ${topic} Explained
⭐ Ultimate ${topic} Guide
🎯 ${topic} Secrets`;

    hideLoading();
  }, 1000);
});
document.getElementById("descBtn").addEventListener("click", function () {
  let topic = getTopic();

  if (topic === "") {
    alert("Please enter a YouTube topic.");
    return;
  }

  showLoading();

  setTimeout(function () {
    document.getElementById("output").textContent =
`📌 In this video, you'll learn everything about ${topic}.

✅ Easy to understand
✅ Beginner friendly
✅ Latest tips and tricks

Don't forget to Like 👍, Comment 💬 and Subscribe 🔔 for more amazing content!`;

    hideLoading();
  }, 1000);
});
document.getElementById("hashBtn").addEventListener("click", function () {
  let topic = getTopic();

  if (topic === "") {
    alert("Please enter a YouTube topic.");
    return;
  }

  showLoading();

  setTimeout(function () {
    document.getElementById("output").textContent =
`#${topic.replace(/\s+/g, "")}
#YouTube
#Viral
#Trending
#ContentCreator
#AI
#Shorts
#VideoMarketing
#Growth
#CreatorPilotAI`;

    hideLoading();
  }, 1000);
});
