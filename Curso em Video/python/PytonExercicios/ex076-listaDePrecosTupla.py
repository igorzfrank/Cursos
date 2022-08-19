c = 0
itens = ('Lapis', 'Borracha', 'Caderno', 'Estojo', 'Transferidor', 'Compasso', 'Mochila', 'Canetas', 'Livro', 1.75, 2.00, 15.90, 25.00, 4.20, 9.99, 120.32, 22.30, 34.90)
print('-'* 40)
print(f'{"LISTAGEM DE PREÇOS":^40}')
print('-'* 40)
while c < 9:
    print(f'{itens[c]:.<30}R$: {itens[c-9]:>7.2f}')
    c += 1
print('-'* 40)