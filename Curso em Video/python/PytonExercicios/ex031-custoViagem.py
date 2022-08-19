distancia = int(input('Qual a distancia da sua viagem em km?: '))
if distancia <= 200:
    print('Você está prestes a começar uma viagem de {}km.'.format(distancia))
    print('E o preço da sua passagem será de R$:{:.2f}!'.format(distancia*0.5))
else:
    print('Você está prestes a começar uma viagem de {}km.'.format(distancia))
    print('E o preço da sua passagem será de R$:{:.2f}!'.format(distancia*0.45))