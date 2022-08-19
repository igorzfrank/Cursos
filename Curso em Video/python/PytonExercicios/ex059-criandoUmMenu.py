numero1 = int(input('Primeiro valor: '))
numero2 = int(input('Segundo valor: '))
menu = 0
print('-=-'*10)
while menu != 5:
    print('[ 1 ] Somar')
    print('[ 2 ] Multiplicar')
    print('[ 3 ] Maior')
    print('[ 4 ] Novos Números')
    print('[ 5 ] Sair do Programa')
    print('-=-' * 10)
    menu = int(input('>>>>> Qual é a sua opção?: '))
    print('-=-'*10)
    if menu == 1:
        print('A soma entre {} e {} é {}!'.format(numero1, numero2, numero1+numero2))
    elif menu == 2:
        print('A multiplicação entre {} e {} é {}!'.format(numero1, numero2, numero1 * numero2))
    elif menu == 3:
        if numero1 > numero2:
            print('Entre {} e {} o maior é {}'.format(numero1, numero2, numero1))
        elif numero1 == numero2:
            print('Os números são iguais.')
        else:
            print('Entre {} e {} o maior é {}'.format(numero1, numero2, numero2))
    elif menu == 4:
        print('Informe os números novamente!')
        numero1 = int(input('Primeiro valor: '))
        numero2 = int(input('Segundo valor: '))
    elif menu == 5:
        print('Finalizando...')
    else:
        print('Opção inválida. Tente novamente')
    print('-=-' * 10)
print('Fim do programa! Volte sempre!')