const nombre = "Mariana";

const frases = [
  "eres lo mejor que me pasó ❤️",
  "mi lugar favorito es contigo 💫",
  "no hay día que no piense en ti 💭",
  "mi corazón te eligió 💘",
  "eres mi persona favorita 💕",
  "contigo todo es más bonito 🌷",
  "gracias por llegar a mi vida ✨",
  "mi lugar seguro eres tú 🫶",
  "siempre tú, sin duda ❤️",
  "mi mejor historia eres tú 📖",
  "no sabía que se podía querer así 💖",
  "tu sonrisa es mi debilidad 😍",
  "eres mi casualidad más bonita 🌹",
  "a tu lado todo tiene sentido 💫",
  "te pienso incluso sin querer 🥰",
  "contigo quiero todo 💍",
  "eres mi hoy y mi siempre 💕",
  "mi corazón pronuncia tu nombre 💓",
  "amarte es mi parte favorita del día ☀️",
  "eres mi bombon chitita 🍬",
];

const heart = document.getElementById("heart");
const text = document.getElementById("text");
const music = document.getElementById("music");

// Música se reproduce al abrir el sitio
window.addEventListener("load", () => {
  music.play().catch(() => {});
});

heart.addEventListener("click", () => {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  text.textContent = `${nombre}, ${frase}`;

  // Corazones flotantes
  const floating = document.createElement("div");
  floating.className = "floating";
  floating.textContent = "❤️";
  floating.style.left = Math.random() * 100 + "vw";
  floating.style.top = "60%";

  document.body.appendChild(floating);

  setTimeout(() => {
    floating.remove();
  }, 3000);
});
