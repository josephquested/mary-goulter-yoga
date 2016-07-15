var app = document.getElementById('app')
var navs = document.getElementsByClassName('nav-button')
for (key in Object.keys(navs)) {
  if (navs[key] !== undefined) {
    navs[key].addEventListener("click", changePage)
  }
}

changePage({target: {innerHTML: 'home'}})

function changePage (e) {
  emptyNode(app)
  setNavActive(document.getElementById(e.target.innerHTML))

  switch (e.target.innerHTML) {
    case "home":
      renderHome()
      break
    case "classes":
      renderClasses()
      break
    case "contact":
      renderContact()
      break
  }
}

function appendNode (node, text) {
  var newNode = document.createElement(node)
  var textNode = document.createTextNode(text)
  newNode.appendChild(textNode);
  app.appendChild(newNode);
}

function appendLink (link, text) {
  var a = document.createElement('a')
  a.setAttribute('href', link);
  a.innerHTML = text;
  app.appendChild(a);
}

function emptyNode (node) {
  while (node.firstChild) {
    app.removeChild(node.firstChild);
  }
}

function setNavActive (nav) {
  console.log(navs)
  for (key in Object.keys(navs)) {
    if (navs[key] !== undefined) {
      navs[key].classList.remove("active")
    }
  }
  nav.classList.add("active")
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

function renderClasses () {
  appendNode('h2', 'classes')
  appendNode('p', 'Schedule coming soon!')
}

function renderContact () {
  appendNode('h2', 'contact')
  appendNode('p', '021 0244 2687')
  appendLink('mailto:marygoulteryoga@gmail.com', 'marygoulteryoga@gmail.com')
}
