// hata yönetimi icin try-catch kullanimi
let products;

try {
    products.forEach(item => {
        console.log(item)
    });
} catch (error) {
    console.log("error :", error)
}

console.log("hata yonetimi duzgun calisiyor")

let info = "senturk.com"
console.log(info)

