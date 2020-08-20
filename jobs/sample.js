const a = [56,56,6743,32];

(async function(){await new Promise((val) => console.log(val), (err) => console.error(err))
}, 1000)})()

console.log('hi');



// let count = 0
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     setTimeout(() => {
//         a[i] = a[i]*a[i]
//         ++count
//     }, 1000);
// }

// // while (count < a.length) {
// //     // (async () => await setTimeout(() => {
// //         console.log(count);
// //     // }, 500))()
// // }
// setTimeout(() => {
//     console.log(count);
// }, 999.5);
// console.log('found');