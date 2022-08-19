resposta = 'S'
contador = maior = menor = total = 0
while resposta in 'Ss':
    numero = int(input('Digite um número: '))
    resposta = str(input('Quer continuar? [S/N]: ')).upper().strip()[0]
    if contador == 0:
        menor = numero
        maior = numero
    contador += 1
    total += numero
    if numero < menor:
        menor = numero
    if numero > maior:
        maior = numero
print('Você digitou {} números e a média deles foi de {}!'.format(contador, total/contador))
print('O maior valor foi {} e o menor valor foi {}!'.format(maior, menor))
