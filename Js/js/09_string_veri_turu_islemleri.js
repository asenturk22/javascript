let email = "senturkabdullah@gmail.com"
let firstName = "Abdullah"
let lastName = "Şentürk"

// string karakter sayisi -> length
console.log(email.length)

// ilk karakteri bulmak
console.log(firstName[0])
console.log(firstName.charAt(1))


// büyük harf / küçük harf : 
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// string içinde istediğimiz bilgiyi aramak ve yerini bulmak -> search:
console.log(email.search("@"))
console.log(email[15])

email.search("olmayan") //-1
console.log(email.search("olmayan"))
// belirli bir yere kadar al -> slice : (domain bilgisi)
let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)
console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.')) //sadece gmail kısmını aldık
)
// bilgiyi değiştir -> replace : 
email.replace('gmail.com', 'senturk.com')
console.log(email)
email = email.replace('gmail.com', 'senturk.com')
console.log(email)

// istediğim bilgi var mı ? -> includes : 
email.includes('asdfas') //false
email.includes("@")

// istediğim bilgiyle başladı mı ? bitti mi -> startsWidth, endsWidth : 
console.log(
    email.endsWith('senturk.com')
)

// İlk harflerini büyük yapmak
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}
`
console.log(fullName)