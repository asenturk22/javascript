// Temel Kurallar:
// 1- Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir.
// 2- Bir fonksiyon dışarı bilgi gönderebilir (return) veya göndermeyebilir. 
// 3- Mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir. 

function greetings(firstName = "", lastName = "" ) {
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
} 

//greetings()
//greetings("Ahmet")
greetings("Ahmet", "Dağ")


function greetings2(firstName = "", lastName = "" ) { //default parametre kullanıyor.
    let info = `Merhaba ${firstName} ${lastName}`
    return info
} 

greetings("Ahmet", "Dağ")


function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

domIdWriteInfo('greeting', greetings2("Ahmet", "Dağ"))

let htmlInfo = `<span style="color:red"> Color REDD </span> `
domIdWriteInfo('greeting', htmlInfo)


function userCheck(userName, age) {
    if (userName &&  age >= 18) {
        console.log("ehliyet alabilirsiniz. ")
    } else if (!userName) {
        console.log("Kullanici Adiniz Yok")
    } else if (!(age >= 18)) {
        console.log("Yaş bilginiz yok veya 18 yaşından küçüksünüz")
    } 
}

console.log(userCheck("Ahmet", 25))