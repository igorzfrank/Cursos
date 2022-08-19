numeros = ('zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove', 'vinte')

escolha = int(input('Digite um número entre 0 e 20: '))
while escolha < 0 or escolha > 20:
    escolha = int(input('Tente novamente. Digite um número entre 0 e 20: '))
print('Você digitou o número {}!'.format(numeros[escolha]))