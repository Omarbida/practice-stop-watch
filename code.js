let _sec = document.getElementById('sec')
let _min = document.getElementById('min')
let _mlsec = document.getElementById('mlsec')

let mlsec = 0
let sec = 0
let min = 0
let startCountUp
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
}
document.getElementById('start').onclick = function () {
  startCountUp = startCountUp && !cleared ? startCountUp : startcount()
  cleared = false
}
document.getElementById('reset').onclick = function () {
  mlsec = 0
  sec = 0
  min = 0

  screenUpdate()
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
