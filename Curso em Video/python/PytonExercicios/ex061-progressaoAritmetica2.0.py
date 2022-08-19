print('='*20)
print('10 TERMOS DE UMA PA 2.0')
print('='*20)
primeiroTermo = int(input('Primeiro termo: '))
razao = int(input('Razão: '))
print('='*20)
c = 0
while c != 10:
    resultado = primeiroTermo + (razao*c)
    print(resultado, end=' > ')
    c += 1
print('Acabou!')