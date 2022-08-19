import random

maior = 0
menor = 10
c = 0
numeros = (random.randint(0,10), random.randint(0,10), random.randint(0,10), random.randint(0,10), random.randint(0,10))

while c < 5:
    if numeros[c] > maior:
        maior = numeros[c]
    if numeros[c] < menor:
        menor = numeros[c]
    c += 1

print('Os valores sorteados foram: ', end='')
for c in numeros:
    print(f'{c} ', end='')
print('\nO maior número sorteado foi {}.'.format(maior))
print('O menor número sorteado foi {}'.format(menor))