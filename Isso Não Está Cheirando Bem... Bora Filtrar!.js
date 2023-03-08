let gases = [...gets().split(', '), ...gets().split(', '), ...gets().split(', ')]
const gasesPerigosos = ["NO2","SO2","CO","FHO"]
let gasEncontrado = false
gases.forEach((gas)=>{
      if(gasesPerigosos.includes(gas)){
            console.log(`Filtro Específico para a Molécula ${gas}`)
            gasEncontrado = true
      }
})
if(!(gasEncontrado)){
      console.log("Filtro Simples")  
}