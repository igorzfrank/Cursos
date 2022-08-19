print('-=-'*15)
print('Analisador de Triângulos 2.0')
print('-=-'*15)
v1 = float(input('Primeiro segmento: '))
v2 = float(input('Segunddo segmento: '))
v3 = float(input('Terceiro segmento: '))
if v1+v2 > v3:
    if v1+v3 > v2:
        if v2+v3 > v1:
            if v1 == v2 and v2 == v3:
                print('Os segmento acima PODEM FORMAR um triângulo EQUILÁTERO!')
            elif v1 == v2 or v1 == v3 or v1 == v3:
                print('Os segmento acima PODEM FORMAR um triângulo ISÓSCELES!')
            else:
                print('Os segmento acima PODEM FORMAR um triângulo ESCALENO!')



else:
    print('Os segmento acima NÃO PODEM FORMAR um triângulo!')