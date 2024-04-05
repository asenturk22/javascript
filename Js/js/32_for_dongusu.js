

let users = ["Lorem", "Ipsum", "Dolar"]

for (index = 0; index < users.length; index++) {
    console.log(users[index])
}

const userListDOM = document.querySelector("#userList")

for (index = 0; index < users.length; index++) {
    const liDOM = document.createElement('li')
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
    console.log(users[index])
}