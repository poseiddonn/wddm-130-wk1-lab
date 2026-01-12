function handleInput() {
  var name = prompt("Enter your name: ");
  var hobby = prompt("what's your favorite hobby: ")
  var msg = `Your Name is ${name}, and your favorite hobby is ${hobby}`;
  document.getElementById("opArea").innerHTML = msg;
}
