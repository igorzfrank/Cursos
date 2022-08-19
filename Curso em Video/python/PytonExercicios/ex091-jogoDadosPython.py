from random import randint
from time import sleep
from operator import  itemgetter

jogo = {'jogador1': randint(1,6),
        'jogador2': randint(1,6),
        'jogador3': randint(1,6),
        'jogador4': randint(1,6)}

ranking = []

print('Valores sorteados: ')
for j, d in jogo.items():
        print(f'{j} tirou {d} no dado.')
        sleep(1)

ranking = sorted(jogo.items(), key=itemgetter(1), reverse=True)
print('-' * 30)
print(' -- RANKING DOS JOGADORES -- ')
print('-' * 30)
for i, v in enumerate(ranking):
        print(f'{1+i}º lugar: {v[0]} com {v[1]}.')
        sleep(1)