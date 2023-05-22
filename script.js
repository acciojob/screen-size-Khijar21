//your JS code here. If required.
const sizeElement = document.getElementById('sizeInfo')
sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
// append to body
document.body.append(sizeElement);

// function for changing size values
	window.onresize = function() {
		sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
	}