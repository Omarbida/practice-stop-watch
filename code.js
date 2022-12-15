let _sec = document.getElementById('sec')
let _min = document.getElementById('min')
let _mlsec = document.getElementById('mlsec')
let _checkpoints = document.getElementById('checkpoints')
let mlsec = 0
let sec = 0
let min = 0
let startCountUp
let runing = false

const save =
  '<div class="row checkpoints col-12">\
    <div class="col-2 save">$$min</div>\
    <div class="separat col-1 save">:</div>\
    <div class="col-2 save">$$sec</div>\
    <div class="separat col-1 save">:</div>\
    <div class="col-2 save">$$mlsec</div>\
  </div>'

show('start')
hide('stop')

function startcount() {
  return setInterval(() => {
    mlsec += 1
    if (mlsec == 100) {
      mlsec = 0
      sec += 1
    }
    if (sec == 60) {
      sec = 0
      min += 1
    }
    screenUpdate()
  }, 10)
}

let cleared = true

document.getElementById('stop').onclick = function () {
  clearInterval(startCountUp)
  cleared = true
  runing = false
  show('start')
  hide('stop')
}
document.getElementById('start').onclick = function () {
  startCountUp = startCountUp && !cleared ? startCountUp : startcount()
  cleared = false
  runing = true
  show('stop')
  hide('start')
}
document.getElementById('reset').onclick = function () {
  mlsec = 0
  sec = 0
  min = 0
  _checkpoints.innerHTML = ''
  screenUpdate()
}
document.getElementById('save').onclick = function () {
  if (runing) {
    _checkpoints.innerHTML += save
      .replaceAll('$$min', min)
      .replaceAll('$$sec', sec)
      .replaceAll('$$mlsec', mlsec)
  }
}

function screenUpdate() {
  // 1/100 sec
  if (mlsec == 0) {
    _mlsec.innerHTML = '00'
  } else {
    _mlsec.innerHTML = mlsec
    if (mlsec.lenght < 1) {
      _mlsec.innerHTML = '0' + mlsec
    }
  }
  //sec
  if (sec == 0) {
    _sec.innerHTML = '00'
  } else {
    _sec.innerHTML = sec
    if (_sec.innerHTML.length == 1) {
      _sec.innerHTML = '0' + sec
    }
  }
  //min
  if (min == 0) {
    _min.innerHTML = '00'
  } else {
    _min.innerHTML = min
    if (_min.innerHTML.length == 1) {
      _min.innerHTML = '0' + min
    }
  }
}

function show(id) {
  document.getElementById(id).style.display = 'block'
}
function hide(id) {
  document.getElementById(id).style.display = 'none'
}
