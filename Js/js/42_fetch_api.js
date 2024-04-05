// developer.mozilla.org
// Json Placeholder API - https://jsonplaceholder.typicode.com/


//JSON dosyadan veri cekildi. 
fetch("data/settings.json").then(
    response => {
        return response.json()
    }
).then(
    responseJSON => {
        console.log(responseJSON)
        console.log(responseJSON.userName)
    }
)


//API uzerinden veri cektik
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json[0]))


let userListDOM = document.querySelector("#userList")

fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => json.forEach(element => {

          let liDOM = document.createElement("li")
          liDOM.innerHTML = element.title
          userListDOM.appendChild(liDOM)
      }
      ))
      .catch((err) => console.log(err))