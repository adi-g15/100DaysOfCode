const theStart17 = 1594924200000

let now = ( Date.now() - theStart17 )/(1000*3600*24)

console.log("Completed", now, 'days')
console.log("Today is Day", Math.trunc(now) + 1)
console.log("Tommorow will be Day", Math.trunc(now) + 2)

console.log("\nHey me, Bas jaise ho chalte jao :D\n...and you will feel PROUD of this one day")