import random
import time

numeros = []

print('-' * 40)
print('          JOGA NA MEGA SENA          ')
print('-' * 40)
jogos = int(input('Quantos jogos você quer que eu sorteie?: '))
print('-' * 40)
print(f'          SORTEANDO {jogos} JOGOS          ')
print('-' * 40)
for c in range(1,jogos+1):
    print(f'Jogo {c}: ', end='')
    for n in range(0,6):
        while True:
            escolha = random.randint(0,60)
            if escolha not in numeros:
                numeros.append(escolha)
                break
    time.sleep(.5)
    print(sorted(numeros))
    numeros.clear()
print('-' * 40)
print('               BOA SORTE!              ')
print('-' * 40)
