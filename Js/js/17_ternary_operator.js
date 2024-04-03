
// eğer kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunamadı yaz. 

let userName = prompt("Kullanıcı bilginizi yazınız")
let info = document.querySelector("#info")

info.innerHTML = `${userName.length > 0 ? userName : "Kullanıcı bilginiz bulunamadı..."} `