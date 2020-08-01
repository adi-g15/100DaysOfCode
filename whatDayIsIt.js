const theStart = Date.parse('Fri Jul 17 2020 00:00:01 GMT+0530 (India Standard Time)')

let now = ( Date.now() - theStart )/(1000*3600*24)

console.log("Completed", now, 'days')
console.log("Today is Day", Math.trunc(now) + 1)
console.log("Tommorow will be Day", Math.trunc(now) + 2)

console.log("\nHey me, Bas jaise ho chalte jao :D\n...and you will feel PROUD of this one day")