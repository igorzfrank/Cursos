valores = []
while True:
    valor = int(input('Digite um valor: '))
    if valor in valores:
        print('Valor duplicado! Não vou adicionar...')
    else:
        valores.append(valor)
    opcao = str(input('Deseja continuar [s/n]?: ')).lower()
    if opcao == 'n':
        break
print('=-' * 20)
print(f'Você digitou os valores {sorted(valores)}')