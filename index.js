var app = document.getElementById('app')
var navs = document.getElementsByClassName('nav-button')
for (key in Object.keys(navs)) {
  if (navs[key] !== undefined) {
    navs[key].addEventListener("click", changePage)
  }
}

renderHeader()
renderNav()
renderPageTitle()
changePage({target: {innerHTML: 'home'}})


function renderNav () {
  document.getElementById("nav").innerHTML = `
    <a id="home" href="./index.html" class="nav-button">home</a>
    <a id="contact" href="./contact.html" class="nav-button">contact</a>
  `
}

// header

function renderHeader () {
  var title = document.getElementById("title")
  var text = "MARYGOULTERYOGA.com"
  for (var i = 0; i < text.length; i++) {
    var h1 = document.createElement("h1")
    h1.appendChild(document.createTextNode(text[i]))
    title.appendChild(h1)
    setOnClick(h1)
  }
  setHeaderProperties(title)
}

function setHeaderProperties (title) {
  title.onmousemove = () => unFocus()
  title.onmouseup = () => unFocus()
  title.style.cursor = "pointer"
}

function setOnClick (node) {
  node.onclick = function () {
    var colors = ["red", "blue", "yellow", "black", "green", "orange", "white", "purple", "brown", 'DarkKhaki', 'DarkSalmon', 'DarkOrchid', 'DarkOrange', 'DeepPink', 'Gold', 'HotPink', 'LightSkyBlue']
    var color = colors[randomInt(0, colors.length)]
    while (color == node.style.color) color = colors[randomInt(0, colors.length)]
    node.style.color = color
  }
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

// page render

function renderHome () {
  appendNode('h2', 'home')
  appendNode('p',
    `I love yoga! I know that life can be difficult -
    my practice has taught how to face these difficulties
    and find not only the strength to bear them but also how
    to face fully all of life’s experiences, from the joyful
    to the mundane. I know the value of a consistent practice, and I am honoured
    to share this with you. I found yoga while living in San Francisco,
    and have been fortunate enough to study with incredibly kind and
    intelligent teachers. I bring a compassionate and encouraging presence
    to my classes, and aim to make my teaching relevant and meaningful to everybody.`
  )
}

function renderContact () {
  appendNode('h2', 'contact')
  appendNode('p', '021 0244 2687')
  appendLink('mailto:marygoulteryoga@gmail.com', 'marygoulteryoga@gmail.com')
}
