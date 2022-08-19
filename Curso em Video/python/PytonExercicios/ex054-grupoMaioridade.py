from datetime import date
anoAtual = date.today().year
maiorIdade = 0
menorIdade = 0
for c in range(1,8):
    anoNasc = int(input('Em que ano a {}º pessoa nasceu?: '.format(c)))
    if anoAtual-anoNasc < 18:
        menorIdade += 1
    else:
        maiorIdade += 1
print('Ao todo tivemos {} pessoas MENORES de idade!'.format(menorIdade))
print('E também tivemos {} pessoas MAIORES de idade!'.format(maiorIdade))