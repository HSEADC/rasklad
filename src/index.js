import './index.css'
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate
  this.el = el
  this.loopNum = 0
  this.period = parseInt(period, 10) || 2000
  this.txt = ''
  this.tick()
  this.isDeleting = false
}

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length
  var fullTxt = this.toRotate[i]

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1)
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

  var that = this
  var delta = 200 - Math.random() * 100

  if (this.isDeleting) {
    delta /= 2
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period
    this.isDeleting = true
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false
    this.loopNum++
    delta = 500
  }
  let timeoutID
  timeoutID = setTimeout(function () {
    that.tick()
  }, delta)
  // setInterval(function () {
  //   console.log('работает')
  //   clearTimeout(timeoutID)
  //   var f = $('.wrap')
  //   let content = f.innerText
  //   if (content == ' любим') {
  //     console.log('работает???')
  //   }
  // }, 1000)
}

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite')
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type')
    var period = elements[i].getAttribute('data-period')
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period)
    }
  }
  // INJECT CSS
  var css = document.createElement('style')
  css.type = 'text/css'
  css.innerHTML =
    '.typewrite > .wrap { border-right: 0.5vw solid #313131 height:2vw}'
  document.body.appendChild(css)
}

$('.starsvg1').on('mouseout', function () {
  $(this).css('-webkit-animation-play-state', 'paused')
  $(this).css('animation-play-state', 'paused')
})

$('.starsvg1').on('mouseover', function () {
  $(this).css('-webkit-animation-play-state', 'running')
  $(this).css('animation-play-state', 'running')
})
