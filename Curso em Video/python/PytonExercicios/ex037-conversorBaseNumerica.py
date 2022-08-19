numero = int(input('Digite um número inteiro: '))
print('Escolha uma das bases para conversão:')
print('[ 1 ] converter para BINÁRIO')
print('[ 2 ] converter para OCTAL')
print('[ 3 ] converter para HEXADECIMAL')
opcao = int(input('Qual a sua opção?: '))
if opcao == 1:
    print('{} convertiddo para BINÁRIO é igual a {}.'.format(numero, bin(numero)[2:]))
elif opcao == 2:
    print('{} convertiddo para OCTAL é igual a {}.'.format(numero, oct(numero)[2:]))
elif opcao == 3:
    print('{} convertiddo para HEXADECIMAL é igual a {}.'.format(numero, hex(numero)[2:]))
else:
    print('ERROR 404! Opção inválida reinicie o programa!')