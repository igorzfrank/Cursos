import random
print('-=-'*20)
print('Vou pensar em um número entre 0 e 10, tente advinhar!')
print('-=-'*20)
contador = 0
sorte = random.randint(0,10) #faz o computador pensar em um numero de 0 a 10
numero = 11
while sorte != numero:
    numero = int(input('Qual é o seu palpite?: '))
    contador += 1
    if numero > sorte:
        print('Menos... Tente mais uma vez.')
    if numero < sorte:
        print('Mais... Tente mais uma vez.')
    if numero == sorte:
        print('Acertou com {} tentativas. Parabéns!'.format(contador))
