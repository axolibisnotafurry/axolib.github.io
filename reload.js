var texts = [
  "I am a sentence.",
  "Some nice stuff.",
  "I am random too!"
];

document.getElementById('center').innerHTML = texts[Math.floor(Math.random()*texts.length)];
