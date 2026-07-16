const output = document.getElementById("output");
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
