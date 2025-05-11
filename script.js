// Typing effect
const text = "👨‍💻 Hello, I'm Pio";
const typingElement = document.getElementById('typing');
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

window.onload = type;

// Music player
const musicToggleBtn = document.getElementById('music-toggle');
const musicSettings = document.getElementById('music-settings');
const trackSelect = document.getElementById('track-select');
const volumeRange = document.getElementById('volume-range');

let audio = new Audio(trackSelect.value);
audio.loop = true;
audio.volume = volumeRange.value;

let isPlaying = false;

musicToggleBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    musicToggleBtn.textContent = "▶️ Play Music";
  } else {
    audio.play();
    musicToggleBtn.textContent = "⏸️ Pause Music";
  }
  isPlaying = !isPlaying;
  musicSettings.classList.remove("hidden");
});

trackSelect.addEventListener('change', () => {
  audio.pause();
  audio = new Audio(trackSelect.value);
  audio.loop = true;
  audio.volume = volumeRange.value;
  if (isPlaying) {
    audio.play();
  }
});

volumeRange.addEventListener('input', () => {
  audio.volume = volumeRange.value;
});

// Click effect
document.addEventListener("click", function(e) {
  const effect = document.createElement("div");
  effect.className = "click-effect";
  effect.style.left = `${e.clientX}px`;
  effect.style.top = `${e.clientY}px`;
  document.body.appendChild(effect);

  setTimeout(() => {
    effect.remove();
  }, 800);
});
