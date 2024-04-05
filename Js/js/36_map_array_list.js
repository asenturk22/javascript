const USERS = ["AYSE", "Mehmet", "Tugce", "Fatma"]


// userName içerisindeki orginal isim kalsin
// shortName icinde ilk harf buyuk (A.)
// newName icinde ilk harf buyuk olsun. 
// {useName: "AYSE", shortName: "A.", newName: "Ayse"}

const NEW_USERS = USERS.map( user => user.toLowerCase() )
console.log(NEW_USERS)

const USERS_OBJ = USERS.map( item => {
        return {
            userName: item, 
            shortName: `${item[0]}.`, 
            newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` 
        }
    }
)

console.log(USERS_OBJ)

 
// Asagidaki gibide yapabilirdik.  return ifadesi yazmadan () parantezleri içerisnde obj nesnesini 
// yerleştirerek geri donusu yapmis olduk. 
const USERS_OBJ2 = USERS.map( item => 
    ({
        userName: item, 
        shortName: `${item[0]}.`, 
        newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` 
    })
)

console.log(USERS_OBJ2)