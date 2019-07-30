var texts = [
  "AxoLib is a noob.",
  "AxoLib was here",
  "AxoLib.exe has stopped working..."
];

document.getElementById("content").innerHTML = texts[Math.floor(Math.random()*texts.length)];;
