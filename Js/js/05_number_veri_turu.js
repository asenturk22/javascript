//number veri türü tanımlamak
let price = 100
let tax = 0.18
let priceTax = price * tax
console.log("Fiyat: ", price, "Kdv oranı: ", tax,  "Kdv tutarı : ", priceTax)

// arttırma ve azaltma işlemleri
let counter = 320
counter = counter + 1 //uzun yontem
counter += 1
counter++
console.log(counter)
counter--
console.log(counter)
counter *= 10
console.log(counter)
counter /= 10
console.log(counter)


// mod(kalan) alma %:
// sayi tek mi çift mi?
console.log(3 % 2)

// 8 urun alan koliye tüm ürünler sığıyor mu?
console.log("Koli örneği : ", 18 % 8)

// us alma örneği
console.log(2 ** 4)

// aşağı yuvarlama - yukarı yuvarlama - yakına yuvarlama
console.log(Math.floor(1.9))    //aşağı yuvarlar.
console.log(Math.ceil(1.1))     //yukarı yuvarlar.
console.log(Math.round(1.2))    //yakına yuvarlama


