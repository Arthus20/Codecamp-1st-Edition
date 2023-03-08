let amostra = gets().split(',')

for(const arvore of amostra) {
if(arvore < 50) {
    print('Isolar e iniciar protocolo de cuidados');
  } else if(arvore >= 50 && arvore < 75) {
    print('Manter sob observação');
  } else if(arvore >= 75) {
    print('Descartar da lista');
  }
}