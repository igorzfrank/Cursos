total = 0
caro = 0
barato = 0
cont = 0
produtoBarato = ''

print('-'* 30)
print(' LOJA SUPER BARATÃO ')
print('-'* 30)
while True:
    produto = str(input('Nome do Produto: ').capitalize())
    preco = float(input('Preço: R$: '))
    continuar = str(input('Quer continuar [S/N]?: ').upper())
    cont += 1
    total += preco
    if preco > 1000:
        caro += 1
    if cont == 1:
        barato = preco
        produtoBarato = produto
    else:
        if preco < barato:
            barato = preco
            produtoBarato = produto
    if continuar == 'N':
        break
print('---------- FIM DO PROGRAMA ----------')
print('O total da compra foi R$:{}'.format(total))
print('Temos {} produtos custando mais que R$:1.000,00'.format(caro))
print('O produto mais barato foi {} que custou R$:{:.2f}'.format(produtoBarato,barato))