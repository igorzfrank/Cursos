print('Digite um número para')
numero = int(input('calcular o seu Fatorial: '))
resultado = 1
print('Calculando {}! = '.format(numero), end='')
while numero != 1:
    print('{} x '.format(numero), end='')
    resultado *= numero
    numero -= 1
print('1 = {}'.format(resultado))