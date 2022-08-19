nota50 = 0
nota20 = 0
nota10 = 0
nota1 = 0

print('='* 30)
print('  BANCO IFM  ')
print('='* 30)
valor = int(input('Que valor você quer sacar? R$: '))
while True:
    if valor >= 50:
        valor -= 50
        nota50 += 1
    else:
        if valor >= 20:
            valor -= 20
            nota20 += 1
        else:
            if valor >= 10:
                valor -= 10
                nota10 += 1
            else:
                if valor >= 1:
                    valor -= 1
                    nota1 += 1
                else:
                    break
if nota50 > 0:
    print('Total de {} notas de 50 reais'.format(nota50))
if nota20 > 0:
    print('Total de {} notas de 20 reais'.format(nota20))
if nota10 > 0:
    print('Total de {} notas de 10 reais'.format(nota10))
if nota1 > 0:
    print('Total de {} moedas de 1 real'.format(nota1))
print('='* 30)
print('Volte sempre ao BANCO IFM! Tenha um bom dia!')
