

const timer = document.getElementById("counter")
let incr = parseInt(timer.innerHTML, 10);

const countUp = setInterval(function() {
  if (!suspend) {
    timer.innerHTML = incr += 1
  }
}, 1000)


countUp
const pause = document.getElementById("pause")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const like = document.getElementById("heart")
const list = document.querySelector('ul')
let suspend = false;
plus.addEventListener('click', function() {
  
  timer.innerHTML = incr += 1
  
})

minus.addEventListener('click', function() {
  if (incr > 0) {
    timer.innerHTML = incr -= 1
  }
})

pause.addEventListener('click', function() {
  if (pause.innerText == "pause") {
    suspend = true;
    plus.disabled = true;
    minus.disabled = true;
    like.disabled = true;
    pause.innerText = "resume"
  } 
  else if (pause.innerText == "resume") {
    suspend = false;
    plus.disabled = false;
    minus.disabled = false;
    like.disabled = false;
    pause.innerText = "pause"
  }

})

like.addEventListener('click', function() {
  let like = document.createElement('li')
  like.
  

})