let kgPlasticos = parseInt(gets())
let diasNecessarios = 0

while(kgPlasticos > 1){
      kgPlasticos /= 2
      diasNecessarios++
}
console.log(`Serão necessários ${diasNecessarios} dias`)