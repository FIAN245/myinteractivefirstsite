const salamList = [
  "Halo! Semoga harimu menyenangkan 😊",
  "Assalamualaikum, sehat selalu ya 🙏",
  "Hai teman! Tetap semangat 💪",
  "Selamat datang di website interaktif 🌐",
  "Apa kabar? Semoga baik-baik saja 🌸"
];

const btnSalam = document.getElementById("btnSalam");
const outputSalam = document.getElementById("outputSalam");

btnSalam.addEventListener("click", () => {
  const acak = Math.floor(Math.random() * salamList.length);
  outputSalam.textContent = salamList[acak];
});

// Fungsi toggle tema
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Ganti tema dengan tombol keyboard (T)
document.addEventListener("keydown", function(e) {
  if (e.key === "t" || e.key === "T") {
    toggleTheme();
  }
});
