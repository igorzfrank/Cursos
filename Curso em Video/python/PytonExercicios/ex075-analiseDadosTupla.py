primeiro = int(input('Digite um número: '))
segundo = int(input('Digite outro número: '))
terceiro = int(input('Digite mais um número: '))
quarto = int(input('Digite o último número: '))
numeros = (primeiro, segundo, terceiro, quarto)
c = 0
print('Você digitou os valores: {}'.format(numeros))
print('O Valor 9 apareceu {} vezes.'.format(numeros.count(9)))
if 3 in numeros:
    print('O Valor 3 apareceu na {}ª posição.'.format(numeros.index(3)+1))
else:
    print('O valor 3 não foi digitado em nenhuma posição.')
print('Os valores pares digitados foram: ', end='')
while c < 4:
    if numeros[c] % 2 == 0:
        print(numeros[c], end=' ')
    c += 1
