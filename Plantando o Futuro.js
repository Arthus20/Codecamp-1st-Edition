let metros = parseInt(gets())
let metrosCorrigido = metros - 10

if(metrosCorrigido === 0){
      console.log("Plantar!")
}else{
      console.log(`O buraco deve ${(metrosCorrigido < 0 ? "avançar":"retroceder")} ${Math.abs(metrosCorrigido)} metros`)
}