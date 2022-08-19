print('===== LOJAS SNOWBALL =====')
valor = float(input('Preço das compras: R$ '))
print('FORMAS DE  PAGAMENTO:')
print('[ 1 ] à vista no dinheiro/cheque')
print('[ 2 ] à vista no cartão')
print('[ 3 ] 2x no cartão')
print('[ 4 ] 3x ou mais no cartão')
opcao = int(input('Qual será a opção de pagamento?: '))
if opcao == 1:
    print('A sua compra no valor de R$:{:.2f} à vista no DINHEIRO/CHEQUE ira custar no final R$:{:.2f}'.format(valor, valor*0.9))
elif opcao == 2:
    print('A sua compra no valor de R$:{:.2f} à vista no CARTÃO ira custar no final R$:{:.2f}'.format(valor, valor*0.95))
elif opcao == 3:
    print('A sua compra no valor de R$:{:.2f} em 2X NO CARTÃO sairá 2 parcelas de R$:{:.2f}'.format(valor, valor/2))
elif opcao == 4:
    parcelas = int(input('Quantas parcelas?: '))
    valorParcelado = (valor*1.2)/parcelas
    print('A sua compra no valor de R$:{:.2f} em {}X NO CARTÃO terá {} parcelas de R$:{:.2f}'.format(valor, parcelas, parcelas, valorParcelado))
    print('A sua compra no final irá custar R$:{:.2f}'.format(valor*1.2))
else:
    print('OPÇÃO INVÁLIDA! TENTE NOVAMENTE MAIS TARDE!')