times = ('Palmeiras', 'Corinthians', 'Fluminense', 'Athletico-PR', 'Flamengo',
         'Internacional', 'Atlético-MG', 'Bragantino', 'América-MG', 'Santos',
         'São Paulo', 'Botafogo', 'Goiás', 'Ceará-SC', 'Coritiba',
         'Avaí', 'Fortaleza', 'Cuiabá', 'Atlético-GO', 'Juventude')
print('=' *40)
print('            MENU            ')
print('=' *40)
print('[1] Todos os times do Brasileirão')
print('[2] 5 Primeiros colocados do Brasileirão')
print('[3] 4 Últimos colocados do Brasileirão')
print('[4] Times em ordem alfabética')
print('[5] Qual posição está o Avaí?')
print('[0] Fechar MENU')
print('=' *40)
escolha = int(input('Qual opção você deseja?: '))
print('=' *40)
if escolha == 1:
    print('Lista dos times do Brasileirão: {}'.format(times))
elif escolha == 2:
    print('Os 5 primeiros colocados são: {}'.format(times[:5]))
elif escolha == 3:
    print('Os 4 últimos colocados são: {}'.format(times[-4:]))
elif escolha == 4:
    print('Lista dos times do Brasileirão em ordem alfabética: {}'.format(sorted(times)))
elif escolha == 5:
    print('O Avái está na {}ª posição!'.format(times.index('Avaí')+1))
elif escolha == 0:
    print('MENU Finalizado! VOLTE SEMPRE!')
else:
    print('OPÇÃO INVALIDA! ERROR 404')