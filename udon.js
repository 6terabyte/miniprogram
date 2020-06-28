const arr = ["う","ど","ん"]
const log = []

interval = setInterval(()=>{
  const a = arr[Math.floor(Math.random()*arr.length)]
  log.push(a)
  console.log(a)
  if(arr.length<log.length)log.shift()
  let flag = true
  if(arr.join('')===log.join('')){
    console.log(arr.join(''))
    clearInterval(interval)
  }
},100)
