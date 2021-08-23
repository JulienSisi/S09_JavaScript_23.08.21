// Fonctionnalité 1 et 1.bis 
let footer = document.querySelector("footer")
let count = 0
footer.addEventListener("click", function() {
  count ++
  console.log("clique "+ count)
})

// Fonctionnalité 2
let hamburger = document.querySelector('.navbar-toggler')
hamburger.addEventListener("click", function() {
  let nav = document.getElementById('navbarHeader')
  nav.classList.toggle('collapse')
})

// Fonctionnalité 3
let btn = document.querySelector('.card .btn-outline-secondary')
btn.addEventListener("click", function(){
  card = document.querySelector('.card')
  card.style.color = "red"
})

// Fonctionnalité 4
btn = document.querySelector('.col-md-4:nth-child(2) .card .btn-outline-secondary')
btn.addEventListener("click", function(){
  card = document.querySelector('.col-md-4:nth-child(2) .card')
  card.style.color === "green" ? card.style.color = "black" : card.style.color= "green"
})

// Fonctionnalité 5
let nav = document.querySelector('.navbar')
let bootstrap = true
let link = document.querySelector('head link')
nav.addEventListener("click", function() {
  if (bootstrap === true){
  link.parentNode.removeChild(link)
  bootstrap = false
  }
  else {
    document.querySelector('head').appendChild(link)
  }
})

// Fonctionnalités 6
function modifyCards(btn) {
  let body = btn.parentNode.parentNode.parentNode
  let bodyText = body.children[0]
  let cardImg = body.parentNode.children[0]
  let check = true
  btn.addEventListener("mouseover", function() {
    if (check === true) {
      bodyText.remove()
      cardImg.style.transform = "scale(0.2)"
      check = false
    }
    else {
      body.insertBefore(bodyText, body[0])
      cardImg.style.transform = "scale(1)"
      check = true
    }
  })
}
let btns = document.querySelectorAll(".card .btn-outline-secondary")
for(let i = 0; i < btns.length; i++) {
  btn = btns[i]
  modifyCards(btn)
}
btns = document.querySelectorAll(".card .btn-success")
for(let i = 0; i < btns.length; i++) {
  btn = btns[i]
  modifyCards(btn)
}

// Fonctionnalité 7 
let nextCard = document.querySelector(".jumbotron a:last-child")
nextCard.addEventListener("click", function() {
  let row = document.querySelector('main .row')
  let card = row.lastElementChild
  card.remove()
  row.insertBefore(card, row.firstElementChild)
})

// Fonctionnalité 8
let previousCard = document.querySelector(".jumbotron a")
previousCard.href = "#"
previousCard.addEventListener("click", function() {
  let row = document.querySelector('main .row')
  let card = row.firstElementChild
  card.remove()
  row.appendChild(card)
})

// Fonctionnalité 9
let resizeBody = function(e) {
  if (focused == true) {
    switch(e.code){
      case "KeyA":
        body.classList.add("col-4")
        body.style.marginLeft = "0"
      break;
      case "KeyY":
        body.classList.add("col-4")
        body.style.marginLeft = "calc(100%/12*4)"
      break;
      case "KeyP":
        body.classList.add("col-4")
        body.style.marginLeft = "calc(100%/12*8)"
      break;
      case "KeyB":
        body.style.marginLeft = "0"
        body.classList.remove("col-4")
      break;
    }
  }

// Réinitialisation des fonctionnalités
}
let logo = document.querySelector('.navbar-brand')
logo.addEventListener("focus", function() {
  focused = true
})
logo.addEventListener("focusout", function() {
  focused = false
})
let body = document.querySelector('body') 
body.addEventListener('keydown', resizeBody)

