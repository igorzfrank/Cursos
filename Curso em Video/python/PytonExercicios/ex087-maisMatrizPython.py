matriz = [[],[],[]]
pares = 0
soma = 0
maior = 0
for l in range(0,3):
    for c in range(0,3):
        matriz[l].append(int(input(f'Digite o valor da posição [{l}][{c}]: ')))
print('-=' * 20)
for l in range(0,3):
    for c in range(0,3):
        print(f'[ {matriz[l][c]} ] ',end='')
        if matriz[l][c] % 2 == 0:
            pares += matriz[l][c]
        if c == 2:
            soma += matriz[l][c]
        if l == 1:
            if c == 0:
                maior = matriz[l][c]
            else:
                if matriz[l][c] > maior:
                    maior = matriz[l][c]
    print()
print('-=' * 20)
print(f'A soma dos valores pares é {pares}.')
print(f'A soma dos valores da terceira coluna é {soma}.')
print(f'O maior valor da segunda linha é {maior}.')