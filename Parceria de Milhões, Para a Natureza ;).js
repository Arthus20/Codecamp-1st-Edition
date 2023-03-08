const moleculas = gets().split(', ')
let nMaiorMolecula = 0
moleculas.forEach((molecula)=>{
      if(molecula.length > nMaiorMolecula){
            nMaiorMolecula = molecula.length
      }
})
nMaiorMolecula = nMaiorMolecula <= 5 ? "O filtro deve ser: Filtro Normal" : nMaiorMolecula > 5 && nMaiorMolecula <= 10 ? "O filtro deve ser: Filtro Específico" : "O filtro deve ser: Filtro Duplo Específico";

console.log(nMaiorMolecula);