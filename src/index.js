let sayHello = require('../util/sayHello.js')
let upperCase = require('../util/upperCase.js')

let msg = sayHello('ben')
let result = upperCase(msg)


let $main = document.querySelector('#main')
$main.innerHTML = result
