let a= [
  "Initializing Hack tool...",
  "Connecting to Facebook...",
  "Connection to server 1...",
  "Connecting failed. Retrying...",
  "Connection to server 2...",
  "Connected succesfuly.",
  "Username jatinsharma._2023...",
  "Trying Brute Force...",
  "200K passwords tried...",
  "Match not found...",
  "Another 200k passwords tried...",
  "Match not found...",
  "Another 200k passwords tried...",
  "Match found.",
  "Accessing Account...",
  "Hack Successful "
]
const sleep = async (seconds)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(true)
    },seconds*500)
  })
}
const showhack = async (message)=>{
  await sleep(2)
  // console.log(message)
  text.innerHTML =text.innerHTML + message + "<br>"
}
(async ()=>{
  for(let i=0; i<a.length; i++){
    await showhack(a[i])
  }
})()