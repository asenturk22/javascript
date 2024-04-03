// Veri türünü öğrenmek ve veri türünü dönüştürmek

//typeof:
let price = 111
let stringPrice = "111"
let hasPassword = true

// string(metinsel) bilgileri int ve float'a dönüştürmek
console.log(
    "price: ", typeof(price)
)

console.log(
    "stringPrice: ", typeof(stringPrice)
)

console.log(
    "hasPssword: ", typeof(hasPassword)
)


// string(metinsel) bilgileri int ve float'a dönüştürmek
let number1 = "11"
console.log("number1 -  type : ", number1, typeof(number1))
number1 = parseInt(number1)
console.log("number1: ", number1 )
console.log("number1 -  type : ", number1, typeof(number1))

let number2 = "11.2px"
number2 = parseFloat(number2)
console.log("number2 -  type : ", number2, typeof(number2))

//number veri tipinden string'e donuşturmek : 
let number3 = 55
number3 = number3.toString()
console.log(number3, typeof(number3))
