let atividades = gets().split(', ')

const statusAtividades = {
    Reflorestamento: gets(),
    EsgotoTratado: gets(),
    EmissaoDeCarbono: gets(),
    EnergiaSustentavel: gets(),
}
const status = {
      "Feito":"Não multar",
      "Em progresso":"Avaliação de progresso",
      "Não feito":"Multa"
}
atividades.forEach((atividade, x)=>{
      console.log(status[statusAtividades[atividade]])
})