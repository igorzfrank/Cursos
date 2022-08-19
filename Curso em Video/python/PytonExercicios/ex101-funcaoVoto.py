from datetime import datetime

def voto(ano):
    now = datetime.now()
    idade = now.year - ano
    if idade < 16:
        return f'Com {idade} anos: NÃO VOTA!'
    elif idade >= 18 and idade < 70:
        return f'Com {idade} anos: VOTO OBRIGATÓRIO!'
    else:
        return f'Com {idade} anos: VOTO OPCIONAL!'


print('-'*30)
ano = int(input('Em que ano você nasceu? '))
print(voto(ano))