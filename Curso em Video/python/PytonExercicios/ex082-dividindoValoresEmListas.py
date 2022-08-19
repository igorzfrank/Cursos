valores = []
pares = []
impares = []
while True:
    valores.append(int(input('Digite um número: ')))
    opcao = str(input('Quer continuar? [S/N]: ')).lower()
    if opcao == 'n':
        break
print('-=' * 30)
print(f'A lista completa é {valores}')
for c in range(0,len(valores)):
    if valores [c] % 2 == 0:
        pares.append(valores[c])
    else:
        impares.append(valores[c])
print(f'A lista de pares é {pares}')
print(f'A lista de ímpares é {impares}')
