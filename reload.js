var texts = [
  "I am a sentence.",
  "Some nice stuff.",
  "I am random too!"
];

document.getElementById("content").innerHTML = texts[Math.floor(Math.random()*texts.length)];;
