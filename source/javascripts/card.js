class Card {

  init () {
    this.cards = document.getElementsByClassName('center')
    for (let i = 0; i < this.cards.length; i++) {
      let card = this.cards[i]
      card.style.transform = "translate3d(0,0,0) matrix3d(1,0,0.00,0.00,0.00,1,0.00,0,0,0,1,0,0,0,0,1) scale(1)"
      this.onMouseOver(card)
      this.onMouseOut(card)
    }
  }

  onMouseOver (c) {
    c.addEventListener('mousemove', function (e) {
      let mouseX = ((e.pageX - c.offsetLeft) / c.offsetWidth)
      let mouseY = ((e.pageY - c.offsetTop) / c.offsetHeight)

      let matrix3Dx = ((mouseX/10000)*1)-0.0001
      let matrix3Dy = ((mouseY/10000)*1)-0.0001

      c.style.transform = "translate3d(0,0,0) matrix3d(1,0,0.00,"+matrix3Dx+",0.00,1,0.00,"+matrix3Dy+",0,0,1,0,0,0,0,1)"
    })
  }

  onMouseOut (c) {
    console.log('inited')
    c.addEventListener('mouseout', function () {
      c.style.transform = "translate3d(0,0,0) matrix3d(1,0,0.00,0.00,0.00,1,0.00,0,0,0,1,0,0,0,0,1) scale(1)"
    })
  }

}

let cards = new Card
cards.init()
