print('='*20)
print('10 TERMOS DE UMA PA 2.0')
print('='*20)
primeiroTermo = int(input('Primeiro termo: '))
razao = int(input('Razão: '))
print('='*20)
c = 0
contadorFinal = 10
adicionar = 1
while c < 10:
    resultado = primeiroTermo + (razao*c)
    print(resultado, end=' > ')
    c += 1
print('PAUSA')
while adicionar != 0:
    adicionar = int(input('Quantos termos você quer mostrar a mais?: '))
    contadorFinal += adicionar
    if adicionar > 0:
        while c < contadorFinal:
            resultado = primeiroTermo + (razao * c)
            print(resultado, end=' > ')
            c += 1
    print('PAUSA')
print('Progressão finalizada com {} termos mostrados!'.format(c))
