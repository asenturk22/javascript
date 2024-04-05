// Object Destructuring

let settings = {
    userName : "loremIpsum",
    password : "BadPassword",
    isActive : false,
    ip: "127.0.0.1",
    serverName: "senturk.org"
}

// rename && destructuring
let {userName:user, password, isActive, ip, serverName} = settings
console.log(user, password, isActive, ip, serverName)

// obje icindeki bazi bilgilerin cikarilmasi
let {userName:usr, password:psd, isActive:active, ...newSettings} = settings
console.log(usr, psd, active)
console.log(newSettings)

// objenin destructuring ile kopyalanmasi
let settings2 = {...settings}
settings2.userName = "degisti"
console.log(settings)
console.log(settings2)
