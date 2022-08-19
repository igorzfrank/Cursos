import random
from time import sleep
print('\033[1:34m-\033[m'*25)
print('\033[1:37mPEDRA\033[m - \033[1:38mPAPEL\033[m - \033[1:35mTESOURA\033[m')
print('\033[1:34m-\033[m'*25)
print('Suas opções:')
print('[ 0 ] \033[1:37mPEDRA\033[m')
print('[ 1 ] \033[1:38mPAPEL\033[m')
print('[ 2 ] \033[1:35mTESOURA\033[m')
jogador = int(input('Qual é a sua jogada?: '))
if jogador <= 2:
    cpu = random.randint(0, 2)
    itens = ('Pedra', 'Papel', 'Tesoura')
    print('JO')
    sleep(1)
    print('KEN')
    sleep(1)
    print('PO!!!')
    print('\033[1:34m-\033[m' * 25)
    print('Computador jogou {}!'.format(itens[cpu]))
    print('Jogador jogou {}!'.format(itens[jogador]))
    print('\033[1:34m-\033[m' * 25)
    if jogador == 0:
        if cpu == 0:
            print('\033[1:33mEMPATE\033[m!')
        elif cpu == 1:
            print('\033[1:31mCOMPUTADOR VENCE!\033[m')
        else:
            print('\033[1:32mJOGADOR VENCE!\033[m')
    elif jogador == 1:
        if cpu == 0:
            print('\033[1:32mJOGADOR VENCE!\033[m')
        elif cpu == 1:
            print('\033[1:33mEMPATE\033[m!')
        else:
            print('\033[1:31mCOMPUTADOR VENCE!\033[m')
    else:
        if cpu == 0:
            print('\033[1:31mCOMPUTADOR VENCE!\033[m')
        elif cpu == 1:
            print('\033[1:32mJOGADOR VENCE!\033[m')
        else:
            print('\033[1:33mEMPATE\033[m!')
else:
    print('\033[1:31mJOGADA INVÁLIDA!\033[m')