// let h2 = document.getElementsByTagName("h2")
// console.log(h2.title.innerHTML)

let title = document.getElementById('title')
console.log(title.innerHTML)

let link = document.querySelector("#senturkLink")
link.innerHTML = "senturk.com"
link.style.color = "red"
link.classList.add('btn')