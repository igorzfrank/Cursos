cont = soma = 0
while True:
    numero = int(input('Digite um valor: '))
    if numero == 999:
        break
    cont += 1
    soma += numero
print(f'A soma dos {cont} valores foi de {soma}')
