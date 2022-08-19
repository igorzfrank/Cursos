def fatorial(valor, show=False):
    total = 1
    for c in range(valor, 0, -1):
        total *= c
        if show:
            print(c, end='')
            if c > 1:
                print(' x ', end='')
            else:
                print(' = ', end='')
    return total


valor = int(input('Fatorial de qual valor?: '))
opcao = str(input('Deseja ver todos os números? [S/N]: ')).upper()

if opcao == 'S':
    opcao = True
else:
    opcao = False
print('-' * 30)
print(fatorial(valor, opcao))