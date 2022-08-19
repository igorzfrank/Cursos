print('-'*25)
print('Mega Calculadora IMC Plus')
print('-'*25)
peso = float(input('Qual é o seu peso em KG?: '))
altura = float(input('Qual é a sua altura em m?: '))
imc = peso / (altura*altura)
print('O IMC dessa pessoa é de {:.1f}'.format(imc))
if imc < 18.5:
    print('PARABÉNS! você está ABAIXO DO PESO ideal!')
elif 18.5 <= imc < 25:
    print('PARABÉNS! você está na faixa de PESO NORMAL!')
elif 25 <= imc < 30:
    print('CUIDADO! Você está na faixa de SOBREPESO!')
elif 30 <= imc < 40:
    print('CUIDADO! Você está na faixa de OBESIDADE!')
else:
    print('CUIDADO! VOCÊ ESTÁ COM OBESIDADE MORBIDA!')