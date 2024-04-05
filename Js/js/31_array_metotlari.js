

let items = [1, 2, 3, 4, 5]

// Array icinde Array
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Mehmet", "Fatih"]

items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items)
console.log(items.length)
console.log(items[0][0])


// Array icerisinde oge ayirmak -> splice(pos, item)
let newItems = items.splice(2, 4)
console.log(newItems)

// Array icerisindeki ogenin index bilgisini bulmak -> indexOf("value")
items.unshift("lorem")
items.push("ipsum")
console.log(items)

// Array kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(copyItems)

copyItems.pop() //son ogeyi cikarttik. 
console.log(items)
console.log(copyItems)

console.log("Kopyalandiktan sonraki hali")
copyItems = items.slice()   //kopyalama yapti
copyItems.pop() //son ogeyi cikarttik. 
console.log(items)
console.log(copyItems)

let es6Items = [...items] // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items)

//es6 birden fazla array yapsini birlestirmek
let allUsers = [...femaleUsers, ...maleUsers]
console.log(allUsers)

// Array icerisindeki bilgiyi String'e çevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join("---"))

// istedigimiz Index bilgisine oge eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Melissa")
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem")
console.log(allUsers)

