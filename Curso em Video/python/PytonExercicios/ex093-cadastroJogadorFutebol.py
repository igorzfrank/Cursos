dados = {}
dados['Nome'] = str(input('Nome do jogador: '))
partidas = int(input(f'Quantas partidas {dados["Nome"]} jogou? '))
gols = []
total = 0
for c in range(0,partidas):
    gol = int(input(f'   Quantos gols na partida {c+1}? '))
    gols.append(gol)
dados['Gols'] = gols[:]
dados['Total'] = sum(gols)
print('-=' * 30)
print(dados)
print('-=' * 30)
for i, d in dados.items():
    print(f'O campo {i} tem o valor {d}.')
print('-=' * 30)
print(f'O jogador {dados["Nome"]} jogou {partidas} partidas.')
for i, g in enumerate(gols):
    print(f'   => Na partida {i+1}, fez {g} gols.')
print(f'Foi um total de {dados["Total"]} gols.')