from math import hypot
catetoOposto = float(input('Qual o comprimento do cateto oposto?: '))
catetoAdjacente = float(input('Qual ocomprimento do cateto adjacente?: '))
print('A hipotenusa vai medir {:.2f}!'.format(hypot(catetoOposto,catetoAdjacente)))