let username = "abdullah"
const DOMAIN = "senturk.org"

let email = username + "@" + DOMAIN
console.log("Merhaba", username, "sitemize hoşgeldin","mail adresiniz: ", email)

let info = `
    Merhaba ${username} sitemize hoşgeldiniz. 
    mail adresin uzunluğu: ${email.length}
    günün saat bilgisi : ${new Date().getHours()}
`  //ALTGR+,
console.log(info)