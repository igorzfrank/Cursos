pessoas = []
dados = []
while True:
    dados.append(str(input('Nome: ')))
    dados.append(float(input('Peso: ')))
    if len(pessoas) == 0:
        maior = menor = dados[1]
    else:
        if maior < dados[1]:
            maior = dados[1]
        elif menor > dados[1]:
            menor = dados[1]
    pessoas.append(dados[:])
    dados.clear()
    opcao = str(input('Deseja continuar [s/n]?: ')).lower()
    if opcao == 'n':
        break
print('-=' * 30)
print(f'Ao todo, você cadastrou {len(pessoas)} pessoas')
print(f'O maior peso encontrado foi de {maior}Kg. Peso de ', end='')
for p in pessoas:
    if p[1] == maior:
        print(f'{p[0]}... ',end='')
print(f'\nO menor peso encontrado foi de {menor}Kg. Peso de ', end='')
for p in pessoas:
    if p[1] == menor:
        print(f'{p[0]}... ',end='')