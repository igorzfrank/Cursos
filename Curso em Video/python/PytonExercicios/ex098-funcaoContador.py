from time import sleep

def contador(i, f, p):
    inicio = i
    final = f
    if p < 0:
        p *= -1
    print(f'Contagem de {i} até {f} de {p} em {p}:')
    if f > i:
        while inicio <= f:
            print(f'{inicio}', end=' ')
            inicio += p
            sleep(.5)
        sleep(.5)
        print('FIM!')
        print('-' * 30)
    else:
        while inicio >= f:
            print(f'{inicio}', end=' ')
            inicio -= p
            sleep(.5)
        sleep(.5)
        print('FIM!')
        print('-' * 30)

contador(1,10,1)
contador(10,0,2)

print('Agora é a sua vez de personalizar a contagem!')
i = int(input('Inicio: '))
f = int(input('Final: '))
p = int(input('Passo: '))
contador(i,f,p)
