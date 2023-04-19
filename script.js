function highlight() {
  // Get all the <strong> elements in the paragraph
  var boldWords = document.getElementsByTagName("strong");
  
  // Loop through all the <strong> elements and set their color to green
  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = "green";
  }
}

function return_normal() {
  // Get all the <strong> elements in the paragraph
  var boldWords = document.getElementsByTagName("strong");
  
  // Loop through all the <strong> elements and set their color back to black
  for (var i = 0; i < boldWords.length; i++) {
    boldWords[i].style.color = "black";
  }
}
