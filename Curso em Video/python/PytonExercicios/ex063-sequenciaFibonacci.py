print('-'*20)
print('Sequência de Fibonacci')
print('-'*20)
termos = int(input('Quantos termos você quer mostrar?: '))
print('~'*20)
contador = 0
f1 = 0
f2 = 0
ft = 0
while contador < termos:
    print('{} > '.format(ft), end='')
    contador += 1
    if f1 != 0 and f2 != 0:
        ft = f1 + f2
        f1 = f2
        f2 = ft
    else:
        ft = 1
        f1 = f2
        f2 = ft
print('FIM')
print('~'*20)