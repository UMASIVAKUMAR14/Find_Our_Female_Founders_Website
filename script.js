/* .js files add interaction to your website */

console.log("hi");

//personalized text input

var displayName = document.getElementById("secret");
var button = document.getElementById("seeinfo");

if (button) {
  button.addEventListener("click", displaySecret);
}

function displaySecret() {
  var text = document.getElementById("busname").value;
  displayName.innerHTML = "Please consider telling us more about " + text + " and its founder at [email is tbd]!";
}



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

//title animation
anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  })
  .add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5000
  });

