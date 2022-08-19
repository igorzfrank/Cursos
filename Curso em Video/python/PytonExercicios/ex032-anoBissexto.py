from datetime import datetime
dado = int(input('Qual ano deseja analisar? Coloque 0 para analisar o ano atual: '))
now = datetime.now()
if dado == 0:
    ano = now.year
else:
    ano = dado
etapa1 = ano % 4
etapa2 = ano % 100
etapa3 = ano % 400
if etapa1 == 0:
    if etapa2 == 0:
        if etapa3 == 0:
            print('O ano de {} é SIM um ano BISSEXTO!'.format(ano))
        else:
            print('O ano de {} NÃO é um ano BISSEXTO!'.format(ano))
    else:
        print('O ano de {} é SIM um ano BISSEXTO!'.format(ano))
else:
    print('O ano de {} NÃO é um ano BISSEXTO!'.format(ano))

