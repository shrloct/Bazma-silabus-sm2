const { kelasBaru, getKelasAsync, kelasAsync } = require('./arsitektur.js')
console.log(kelasBaru(1))
console.log(kelasBaru(2))
console.log(kelasBaru(3))

getKelasAsync(1).then((kelasSija) => {
    console.log(kelasSija)
})

kelasAsync(1).then((Sija) => {
    console.log(Sija)
}) 
