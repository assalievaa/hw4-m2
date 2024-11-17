var icr = document.querySelector('.increment')
var dec = document.querySelector('.decrement')
var counter = document.querySelector('p')

var count = 0

icr.addEventListener("click" , ()=>{
    counter.style.color = 'green'
    count++
    counter.innerHTML = count
})

dec.addEventListener("click" , ()=>{
    if (count > 0) {
        counter.style.color = 'red'
        count--
        counter.innerHTML = count
    }
})





var xt = document.querySelector('.x')
var yt = document.querySelector('.y')
var square = document.querySelector('.square')
square.addEventListener("mousemove", (event)=>{

  const x = event.clientX;
  const y = event.clientY;

  xt.innerHTML = x
  yt.innerHTML = y
})






var c1 = document.querySelector('.circle1')
var c2 = document.querySelector('.circle2')
var message = prompt('write the color: ')

var start_traffic_jam = (msg) => {
    if (msg.toLocaleLowerCase().trim() === 'red') {
        c2.style.backgroundColor = 'beige'
        c1.style.backgroundColor = 'red'
    }else if (msg.toLocaleLowerCase().trim() === 'green') {
        c1.style.backgroundColor = 'beige'
        c2.style.backgroundColor = 'green'
    }
}
start_traffic_jam(message)
