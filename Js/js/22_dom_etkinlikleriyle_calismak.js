let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick )


function domClick() {
    console.log("tıklandı")
    console.log(this)
    console.log(this.innerHTML)
    //console.log(this.style.color = "red")
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"
}