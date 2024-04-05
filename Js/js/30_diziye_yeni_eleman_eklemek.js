let items = [10, 20, 30, 40, ]
console.log("items - ilk hali : ", items)

//Array: sona oge/eleman eklemek -> push
items.push(50)
console.log("50 : ", items)

//Array: başa oge/eleman eklemek -> unshift
items.unshift(5)
console.log("5: ", items)

// Array: sondaki ogeyi cikarmak -> pop
let lastItem = items.pop() // son elemani lastItem elemanina ekledik
console.log("lastItem : ", lastItem)

// Array: enbastaki elemani cikarmak
let firstItem = items.shift()  // ilk elemani firstItem' a ekledik
console.log("firstItem : ", firstItem)

// Array icerisindeki bir ogenin bilgisinin  degistirilmesi
items[0] = 25
console.log(items)

