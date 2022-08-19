d = int(input('Quantos dias o carro foi alugado?: '))
km = int(input('Quantos km foram rodados?: '))
total = (d*60) + (km*0.15)
print('O total a pagar é de {:.2f}'.format(total))