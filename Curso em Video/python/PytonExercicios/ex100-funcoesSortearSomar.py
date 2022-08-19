from random import randint

def sorteio(num):
    print(f'Sorteando {num} valores da lista: ', end='')
    for c in range(0,num):
        numeros.append(randint(0,10))
        print(numeros[c], end= ' ')
    print('PRONTO!')

def pares(a):
    soma = 0
    print(f'Somando os valores pares de {a} temos ', end='')
    for c in range(0,len(a)):
        if a[c] % 2 == 0:
            soma += a[c]
    print(soma)

numeros = []
num = int(input('Quantos números você quer sortear? '))
sorteio(num)
pares(numeros)


