fetch('projectText.txt')
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
  	document.getElementById("fill").innerHTML = response;
  });
