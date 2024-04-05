// local storage işlemleri 

let user = {userName: "abdullahsenturk", isActive: true}

localStorage.setItem("userInfo", JSON.stringify(user))

let userInfo = localStorage.getItem("userInfo")
console.log(userInfo)

userInfo = JSON.parse(userInfo)
console.log(userInfo)


let userStatus = {userName: 'senturk', isActive: true}
localStorage.setItem('_user', userStatus)
localStorage.setItem('_user', JSON.stringify(userStatus))
let _userInfo = localStorage.getItem("_user")
_userInfo = JSON.parse(_userInfo)
console.log(_userInfo)