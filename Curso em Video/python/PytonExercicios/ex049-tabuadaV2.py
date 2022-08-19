print('-'*40)
print('TABUADA TURBINADA')
print('-'*40)
n = int(input('Digite um número para ver a sua tabuada: '))
print('-'*40)
for c in range (0,11):
    print('{} x {:2} = {}'.format(n, c, n*c))
print('-'*40)