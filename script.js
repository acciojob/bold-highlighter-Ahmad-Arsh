function highlight() {
  // Get all the bold elements in the paragraph
  var boldElements = document.querySelectorAll("p strong");

  // Set the color of each bold element to green
  for (var i = 0; i < boldElements.length; i++) {
    boldElements[i].style.color = "green";
  }
}

function return_normal() {
  // Get all the bold elements in the paragraph
  var boldElements = document.querySelectorAll("p strong");

  // Set the color of each bold element back to black
  for (var i = 0; i < boldElements.length; i++) {
    boldElements[i].style.color = "black";
  }
}

// Add event listeners to the link
var link = document.getElementById("myLink");
link.addEventListener("mouseover", highlight);
link.addEventListener("mouseout", return_normal);
