// let ve const ile değişken tanımlama

// var ile değişken tanımlama
/*
var serverName = "api.kodluyoruz.org"
console.log(serverName)
document.writeln(serverName)
*/

// let ile değişken tanımlama : bos tanimlamak
let serverName;
console.log(serverName)

// let ile değişkene bilgi atamak
serverName = "https://kodluyoruz.org";
console.log(serverName)


// let ile değişkene bilgi atayarak tanımlamak:
let password = "1234";

// değişken ataması yapmadan önce kullanmaya çalışmak: 
/* HATALI KULLANIM */
/*
console.log(fullName)
let fullName = "Abdullah Şentürk";
*/
let fullName = "Abdullah Şentürk";
console.log(fullName)


// let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek:
fullName = "Lorem Ipsum Dolar";
console.log(fullName)

// birleştirme veya ekleme işlemi
fullName += " Yeni eklenen bilgi";
console.log(fullName)

// const ile değişkeni tanımlamaya çalışmak 
const serverPassword = "1234"; // set
console.log(serverPassword)








