print('-'*30)
print('COMPARADOR NÙMERICO ULTRA PLUS')
print('-'*30)
n1 = float(input('Digite o primeiro número: '))
n2 = float(input('Digite o segundo número: '))
if n1 > n2:
    print('O PRIMEIRO valor de {} é o MAIOR!'.format(n1))
elif n1 == n2:
    print('Os DOIS valores são IGUAIS!')
else:
    print('O SEGUNDO valor de {} é o MAIOR!'.format(n2))