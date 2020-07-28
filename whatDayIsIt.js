const theStart17 = 1594924200000

let now = ( Date.now() - theStart17 )/(1000*3600*24)

console.log("Completed", now, 'days')
console.log("Today is Day", Math.trunc(now) + 1)
console.log("Tommorow will be Day", Math.trunc(now) + 2)

console.log("\nHey me, I will make you PROUD one day\nBas jaise ho chalte jao :D")