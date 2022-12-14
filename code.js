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
    _mlsec.innerHTML = mlsec
    _min.innerHTML = min
    _sec.innerHTML = sec
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

  _mlsec.innerHTML = mlsec
  _min.innerHTML = min
  _sec.innerHTML = sec
}
