/************ Liste içerisindeki son elemana ulaşmak veya eleman eklemek  **********/ 
let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son öğe değişti....."

let firstChild = document.querySelector("ul#list>li:last-child")
firstChild.innerHTML = "ilk öğe değişti....."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")

liDOM.innerHTML = "Kendi oluşturduğumuz element"
// ulDOM.append(liDOM)
ulDOM.prepend(liDOM)