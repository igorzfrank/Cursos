import random
print('-=-'*20)
print('Vou pensar em um número entre 0 e 5, tente advinhar!')
print('-=-'*20)
n = int(input('Em qual número eu pensei?: '))
print('Processando....')
sorte = random.randint(0,5) #faz o  computador pensar
if n == sorte:
    print('PARABÉNS! Pensei no número {}, você conseguiu me vencer.'.format(sorte))
else:
    print('GANHEI! Pensei no número {}, você não conseguiu dessa vez!'.format(sorte))

