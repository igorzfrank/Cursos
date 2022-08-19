dados = {}
dados['Nome'] = str(input('Nome: '))
dados['Média'] = float(input(f'Média de {dados["Nome"]}: '))
print('-' * 30)
if dados["Média"] >= 7:
    dados['Situação'] = 'Aprovado'
elif 5 <= dados["Média"] < 7:
    dados['Situação'] = 'Recuperação'
else:
    dados['Situação'] = 'Reprovado'

for i,d in dados.items():
    print(f'{i} é igual a {d}')