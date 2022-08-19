def tabela(jogador='<desconhecido>',gols=0):
    print(f'O jogador {jogador} fez {gols} gol(s) no campeonato.')


print('-' * 30)
nome = str(input('Nome do jogador: '))
g = str(input('Número de Gols: '))
if g.isnumeric():
    g = int(g)
else:
    g = 0
if nome.strip() == '':
    tabela(gols=g)
else:
    tabela(nome, g)