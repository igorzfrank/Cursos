masc = 0
fem = 0
maiorIdade = 0

while True:
    print('-' * 20)
    print('CADASTRE UM PASSOA')
    print('-' * 20)
    idade = int(input('Idade: '))
    sexo = str(input('Sexo [M/F]: ').upper())
    if sexo == 'M':
        masc += 1
    if sexo == 'F' and idade < 20:
        fem += 1
    if idade > 18:
        maiorIdade += 1
    print('-' * 20)
    continuar = str(input('Quer continuar [S/N]: ').upper())
    if continuar == 'N':
        break
print('-' * 20)
print('Total de pessoas com mais de 18 anos: {}.' .format(maiorIdade))
print('Ao todo temos {} homens cadastrados.' .format(masc))
print('E temos {} mulheres com menos de 20 anos.' .format(fem))