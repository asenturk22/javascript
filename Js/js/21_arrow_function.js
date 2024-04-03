function hello(name) {
    console.log(`Merhaba ${name}`)
}

hello("javascript")

const helloFuncV1 = (name) => { console.log(`Merhaba ${name}`)}

helloFuncV1("helloFuncV1")

const helloFuncV2 = (name) =>  console.log(`Merhaba ${name}`)
helloFuncV2("helloFuncV2")


const helloFuncV3 = (name, age) =>  
    console.log(`Merhaba ${name} ${age} yaşındasınız.`)
helloFuncV3("helloFuncV3", 25)


const helloFuncV4 = (name, age) => {
    let info = `Merhaba ${name}, ${age}`
    console.log(info)
    return info
}
    helloFuncV3("helloFuncV3", 25)

