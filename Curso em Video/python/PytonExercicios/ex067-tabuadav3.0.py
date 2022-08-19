while True:
    n = int(input('Quer ver a tabuada de qual valor?: '))
    if n < 0:
        break
    print('-'* 30)
    for c in range (1,11):
        print('{} x {} = {}'.format(n, c, n*c))
    print('-' * 30)
print('PROGRAMA TABUADA ENCERRADO. Volte Sempre!')