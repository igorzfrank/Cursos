from time import sleep

def maior(*num):
    maior = 0
    print('Analisando os valores passados...')
    if len(num) > 0:
        for c in range(0,len(num)):
            if c == 0:
                maior = num[0]
            else:
                if num[c] > maior:
                    maior = num[c]
            print(f'{num[c]}', end=' ')
            sleep(.5 )
    print(f'Foram informados {len(num)} valores ao todo.')
    print(f'O maior valor informado foi {maior}.')
    print('-' * 30)


maior(2, 9, 4, 5, 7, 1)
maior(4, 7, 0)
maior(1,0)
maior(6)
maior()
