jogadores = []
dados = {}

while True:
    dados['Nome'] = str(input('Nome do jogador: '))
    partidas = int(input(f'Quantas partidas {dados["Nome"]} jogou? '))
    gols = []
    total = 0
    for c in range(0,partidas):
        gol = int(input(f'   Quantos gols na partida {c+1}? '))
        gols.append(gol)
    dados['Gols'] = gols[:]
    dados['Total'] = sum(gols)
    jogadores.append(dados.copy())
    opcao = str(input('Quer continuar? [S/N] ')).upper()
    if opcao == 'N':
        break
print('-=' * 30)
print(f'Cod Nome           Gols          Total')
print('-' * 50)
for i, d in enumerate(jogadores):
    print(f'{i:>3} ', end='')
    for v in d.values():
        print(f'{str(v):<15}', end='')
    print()
print('-' * 50)
while True:
    dadosJogador = int(input('Monstrar dados de qual jogador? (999 para parar) '))
    print('-' * 50)
    if dadosJogador >= 0 and dadosJogador < len(jogadores):
        print(f'  -- LEVANTAMENTO DO JOGADOR {jogadores[dadosJogador]["Nome"]}: ')
        print('-' * 50)
        for c in range(0,len(jogadores[dadosJogador]["Gols"])):
            print(f'   No jogo {c+1} fez {jogadores[dadosJogador]["Gols"][c]} gols.')
        print('-' * 50)
    elif dadosJogador == 999:
        break
    else:
        print('Jogador Inexistente! Tente Novamente!')
        print('-' * 50)
print(' << ENCERRADO >> ')
print('-' * 50)
