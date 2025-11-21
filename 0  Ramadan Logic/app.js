


     ///     RAMADAN LOGIC

let ramadan = new Date("17 feb 2026")
let current = new Date()

let remaingDays = Math.round(((ramadan - current)  / (1000 * 60 * 60 * 24)  ))

console.log(remaingDays)