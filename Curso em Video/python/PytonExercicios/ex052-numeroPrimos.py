numero = int(input('Digite um número: '))
primo = 0
for c in range(1, numero+1):
    if numero % c == 0:
        print('\033[1;33m', end='')
        print(c, end=' ')
        primo += 1
    else:
        print('\033[1;31m', end='')
        print(c, end=' ')
print('\033[m\nO número {} foi divisível {} vezes!'.format(numero,primo))
if primo == 2:
    print('E por isso ele é PRIMO!')
else:
    print('E por isso ele é NÃO É PRIMO!')