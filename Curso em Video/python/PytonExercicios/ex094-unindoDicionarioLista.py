dados = {}
pessoas = []
resp = 'S'
soma = 0
while resp == 'S':
    dados['Nome'] = str(input('Nome: '))
    while True:
        sexo = str(input('Sexo: [M/F] ')).upper()
        if sexo == 'M' or sexo == 'F':
            dados['Sexo'] = sexo
            break
        else:
            print('ERRO! Por favor, digite apenas M ou F')
    dados['Idade'] = int(input('Idade: '))
    pessoas.append(dados.copy())

    while True:
        resp = str(input('Quer continuar? [S/N] ')).upper()
        if resp == 'S' or resp == 'N':
            break
        else:
            print('ERRO! Responda apenas S ou N.')
print('-' * 30)
print(f'A) Ao todo temos {len(pessoas)} pessoas cadastradas.')
for i,d in enumerate(pessoas):
    soma += d['Idade']
print(f'B) A média de idade é de {soma/len(pessoas)} anos.')
print(f'C) As mulheres cadastradas foram ', end='')
for i, d in enumerate(pessoas):
    if d['Sexo'] == 'F':
        print(f'{d["Nome"]} - ', end='')
print()
print(f'D) Lista da pessoas que estão acima da média:')
for i,d in enumerate(pessoas):
    if d['Idade'] > soma/len(pessoas):
        print(f'   Nome = {d["Nome"]}; Sexo = {d["Sexo"]}; Idade = {d["Idade"]};')
print('<< ENCERRADO >>')



