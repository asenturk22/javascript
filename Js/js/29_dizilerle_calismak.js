// array - dizilerle çalışmak

// array oluşturmak
let domain = "senturk"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(items)

let emptyArray = [] // boş list

// array içerisindeki eleman/oge sayisini ogrenmek
console.log(
    items.length  // array içindeki oge sayisi
)

// array içerisindeki ilk elemanin cagirilmasi
console.log(items[0])

// array icindeki son elemanin cagrilmasi
console.log(items[items.length - 1])

// degisken icindeki bilginin array olup olmadiginin kontrol edilmesi 
console.log(
    typeof(items)       //object olarak cikti veriyor. 
)

console.log(
    Array.isArray(items)
)

// 
