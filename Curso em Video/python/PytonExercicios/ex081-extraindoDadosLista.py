valores = []
while True:
    valores.append(int(input('Digite um valor: ')))
    opcao = str(input('Deseja continuar [s/n]?: ')).lower()
    if opcao == 'n':
        break
print('-=' * 30)
print(f'Você digitou {len(valores)} elementos.')
valores.sort(reverse=True)
print(f'Os valores em ordem decrescente {valores}')
if 5 in valores:
    print('O valor 5 faz parte da lista!')
else:
    print('O valor 5 não faz parte da lista!')