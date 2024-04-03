// -----------------  Koşullarla çalışmak.  -----------------------
let userName = prompt("Kullanıcı adını giriniz : ")
let age = prompt("Yasiniz:")

if (userName &&  age >= 18) {
    console.log("ehliyet alabilirsiniz. ")
} else if (!userName) {
    console.log("Kullanici Adiniz Yok")
} else if (!(age >= 18)) {
    console.log("Yaş bilginiz yok veya 18 yaşından küçüksünüz")
} 

const Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  default:
    console.log("This animal is extinct.");
}
