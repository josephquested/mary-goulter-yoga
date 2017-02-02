function init () {
  renderHeader()
  renderNav()
}

function renderNav () {
  document.getElementById("nav").innerHTML = `
    <a id="home" href="http://marygoulteryoga.com/" class="nav-button">home</a>
    <a id="contact" href="http://marygoulteryoga.com/contact" class="nav-button">contact</a>
  `
}

// <a id="home" href="./index.html" class="nav-button">home</a>
// <a id="contact" href="./contact.html" class="nav-button">contact</a>
// header

function renderHeader () {
  var title = document.getElementById("title")
  var text = "MARYGOULTERYOGA.com"
  for (var i = 0; i < text.length; i++) {
    var h1 = document.createElement("h1")
    h1.appendChild(document.createTextNode(text[i]))

    title.appendChild(h1)
    setOnClick(h1)
    changeColor(h1)
  }
  setHeaderProperties(title)
}

function setHeaderProperties (title) {
  title.onmousemove = () => unFocus()
  title.onmouseup = () => unFocus()
  title.style.cursor = "pointer"
}

function setOnClick (node) {
  node.onclick = changeColor(node)
}

function changeColor (node) {
  var colors = ["red", "blue", "yellow", "black", "green", "orange", "white", "purple", "brown", 'DarkKhaki', 'DarkSalmon', 'DarkOrchid', 'DarkOrange', 'DeepPink', 'Gold', 'HotPink', 'LightSkyBlue']
  var color = colors[randomInt(0, colors.length)]
  while (color == node.style.color) color = colors[randomInt(0, colors.length)]
  node.style.color = color
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var unFocus = function () {
  if (document.selection) {
      document.selection.empty()
  } else {
      window.getSelection().removeAllRanges()
  }
}

// init

init()
