import random

win = 0

while True:
    print('=-'*10)
    print('VAMOS JOGAR PAR OU ÍMPAR')
    print('=-' * 10)
    valor = int(input('Diga um valor: '))
    escolha = str(input('Par ou Ímpar? [P/I]: ').upper())
    cpu = random.randint(0,10)
    resultado = (valor + cpu) % 2
    print('-' * 10)
    print('Você jogou {} e o computador {}. Total de {}, '.format(valor, cpu, valor + cpu), end='')
    print('deu PAR' if resultado == 0 else 'deu ÍMPAR')
    print('-' * 10)
    if resultado == 0 and escolha == 'P':
        print('\033[1;32mVENCEU!\033[m')
        print('Vamos jogar novamente...')
        win += 1

    elif resultado != 0 and escolha == 'I':
        print('\033[1;32mVENCEU!\033[m')
        print('Vamos jogar novamente...')
        win += 1

    else:
        print('\033[1;31mPERDEU!\033[m')
        break

print('=-'*10)
print('GAME OVER! Você venceu {} vezes.' .format(win))