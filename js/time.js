// event that loads the function when the webpage is done loading
window.onload = time();
// function that determines the time of day depending on hours
function time() {
  // get the current time in hours from the computer local timer
  const currentTime = new Date().getHours();
  if (currentTime < 12) {
    greeting = "Good morning";
  } else if (currentTime < 18){
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  // target the HTML element that will show the time of day
  const timeElement = document.getElementById("time");
  // push back the result to the HTML page
  timeElement.innerText = greeting;
}