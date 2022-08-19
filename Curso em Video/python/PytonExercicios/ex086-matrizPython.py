matriz = [[],[],[]]
for l in range(0,3):
    for c in range(0,3):
        matriz[l].append(int(input(f'Digite o valor da posição [{l}][{c}]: ')))
print('-=' * 20)
for l in range(0,3):
    for c in range(0,3):
        print(f'[ {matriz[l][c]} ] ',end='')
    print()