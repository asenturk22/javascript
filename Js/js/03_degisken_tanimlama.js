//---------------- let ve const ile değişken tanımlama ------------------------------


// var ile değişken tanımlama
var serverName = "api.senturk.org"
console.log(serverName)

// let ile değişken tanımlama
let serverName2;
console.log(serverName2)            //undefined

// let ile değişkene bilgi almak 
serverName2 = "https://www.senturk.org"
console.log(serverName2)

// let ile değişkene bilgi atayarak tanımlamak
let password = "1234";
console.log(password)

// değişken ataması yapmadan önce kullanmaya calismak
/* HATALI KULLANIM */
// console.log(fullName)               //error
// let fullName = "Abdullah Ş."           //var ile tanımlansaydı hata vermeyecekti. 

let fullName = "Abdullah Ş.";
console.log(fullName)

// birleştirme veya ekleme işlemi 
fullName + "Yeni eklenen bilgi"
console.log(fullName)
console.log(fullName + "Yeni eklenen bilgi")

// const ile değişkeni boş tanımlamak
// const serverPassword;  // sadece değişken tanımlandı ama içi boş ??

// const ile değişken tanımlamak
const SERVER_PASSWORD = "şasdkfaşkdfj"
console.log(SERVER_PASSWORD)

//SERVER_PASSWORD = 1234   // ERROR
//console.log(SERVER_PASSWORD)
