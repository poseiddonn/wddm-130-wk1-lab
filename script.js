function handleInput() {
  var name = prompt("Enter your name: ");
  var hobby = prompt("what's your favorite hobby: ");
  var msg = `Your Name is ${name}, and your favorite hobby is ${hobby}!`;
  var loc = prompt("Where do you live: ");
  var locData = `You live in ${loc}`;
  document.getElementById("opArea").innerHTML = msg;
  document.getElementById("locArea").innerHTML= locData;
}
