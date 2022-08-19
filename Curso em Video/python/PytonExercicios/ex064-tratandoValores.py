numero = 0
contador = 0
total = 0
while numero != 999:
    numero = int(input('Digite um número: '))
    if numero != 999:
        total += numero
        contador += 1
print('Você digitou {} números e a soma entre eles foi {}'.format(contador,total))
