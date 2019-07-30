(function newFact() {
  var facts = ['Fact 1', 'Fact 2', 'Fact 183'];
  var randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').innerHTML = facts[randomFact];
})();
