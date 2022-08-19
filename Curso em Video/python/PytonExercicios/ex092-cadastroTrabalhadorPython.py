from datetime import datetime

now = datetime.now()
dados = {}
dados['Nome'] = str(input('Nome: '))
nasc = int(input('Ano de Nascimento: '))
dados['Idade'] = now.year - nasc
while True:
    carteira = int(input('Carteira de Trabalho (0 não tem): '))
    dados['CTPS'] = carteira
    if carteira > 0:
        dados['Contratação'] = int(input('Ano de Contratação: '))
        dados['Salário'] = int(input('Salário R$:'))
        dados['Aposentadoria'] = dados['Idade'] + ((dados['Contratação'] + 35) - now.year)
        break
    elif carteira < 0:
        print('Valor Inválido!')
    else:
        break
print('-' * 30)
for i, d in dados.items():
    print(f' - {i} tem o valor {d}')
