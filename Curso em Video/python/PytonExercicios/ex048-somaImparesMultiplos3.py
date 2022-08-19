somatorio = 0
total = 0
for c in range(1,501,2):
    resultado = c % 3
    if resultado == 0:
        somatorio += c
        total += 1
print('A soma de todos os {} valores solicitados é {}'.format(total,somatorio))


