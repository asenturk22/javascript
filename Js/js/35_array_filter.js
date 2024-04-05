// 5 harften fazla olanlar (6)

const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5) 
console.log(NEW_PRODUCTS)

// aktif kullanicilar ??
const USERS = [
    {fullName : "Ayşe Sumer", isActive: false},
    {fullName : "Ahmet Urgan", isActive: true},
    {fullName : "Mehmet Tas", isActive: true},
    {fullName : "Arda Senturk", isActive: false},
    {fullName : "Mehmet Oruc", isActive: true},

]


//const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
const ACTIVE_USERS = USERS.filter(user => user.isActive)
 
console.log(ACTIVE_USERS)