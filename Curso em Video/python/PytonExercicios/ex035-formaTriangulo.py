print('-=-'*15)
print('Analisador de Triângulos')
print('-=-'*15)
v1 = float(input('Primeiro segmento: '))
v2 = float(input('Segunddo segmento: '))
v3 = float(input('Terceiro segmento: '))
if v1+v2 > v3:
    if v1+v3 > v2:
        if v2+v3 > v1:
            print('Os segmento acima PODEM FORMAR um triângulo!')
else:
    print('Os segmento acima NÃO PODEM FORMAR um triângulo!')