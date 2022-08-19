idadeTotal = 0
homem = ''
homemIdade = 0
contMulher = 0
for c in range(1,5):
    print('----- {}º Pessoa ------'. format(c))
    nome = str(input('Nome: '))
    idade = int(input('Idade: '))
    sexo = str(input('Sexo [M/F]: ')).upper()

    idadeTotal += idade

    if sexo == 'M':
        if idade > homemIdade:
            homemIdade = idade
            homem = nome
    elif sexo == 'F':
        if idade < 20:
            contMulher += 1
media = idadeTotal/4
print('------------------------')
print('A média de idade do grupo é de {} anos.'.format(media))
print('O homem mais velho tem {} anos e se chama {}.'.format(homemIdade, homem.capitalize()))
print('Ao todo são {} mulheres com menos de 20 anos.'.format(contMulher))