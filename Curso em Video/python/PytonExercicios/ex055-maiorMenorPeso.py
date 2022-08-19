maiorPeso = 0
menorPeso = 1000
for c in range(1,6):
    peso = float(input('Peso da {}º pessoa em (Kg): '.format(c)))
    if peso > maiorPeso:
        maiorPeso = peso
    if peso < menorPeso:
        menorPeso = peso
print('O MAIOR peso lido foi {}Kg.'.format(maiorPeso))
print('O MENOR peso lido foi {}Kg.'.format(menorPeso))
