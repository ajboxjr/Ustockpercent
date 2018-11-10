alert('hello')

/*
  Creating Stylesheet
*/
var sheet = (function() {
	// Create the <style> tag
	var style = document.createElement("style");

	// WebKit hack :(
	style.appendChild(document.createTextNode(""));

	// Add the <style> element to the page
	document.head.appendChild(style);

	return style.sheet;
})();

sheet.insertRule('.refresh-modal { width:250px; display: flex; height:50px; position: absolute; bottom:0; right: 0; background-color: #4C6085; }')
sheet.insertRule('refresh-modalText { color: white}')
sheet.insertRule('.percentButton { display:flex; justify-content: center; align-items: center; width: 30px; height:30px; background-color: white; border-radius:50%; border: 2px solid #2794CE; }')
sheet.insertRule('.percentButton>p { text-align:center; color:2794CE; margin: 0; }')
sheet.insertRule('.buttonContainer { position: absolute; width:130px; height: 40px; display:flex; justify-content: space-around; align-items:center }')

/*
  Selecting and creating elements
*/
var body = document.querySelector("body")

var refreshModal = document.createElement('div');

var refreshModalText = document.createElement('h1');
refreshModalText.classList.add('refresh-modal');
refreshModalText.innerText = 'Refresh Body'

refreshModal.appendChild(refreshModalText)
body.appendChild(refreshModal)

function addButtons(panels) {
	buttonContainer = document.createElement('div')
	buttonContainer.classList.add('buttonContainer')
	percentages = ['25%','50%','75%','100%'];
	// buttonContainer.classList.add('')
	for (index in percentages){
		var button = document.createElement('div')
		var paragraph = document.createElement('p')
		var text = document.createTextNode(percentages[index])

		button.classList.add('percentButton')

		paragraph.appendChild(text)
		button.appendChild(paragraph)

		buttonContainer.appendChild(button)
	}

	panels[0].appendChild(buttonContainer)
}

/*
	Refresh modals on load and addBuy buttons to elements
*/
function refreshingModal() {
    var panels = document.querySelectorAll('.slides>li>div>div>.scroll-area>accordion>.panel-group>.entryPanel>.panel-collapse>div>div>div>div>form>div')//entryPanel
		// var panels = document.querySelectorAll('.orderEntryForm');
		addButtons(panels)
		// panels[0].style.color = 'red';
    alert(` count ${panels.length}`)
}
refreshModal.addEventListener('click', refreshingModal)
