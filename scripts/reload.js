(function newPhrase() {
  var phrases = ['AxoLib is a noob', 'AxoLib was here', 'AxoLib.exe has stopped responding...'];
  var randomPhrase = Math.floor(Math.random() * phrases.length);
  document.getElementById('center').innerHTML = phrases[randomPhrase];
})();
